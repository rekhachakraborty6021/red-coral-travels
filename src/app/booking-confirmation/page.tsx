import { Suspense } from 'react';
import BookingConfirmationContent from './BookingConfirmationContent';

export default function BookingConfirmation() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
            <BookingConfirmationContent />
        </Suspense>
    );
}
