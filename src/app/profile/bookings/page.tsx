'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function MyBookingsPage() {
    const { data: session } = useSession();
    const [bookings, setBookings] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (session) {
            fetchBookings();
        }
    }, [session]);

    async function fetchBookings() {
        try {
            const res = await fetch('/api/user/bookings');
            if (res.ok) {
                const data = await res.json();
                setBookings(data);
            }
        } catch (error) {
            console.error('Failed to load bookings');
        } finally {
            setLoading(false);
        }
    }

    if (loading) return <div className="p-8 text-center">Loading your bookings...</div>;

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:pb-24">
                <div className="max-w-xl">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        My Bookings
                    </h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Check the status of recent bookings, view details, and download invoices.
                    </p>
                </div>

                <div className="mt-16">
                    <h2 className="sr-only">Recent bookings</h2>

                    <div className="space-y-20">
                        {bookings.length === 0 ? (
                            <div className="text-center py-12 bg-gray-50 rounded-lg">
                                <p className="text-gray-500">You haven't made any bookings yet.</p>
                                <Link href="/tours" className="mt-4 inline-block text-blue-600 hover:text-blue-500">
                                    Browse Tours &rarr;
                                </Link>
                            </div>
                        ) : (
                            bookings.map((booking) => (
                                <div key={booking.id} className="grid grid-cols-1 gap-x-6 gap-y-8 border-b border-gray-200 pb-12 md:grid-cols-4">
                                    <div className="col-span-1 md:col-span-2">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            <Link href={`/tours/${booking.tourSlug}`} className="hover:underline">
                                                {booking.tourTitle}
                                            </Link>
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-500">
                                            Booking ID: <span className="font-mono text-gray-900">{booking.id.slice(0, 8)}</span>
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Booked on {new Date(booking.createdAt).toLocaleDateString()}
                                        </p>
                                    </div>

                                    <div className="col-span-1">
                                        <p className="text-sm font-medium text-gray-900">Date</p>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {new Date(booking.date).toLocaleDateString()}
                                        </p>
                                        <p className="mt-4 text-sm font-medium text-gray-900">Total Amount</p>
                                        <p className="mt-1 text-sm text-gray-500">
                                            ₹{booking.totalPrice.toLocaleString('en-IN')}
                                        </p>
                                    </div>

                                    <div className="col-span-1">
                                        <p className="text-sm font-medium text-gray-900">Status</p>
                                        <div className="mt-1">
                                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize
                        ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                                    booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-red-100 text-red-800'}`}>
                                                {booking.status}
                                            </span>
                                        </div>
                                        {booking.status === 'confirmed' && (
                                            <div className="mt-6">
                                                <Link
                                                    href={`/booking-confirmation?id=${booking.id}`}
                                                    className="text-sm font-medium text-blue-600 hover:text-blue-500"
                                                >
                                                    View Invoice
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
