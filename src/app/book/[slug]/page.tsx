'use client';

import { useState } from 'react';
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
import PayNowButton from '@/components/payment/PayNowButton';

export default function BookingPage({
    params
}: {
    params: { slug: string }
}) {
    const router = useRouter();
    const tour = getTourBySlug(params.slug);
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

                            {/* Payment Option */}
                            <div className="border-t pt-6">
                                <h3 className="text-lg font-bold mb-4">Payment Options</h3>

                                <div className="space-y-3 mb-6">
                                    <PayNowButton
                                        tourSlug={tour.slug}
                                        numberOfPeople={numberOfPeople || 1}
                                        customerEmail={watch('email') || ''}
                                        customerName={watch('name') || ''}
                                        amount={Math.round(estimatedTotal * 1.05)}
                                        disabled={!watch('name') || !watch('email') || !watch('phone') || !watch('preferredDate')}
                                    />

                                    <div className="text-center text-sm text-gray-500">
                                        or
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-blue-600 text-white font-bold 
                         rounded-lg text-lg hover:bg-blue-700 
                         disabled:bg-gray-400 disabled:cursor-not-allowed
                         active:scale-[0.98] transition-all duration-200"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Booking Enquiry'}
                            </button>

                            <p className="text-sm text-gray-600 text-center">
                                This is a booking enquiry. Our team will contact you within 24 hours
                                to confirm availability and process payment.
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

                            {/* Price Breakdown */}
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-bold mb-4">Price Details</h3>

                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">
                                            ₹{tour.price.toLocaleString('en-IN')} × {numberOfPeople || 1} person(s)
                                        </span>
                                        <span className="font-medium">
                                            ₹{estimatedTotal.toLocaleString('en-IN')}
                                        </span>
                                    </div>

                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Taxes & Fees (est.)</span>
                                        <span className="font-medium">
                                            ₹{Math.round(estimatedTotal * 0.05).toLocaleString('en-IN')}
                                        </span>
                                    </div>

                                    <div className="border-t pt-3 flex justify-between">
                                        <span className="font-bold">Estimated Total</span>
                                        <span className="text-xl font-bold text-blue-600">
                                            ₹{Math.round(estimatedTotal * 1.05).toLocaleString('en-IN')}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-gray-700">
                                    💡 Final price will be confirmed after reviewing your requirements
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
