'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { toast } from 'sonner';

export default function WishlistButton({ tourSlug }: { tourSlug: string }) {
    const { data: session } = useSession();
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (session) {
            checkWishlist();
        }
    }, [session]);

    async function checkWishlist() {
        try {
            const res = await fetch('/api/user/wishlist');
            if (res.ok) {
                const wishlist = await res.json();
                setIsInWishlist(wishlist.includes(tourSlug));
            }
        } catch (error) {
            console.error('Failed to check wishlist');
        }
    }

    async function toggleWishlist() {
        if (!session) {
            toast.error('Please sign in to add to wishlist');
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/user/wishlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tourSlug }),
            });

            if (res.ok) {
                const wishlist = await res.json();
                const isAdded = wishlist.includes(tourSlug);
                setIsInWishlist(isAdded);
                toast.success(isAdded ? 'Added to wishlist' : 'Removed from wishlist');
            }
        } catch (error) {
            toast.error('Failed to update wishlist');
        } finally {
            setLoading(false);
        }
    }

    return (
        <button
            onClick={toggleWishlist}
            disabled={loading}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
            {isInWishlist ? (
                <HeartIconSolid className="h-6 w-6 text-red-500" />
            ) : (
                <HeartIcon className="h-6 w-6 text-gray-400" />
            )}
        </button>
    );
}
