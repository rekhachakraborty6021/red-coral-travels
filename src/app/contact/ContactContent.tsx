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

const WHATSAPP_NUMBER = '919101556092';

function WhatsAppButton({ tour }: { tour: ReturnType<typeof getTourBySlug> }) {
    const text = tour
        ? `Hi! I'd like to book a trip for ${tour.title}. Please share details and availability.`
        : `Hi! I'd like to plan a trip to Northeast India. Can you help me?`;
    return (
        <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-green-600 text-white font-bold
                 rounded-lg text-lg hover:bg-green-700
                 active:scale-[0.98] transition-all duration-200
                 flex items-center justify-center gap-2"
        >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Send on WhatsApp
        </a>
    );
}

export default function ContactContent() {
    const searchParams = useSearchParams();
    const tourSlug = searchParams.get('tour');
    const tour = tourSlug ? getTourBySlug(tourSlug) : undefined;

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
                                        <a href="mailto:info@redcoraltravels.com"
                                            className="text-blue-600 hover:underline">
                                            info@redcoraltravels.com
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
                                        <a href="tel:+919101556092"
                                            className="text-blue-600 hover:underline">
                                            +91 91015 56092
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
                                        <a href="https://wa.me/919101556092"
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
                                    placeholder="Kishore Kumar"
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

                            <div className="relative flex items-center gap-3">
                                <div className="flex-1 border-t border-gray-200" />
                                <span className="text-sm text-gray-400">or</span>
                                <div className="flex-1 border-t border-gray-200" />
                            </div>

                            <WhatsAppButton tour={tour} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
