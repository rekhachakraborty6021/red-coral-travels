'use client';

import { useState, use } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Image from 'next/image';
import { getTourBySlug } from '@/lib/data/tours';
import { bookingEnquirySchema, BookingEnquiryData } from '@/lib/validations/contact';
import FormField from '@/components/forms/FormField';
import Input from '@/components/forms/Input';
import Textarea from '@/components/forms/Textarea';

export default function BookingPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const router = useRouter();
    const { slug } = use(params);
    const tour = getTourBySlug(slug);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<BookingEnquiryData>({
        resolver: zodResolver(bookingEnquirySchema),
        defaultValues: {
            tourId: tour?.id || '',
            numberOfPeople: 2,
        },
    });

    const numberOfPeople = watch('numberOfPeople');
    const estimatedTotal = tour ? tour.price * (numberOfPeople || 1) : 0;

    if (!tour) {
        return <div>Tour not found</div>;
    }

    const onSubmit = async (data: BookingEnquiryData) => {
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Failed to submit');

            toast.success('Booking enquiry sent! We\'ll contact you within 24 hours.');

            // Redirect to confirmation page
            setTimeout(() => {
                router.push(`/booking-confirmation?id=${Date.now()}`);
            }, 1500);
        } catch (error) {
            toast.error('Failed to submit booking. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900
                     mb-4"
                    >
                        <span>←</span> Back to tour
                    </button>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Complete Your Booking
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Booking Form */}
                    <div className="lg:col-span-2">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="bg-white rounded-xl p-6 sm:p-8 shadow-sm space-y-6"
                        >
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Your Details</h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <FormField
                                        label="Full Name"
                                        error={errors.name?.message}
                                        required
                                        htmlFor="name"
                                    >
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="John Doe"
                                            error={!!errors.name}
                                            {...register('name')}
                                        />
                                    </FormField>

                                    <FormField
                                        label="Email Address"
                                        error={errors.email?.message}
                                        required
                                        htmlFor="email"
                                    >
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            error={!!errors.email}
                                            {...register('email')}
                                        />
                                    </FormField>
                                </div>

                                <div className="mt-6">
                                    <FormField
                                        label="Phone Number"
                                        error={errors.phone?.message}
                                        required
                                        htmlFor="phone"
                                    >
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="9876543210"
                                            error={!!errors.phone}
                                            {...register('phone')}
                                        />
                                    </FormField>
                                </div>
                            </div>

                            <div className="border-t pt-6">
                                <h2 className="text-2xl font-bold mb-6">Trip Details</h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <FormField
                                        label="Number of People"
                                        error={errors.numberOfPeople?.message}
                                        required
                                        htmlFor="numberOfPeople"
                                    >
                                        <Input
                                            id="numberOfPeople"
                                            type="number"
                                            min="1"
                                            max="50"
                                            error={!!errors.numberOfPeople}
                                            {...register('numberOfPeople', { valueAsNumber: true })}
                                        />
                                    </FormField>

                                    <FormField
                                        label="Preferred Start Date"
                                        error={errors.preferredDate?.message}
                                        required
                                        htmlFor="preferredDate"
                                    >
                                        <Input
                                            id="preferredDate"
                                            type="date"
                                            min={new Date().toISOString().split('T')[0]}
                                            error={!!errors.preferredDate}
                                            {...register('preferredDate')}
                                        />
                                    </FormField>
                                </div>

                                <div className="mt-6">
                                    <FormField
                                        label="Special Requests (Optional)"
                                        error={errors.specialRequests?.message}
                                        htmlFor="specialRequests"
                                    >
                                        <Textarea
                                            id="specialRequests"
                                            placeholder="Dietary requirements, accessibility needs, room preferences, etc."
                                            error={!!errors.specialRequests}
                                            {...register('specialRequests')}
                                        />
                                    </FormField>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-[#1B5E6B] text-white font-bold
                         rounded-lg text-lg hover:bg-[#164d58]
                         disabled:bg-gray-400 disabled:cursor-not-allowed
                         active:scale-[0.98] transition-all duration-200"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Booking Enquiry'}
                            </button>

                            <div className="relative flex items-center gap-3">
                                <div className="flex-1 border-t border-gray-200" />
                                <span className="text-sm text-gray-400">or</span>
                                <div className="flex-1 border-t border-gray-200" />
                            </div>

                            {/* WhatsApp booking */}
                            <a
                                href={`https://wa.me/919101556092?text=${encodeURIComponent(
                                    `Hi! I'd like to book the *${tour.title}* tour.\n\nName: ${watch('name') || '—'}\nPhone: ${watch('phone') || '—'}\nPeople: ${numberOfPeople || 1}\nDate: ${watch('preferredDate') || '—'}\n\nPlease share availability and payment details.`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold
                                    rounded-lg text-lg active:scale-[0.98] transition-all duration-200
                                    flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                Book via WhatsApp
                            </a>

                            <p className="text-sm text-gray-600 text-center">
                                Our team will contact you within 24 hours to confirm availability.
                            </p>
                        </form>
                    </div>

                    {/* Booking Summary Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-20 space-y-6">

                            {/* Tour Summary Card */}
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                                <div className="relative h-48">
                                    <Image
                                        src={tour.images.main}
                                        alt={tour.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        {tour.destination}
                                    </p>

                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Duration</span>
                                            <span className="font-medium">
                                                {tour.duration.days}D/{tour.duration.nights}N
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Group Size</span>
                                            <span className="font-medium">
                                                Max {tour.maxGroupSize} people
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Indicators */}
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center gap-3">
                                        <span className="text-green-600 text-xl">✓</span>
                                        <span>No payment required now</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-green-600 text-xl">✓</span>
                                        <span>Free cancellation policy</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-green-600 text-xl">✓</span>
                                        <span>24/7 customer support</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-green-600 text-xl">✓</span>
                                        <span>Instant confirmation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
