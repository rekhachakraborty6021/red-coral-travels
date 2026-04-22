'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import FormField from '@/components/forms/FormField';
import Input from '@/components/forms/Input';
import Textarea from '@/components/forms/Textarea';
import { contactFormSchema, ContactFormData } from '@/lib/validations/contact';
import { getTourBySlug } from '@/lib/data/tours';

export default function ContactContent() {
    const searchParams = useSearchParams();
    const tourSlug = searchParams.get('tour');
    const tour = tourSlug ? getTourBySlug(tourSlug) : null;

    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            tourId: tour?.id || '',
        },
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Failed to submit');

            toast.success('Message sent successfully! We\'ll get back to you soon.');
            reset();
        } catch (error) {
            toast.error('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-lg text-gray-600">
                        {tour
                            ? `Interested in ${tour.title}? Send us your details.`
                            : 'Have questions? We\'re here to help!'
                        }
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h2 className="text-xl font-bold mb-4">Contact Info</h2>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 
                                rounded-full flex items-center justify-center">
                                        <span className="text-blue-600">📧</span>
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-900">Email</div>
                                        <a href="mailto:info@wanderways.com"
                                            className="text-blue-600 hover:underline">
                                            info@wanderways.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 
                                rounded-full flex items-center justify-center">
                                        <span className="text-blue-600">📱</span>
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-900">Phone</div>
                                        <a href="tel:+919876543210"
                                            className="text-blue-600 hover:underline">
                                            +91 98765 43210
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 
                                rounded-full flex items-center justify-center">
                                        <span className="text-blue-600">💬</span>
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-900">WhatsApp</div>
                                        <a href="https://wa.me/919876543210"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline">
                                            Chat with us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h3 className="font-bold mb-3">Business Hours</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Mon - Fri</span>
                                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Saturday</span>
                                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Sunday</span>
                                    <span className="font-medium">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="bg-white rounded-xl p-6 sm:p-8 shadow-sm space-y-6"
                        >
                            <FormField
                                label="Your Name"
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

                            <FormField
                                label="Phone Number"
                                error={errors.phone?.message}
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

                            {tour && (
                                <div className="bg-blue-50 border border-blue-200 
                              rounded-lg p-4">
                                    <div className="text-sm text-gray-600 mb-1">
                                        Enquiring about:
                                    </div>
                                    <div className="font-semibold text-gray-900">
                                        {tour.title}
                                    </div>
                                </div>
                            )}

                            <FormField
                                label="Your Message"
                                error={errors.message?.message}
                                required
                                htmlFor="message"
                            >
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your travel plans, questions, or special requirements..."
                                    error={!!errors.message}
                                    {...register('message')}
                                />
                            </FormField>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-blue-600 text-white font-bold 
                         rounded-lg text-lg hover:bg-blue-700 
                         disabled:bg-gray-400 disabled:cursor-not-allowed
                         active:scale-[0.98] transition-all duration-200
                         flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="animate-spin">⏳</span>
                                        Sending...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
