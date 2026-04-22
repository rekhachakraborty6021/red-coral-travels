import { z } from 'zod';

export const contactFormSchema = z.object({
    name: z.string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name is too long'),
    email: z.string()
        .email('Please enter a valid email address'),
    phone: z.string()
        .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number')
        .optional()
        .or(z.literal('')),
    message: z.string()
        .min(10, 'Message must be at least 10 characters')
        .max(1000, 'Message is too long'),
    tourId: z.string().optional(),
    preferredDate: z.string().optional(),
    numberOfPeople: z.number().min(1).max(50).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const bookingEnquirySchema = contactFormSchema.extend({
    tourId: z.string().min(1, 'Please select a tour'),
    numberOfPeople: z.number()
        .min(1, 'At least 1 person required')
        .max(50, 'Maximum 50 people allowed'),
    preferredDate: z.string().min(1, 'Please select a preferred date'),
    specialRequests: z.string().max(500).optional(),
});

export type BookingEnquiryData = z.infer<typeof bookingEnquirySchema>;
