import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getTourBySlug } from '@/lib/data/tours';

const STRIPE_CONFIG = {
    currency: 'inr',
    paymentMethodTypes: ['card'] as Stripe.Checkout.SessionCreateParams.PaymentMethodType[],
};

export async function POST(request: NextRequest) {
    try {
        // Initialize Stripe at runtime
        const secretKey = process.env.STRIPE_SECRET_KEY;
        if (!secretKey) {
            return NextResponse.json(
                { error: 'Stripe is not configured' },
                { status: 500 }
            );
        }

        const stripe = new Stripe(secretKey, {
            apiVersion: '2025-11-17.clover',
            typescript: true,
        });

        const body = await request.json();
        const { tourSlug, numberOfPeople, customerEmail, customerName, bookingId } = body;

        // Validate input
        if (!tourSlug || !numberOfPeople || !customerEmail || !customerName) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const tour = getTourBySlug(tourSlug);
        if (!tour) {
            return NextResponse.json(
                { error: 'Tour not found' },
                { status: 404 }
            );
        }

        // Calculate amounts
        const baseAmount = tour.price * numberOfPeople;
        const taxAmount = Math.round(baseAmount * 0.05); // 5% tax
        const totalAmount = baseAmount + taxAmount;

        // Create Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: STRIPE_CONFIG.paymentMethodTypes,
            line_items: [
                {
                    price_data: {
                        currency: STRIPE_CONFIG.currency,
                        product_data: {
                            name: tour.title,
                            description: `${tour.duration.days}D/${tour.duration.nights}N - ${tour.destination}`,
                            images: [tour.images.main],
                        },
                        unit_amount: Math.round((baseAmount * 100) / numberOfPeople),
                    },
                    quantity: numberOfPeople,
                },
                {
                    price_data: {
                        currency: STRIPE_CONFIG.currency,
                        product_data: {
                            name: 'Taxes & Service Fees',
                            description: 'GST and processing charges',
                        },
                        unit_amount: taxAmount * 100,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${request.headers.get('origin')}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${request.headers.get('origin')}/payment-cancelled`,
            customer_email: customerEmail,
            metadata: {
                bookingId: bookingId || `BK${Date.now()}`,
                tourId: tour.id,
                tourSlug: tour.slug,
                tourTitle: tour.title,
                numberOfPeople: numberOfPeople.toString(),
                customerName,
            },
        });

        return NextResponse.json({
            sessionId: session.id,
            url: session.url,
        });
    } catch (error: any) {
        console.error('Stripe checkout error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to create checkout session' },
            { status: 500 }
        );
    }
}
