import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
    try {
        // Initialize Stripe at runtime
        const secretKey = process.env.STRIPE_SECRET_KEY;
        const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

        if (!secretKey || !webhookSecret) {
            return NextResponse.json(
                { error: 'Stripe is not configured' },
                { status: 500 }
            );
        }

        const stripe = new Stripe(secretKey, {
            apiVersion: '2025-11-17.clover',
            typescript: true,
        });

        const body = await request.text();
        const signature = request.headers.get('stripe-signature');

        if (!signature) {
            return NextResponse.json(
                { error: 'No signature' },
                { status: 400 }
            );
        }

        let event: Stripe.Event;

        try {
            event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
        } catch (err: any) {
            console.error('Webhook signature verification failed:', err.message);
            return NextResponse.json(
                { error: `Webhook Error: ${err.message}` },
                { status: 400 }
            );
        }

        // Handle the event
        switch (event.type) {
            case 'checkout.session.completed': {
                const session = event.data.object as Stripe.Checkout.Session;
                await handleSuccessfulPayment(session);
                break;
            }

            case 'payment_intent.succeeded': {
                const paymentIntent = event.data.object as Stripe.PaymentIntent;
                console.log('PaymentIntent succeeded:', paymentIntent.id);
                break;
            }

            case 'payment_intent.payment_failed': {
                const paymentIntent = event.data.object as Stripe.PaymentIntent;
                console.log('PaymentIntent failed:', paymentIntent.id);
                await handleFailedPayment(paymentIntent);
                break;
            }

            default:
                console.log(`Unhandled event type: ${event.type}`);
        }

        return NextResponse.json({ received: true });
    } catch (error: any) {
        console.error('Webhook error:', error);
        return NextResponse.json(
            { error: 'Webhook handler failed' },
            { status: 500 }
        );
    }
}

async function handleSuccessfulPayment(session: Stripe.Checkout.Session) {
    const fs = require('fs').promises;
    const path = require('path');

    const payment = {
        id: session.id,
        paymentIntentId: session.payment_intent,
        bookingId: session.metadata?.bookingId,
        tourId: session.metadata?.tourId,
        tourTitle: session.metadata?.tourTitle,
        customerEmail: session.customer_email,
        customerName: session.metadata?.customerName,
        numberOfPeople: session.metadata?.numberOfPeople,
        amount: session.amount_total ? session.amount_total / 100 : 0,
        currency: session.currency,
        status: 'succeeded',
        paidAt: new Date().toISOString(),
    };

    // Save payment record
    const filePath = path.join(process.cwd(), 'data', 'payments.json');

    try {
        let payments = [];
        try {
            const content = await fs.readFile(filePath, 'utf-8');
            payments = JSON.parse(content);
        } catch {
            // File doesn't exist
        }

        payments.push(payment);

        await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, JSON.stringify(payments, null, 2));

        console.log('Payment saved:', payment.id);

        // TODO: Send confirmation email
        // TODO: Update booking status
    } catch (error) {
        console.error('Error saving payment:', error);
    }
}

async function handleFailedPayment(paymentIntent: Stripe.PaymentIntent) {
    console.error('Payment failed:', {
        id: paymentIntent.id,
        amount: paymentIntent.amount,
        status: paymentIntent.status,
    });

    // TODO: Send failure notification
    // TODO: Update booking status to failed
}
