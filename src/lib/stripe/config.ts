import Stripe from 'stripe';

function getStripeInstance() {
    const secretKey = process.env.STRIPE_SECRET_KEY;

    if (!secretKey) {
        // Return a mock instance for build time
        if (process.env.NODE_ENV === 'production') {
            throw new Error('STRIPE_SECRET_KEY is not defined');
        }
        // For build time, return null and handle it in the API routes
        return null as any;
    }

    return new Stripe(secretKey, {
        apiVersion: '2025-11-17.clover',
        typescript: true,
    });
}

export const stripe = getStripeInstance();

export const STRIPE_CONFIG = {
    currency: 'inr',
    paymentMethodTypes: ['card'] as Stripe.Checkout.SessionCreateParams.PaymentMethodType[],
};
