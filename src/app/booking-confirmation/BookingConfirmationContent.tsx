'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function BookingConfirmationContent() {
    const searchParams = useSearchParams();
    const bookingId = searchParams.get('id');

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 text-center">

                    {/* Success Icon */}
                    <div className="mx-auto w-20 h-20 bg-green-100 rounded-full 
                        flex items-center justify-center mb-6">
                        <svg className="w-10 h-10 text-green-600" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Booking Enquiry Received!
                    </h1>

                    <p className="text-lg text-gray-600 mb-8">
                        Thank you for your interest. Our travel experts will review your
                        request and contact you within 24 hours.
                    </p>

                    {bookingId && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg 
                          p-4 mb-8">
                            <div className="text-sm text-gray-600 mb-1">
                                Your Reference Number
                            </div>
                            <div className="text-xl font-bold text-blue-600">
                                BK{bookingId}
                            </div>
                        </div>
                    )}

                    <div className="space-y-4 text-left bg-gray-50 rounded-lg p-6 mb-8">
                        <h2 className="font-bold text-lg mb-4">What happens next?</h2>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white 
                            rounded-full flex items-center justify-center 
                            font-bold text-sm">
                                1
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Confirmation Email</h3>
                                <p className="text-sm text-gray-600">
                                    Check your inbox for booking details and reference number
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white 
                            rounded-full flex items-center justify-center 
                            font-bold text-sm">
                                2
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Expert Review</h3>
                                <p className="text-sm text-gray-600">
                                    Our team will check availability and customize your itinerary
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white 
                            rounded-full flex items-center justify-center 
                            font-bold text-sm">
                                3
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Personal Contact</h3>
                                <p className="text-sm text-gray-600">
                                    We'll call or email you with final details and payment options
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/tours"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg 
                       font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Browse More Tours
                        </Link>

                        <Link
                            href="/"
                            className="px-6 py-3 bg-white border-2 border-gray-300 
                       rounded-lg font-semibold hover:bg-gray-50 
                       transition-colors"
                        >
                            Back to Home
                        </Link>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-600 mb-2">
                            Need immediate assistance?
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
                                💬 WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
