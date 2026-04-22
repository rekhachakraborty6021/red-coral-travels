'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'sonner';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface PayNowButtonProps {
    tourSlug: string;
    numberOfPeople: number;
    customerEmail: string;
    customerName: string;
    amount: number;
    bookingId?: string;
    disabled?: boolean;
}

export default function PayNowButton({
    tourSlug,
    numberOfPeople,
    customerEmail,
    customerName,
    amount,
    bookingId,
    disabled = false,
}: PayNowButtonProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handlePayment = async () => {
        setIsLoading(true);

        try {
            // Create checkout session
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    tourSlug,
                    numberOfPeople,
                    customerEmail,
                    customerName,
                    bookingId,
                }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to create checkout session');
            }

            const { url } = await response.json();

            // Redirect to Stripe Checkout URL
            if (url) {
                window.location.href = url;
            } else {
                throw new Error('No checkout URL received');
            }
        } catch (error: any) {
            console.error('Payment error:', error);
            toast.error(error.message || 'Payment failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            onClick={handlePayment}
            disabled={disabled || isLoading}
            className="w-full py-4 bg-green-600 text-white font-bold 
               rounded-lg text-lg hover:bg-green-700 
               disabled:bg-gray-400 disabled:cursor-not-allowed
               active:scale-[0.98] transition-all duration-200
               flex items-center justify-center gap-2"
        >
            {isLoading ? (
                <>
                    <span className="animate-spin">⏳</span>
                    Processing...
                </>
            ) : (
                <>
                    <span>💳</span>
                    Pay ₹{amount.toLocaleString('en-IN')} Now
                </>
            )}
        </button>
    );
}
