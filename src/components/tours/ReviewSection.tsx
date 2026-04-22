'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { StarIcon } from '@heroicons/react/20/solid';
import { toast } from 'sonner';
import Link from 'next/link';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function ReviewSection({ tourSlug }: { tourSlug: string }) {
    const { data: session } = useSession();
    const [reviews, setReviews] = useState<any[]>([]);
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        fetchReviews();
    }, [tourSlug]);

    async function fetchReviews() {
        try {
            const res = await fetch(`/api/reviews?tourSlug=${tourSlug}`);
            if (res.ok) {
                const data = await res.json();
                setReviews(data);
            }
        } catch (error) {
            console.error('Failed to load reviews');
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!session) return;

        setIsSubmitting(true);
        try {
            const res = await fetch('/api/reviews', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tourSlug, rating, comment }),
            });

            if (res.ok) {
                toast.success('Review submitted successfully!');
                setComment('');
                setRating(5);
                fetchReviews();
            } else {
                toast.error('Failed to submit review');
            }
        } catch (error) {
            toast.error('An error occurred');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customer Reviews</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
                    {/* Review List */}
                    <div className="space-y-10">
                        {reviews.length === 0 ? (
                            <p className="text-gray-500">No reviews yet. Be the first to review!</p>
                        ) : (
                            reviews.map((review) => (
                                <div key={review.id} className="flex space-x-4 text-sm text-gray-500">
                                    <div className="flex-none py-10">
                                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                                            <span className="font-medium text-gray-500">
                                                {review.userName?.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                    </div>
                                    <div className={classNames(
                                        'flex-1 py-10',
                                        'border-t border-gray-200'
                                    )}>
                                        <h3 className="font-medium text-gray-900">{review.userName}</h3>
                                        <p>
                                            <time dateTime={review.createdAt}>
                                                {new Date(review.createdAt).toLocaleDateString()}
                                            </time>
                                        </p>

                                        <div className="mt-4 flex items-center">
                                            {[0, 1, 2, 3, 4].map((ratingIdx) => (
                                                <StarIcon
                                                    key={ratingIdx}
                                                    className={classNames(
                                                        review.rating > ratingIdx ? 'text-yellow-400' : 'text-gray-300',
                                                        'h-5 w-5 flex-shrink-0'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            ))}
                                        </div>

                                        <div className="prose prose-sm mt-4 max-w-none text-gray-500">
                                            <p>{review.comment}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Review Form */}
                    <div className="mt-10 lg:mt-0">
                        <h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
                        <p className="mt-1 text-sm text-gray-600">
                            If you’ve been on this tour, share your thoughts with other customers.
                        </p>

                        {session ? (
                            <form onSubmit={handleSubmit} className="mt-6">
                                <div>
                                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                                        Rating
                                    </label>
                                    <div className="mt-1 flex items-center gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => setRating(star)}
                                                className="focus:outline-none"
                                            >
                                                <StarIcon
                                                    className={classNames(
                                                        rating >= star ? 'text-yellow-400' : 'text-gray-300',
                                                        'h-8 w-8 flex-shrink-0'
                                                    )}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                                        Review
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="comment"
                                            name="comment"
                                            rows={4}
                                            required
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-2 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Review'}
                                </button>
                            </form>
                        ) : (
                            <div className="mt-6 bg-gray-50 rounded-lg p-6 text-center">
                                <p className="text-gray-600">Please sign in to leave a review.</p>
                                <Link
                                    href={`/auth/login?callbackUrl=/tours/${tourSlug}`}
                                    className="mt-4 inline-block text-blue-600 hover:text-blue-500 font-medium"
                                >
                                    Sign in &rarr;
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
