'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PaymentCancelledPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 text-center">

                    {/* Cancelled Icon */}
                    <div className="mx-auto w-20 h-20 bg-yellow-100 rounded-full 
                        flex items-center justify-center mb-6">
                        <svg className="w-10 h-10 text-yellow-600" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Payment Cancelled
                    </h1>

                    <p className="text-lg text-gray-600 mb-8">
                        Your payment was not completed. No charges have been made to your account.
                    </p>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg 
                        p-6 mb-8 text-left">
                        <h2 className="font-bold text-lg mb-4">What happened?</h2>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">•</span>
                                <span>You cancelled the payment process</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">•</span>
                                <span>The payment session expired</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">•</span>
                                <span>There was an issue with the payment method</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
                        <h2 className="font-bold text-lg mb-4">Ready to try again?</h2>
                        <p className="text-sm text-gray-600 mb-4">
                            Your booking details are still saved. You can complete your payment
                            anytime or contact us for assistance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={() => router.back()}
                                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg 
                         font-semibold hover:bg-blue-700 transition-colors"
                            >
                                ← Return to Booking
                            </button>
                            <Link
                                href="/contact"
                                className="flex-1 px-6 py-3 bg-white border-2 border-gray-300 
                         text-center rounded-lg font-semibold hover:bg-gray-50 
                         transition-colors"
                            >
                                Contact Support
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <Link
                            href="/tours"
                            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg 
                       font-semibold hover:bg-gray-200 transition-colors"
                        >
                            Browse Other Tours
                        </Link>

                        <Link
                            href="/"
                            className="px-6 py-3 bg-white border border-gray-300 
                       rounded-lg font-semibold hover:bg-gray-50 
                       transition-colors"
                        >
                            Back to Home
                        </Link>
                    </div>

                    <div className="pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-600 mb-4">
                            Need help completing your booking?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center 
                          text-sm">
                            <a href="tel:+919876543210"
                                className="text-blue-600 hover:underline font-medium">
                                📞 Call Us: +91 98765 43210
                            </a>
                            <a href="mailto:info@wanderways.com"
                                className="text-blue-600 hover:underline font-medium">
                                📧 Email Support
                            </a>
                            <a href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline font-medium">
                                💬 WhatsApp Chat
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
