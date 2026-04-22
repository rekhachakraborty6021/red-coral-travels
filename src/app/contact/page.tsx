import { Suspense } from 'react';
import ContactContent from './ContactContent';

export default function ContactPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
            <ContactContent />
        </Suspense>
    );
}
