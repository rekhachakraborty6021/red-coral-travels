'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Confetti from 'react-confetti';

export default function PaymentSuccessContent() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const [showConfetti, setShowConfetti] = useState(true);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        // Set window size for confetti
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        // Stop confetti after 5 seconds
        const timer = setTimeout(() => setShowConfetti(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
            {showConfetti && (
                <Confetti
                    width={windowSize.width}
                    height={windowSize.height}
                    recycle={false}
                    numberOfPieces={500}
                />
            )}

            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 text-center">

                    {/* Success Icon with Animation */}
                    <div className="mx-auto w-24 h-24 bg-green-100 rounded-full 
                        flex items-center justify-center mb-6
                        animate-bounce">
                        <svg className="w-12 h-12 text-green-600" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Payment Successful! 🎉
                    </h1>

                    <p className="text-xl text-gray-600 mb-8">
                        Your booking has been confirmed. Get ready for an amazing adventure!
                    </p>

                    {sessionId && (
                        <div className="bg-green-50 border-2 border-green-200 rounded-lg 
                          p-6 mb-8">
                            <div className="text-sm text-gray-600 mb-2">
                                Transaction ID
                            </div>
                            <div className="text-lg font-mono text-green-700 break-all">
                                {sessionId}
                            </div>
                        </div>
                    )}

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 
                        rounded-xl p-6 mb-8 text-left">
                        <h2 className="font-bold text-lg mb-4 text-center">
                            What's Next?
                        </h2>

                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white 
                              rounded-full flex items-center justify-center 
                              font-bold">
                                    ✓
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Confirmation Email Sent</h3>
                                    <p className="text-sm text-gray-600">
                                        Check your inbox for booking details, itinerary, and e-tickets
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white 
                              rounded-full flex items-center justify-center 
                              font-bold">
                                    📱
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Download Your Documents</h3>
                                    <p className="text-sm text-gray-600">
                                        Access your booking voucher and travel documents from your email
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white 
                              rounded-full flex items-center justify-center 
                              font-bold">
                                    🎒
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Prepare for Your Trip</h3>
                                    <p className="text-sm text-gray-600">
                                        We'll contact you 48 hours before departure with final details
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <Link
                            href="/tours"
                            className="px-8 py-4 bg-blue-600 text-white rounded-lg 
                       font-bold text-lg hover:bg-blue-700 
                       transition-colors shadow-lg"
                        >
                            Explore More Tours
                        </Link>

                        <Link
                            href="/"
                            className="px-8 py-4 bg-white border-2 border-gray-300 
                       rounded-lg font-bold text-lg hover:bg-gray-50 
                       transition-colors"
                        >
                            Back to Home
                        </Link>
                    </div>

                    <div className="pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-600 mb-4">
                            Need help or have questions?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center 
                          text-sm">
                            <a href="tel:+919876543210"
                                className="text-blue-600 hover:underline font-medium">
                                📞 +91 98765 43210
                            </a>
                            <a href="mailto:info@wanderways.com"
                                className="text-blue-600 hover:underline font-medium">
                                📧 info@wanderways.com
                            </a>
                            <a href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline font-medium">
                                💬 WhatsApp Support
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
