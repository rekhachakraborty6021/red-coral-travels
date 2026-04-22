'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { tours } from '@/lib/data/tours';

export default function WishlistPage() {
    const { data: session } = useSession();
    const [wishlist, setWishlist] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (session) {
            fetchWishlist();
        }
    }, [session]);

    async function fetchWishlist() {
        try {
            const res = await fetch('/api/user/wishlist');
            if (res.ok) {
                const data = await res.json();
                setWishlist(data);
            }
        } catch (error) {
            console.error('Failed to load wishlist');
        } finally {
            setLoading(false);
        }
    }

    const wishlistTours = tours.filter(tour => wishlist.includes(tour.slug));

    if (loading) return <div className="p-8 text-center">Loading your wishlist...</div>;

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">My Wishlist</h1>

                {wishlistTours.length === 0 ? (
                    <div className="mt-12 text-center py-12 bg-gray-50 rounded-lg">
                        <p className="text-gray-500">Your wishlist is empty.</p>
                        <Link href="/tours" className="mt-4 inline-block text-blue-600 hover:text-blue-500">
                            Explore Tours &rarr;
                        </Link>
                    </div>
                ) : (
                    <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {wishlistTours.map((tour) => (
                            <div key={tour.id} className="group relative">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <Image
                                        src={tour.images.main}
                                        alt={tour.title}
                                        fill
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <Link href={`/tours/${tour.slug}`}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {tour.title}
                                            </Link>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{tour.duration.days} Days</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">₹{tour.price.toLocaleString('en-IN')}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
