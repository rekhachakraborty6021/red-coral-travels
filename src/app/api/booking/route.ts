import { NextRequest, NextResponse } from 'next/server';
import { bookingEnquirySchema } from '@/lib/validations/contact';
import { getTourBySlug } from '@/lib/data/tours';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const validatedData = bookingEnquirySchema.parse(body);

        const tour = getTourBySlug(validatedData.tourId);

        if (!tour) {
            return NextResponse.json(
                { error: 'Tour not found' },
                { status: 404 }
            );
        }

        // Calculate total
        const basePrice = tour.price * validatedData.numberOfPeople;
        const estimatedTotal = Math.round(basePrice * 1.05); // Including 5% taxes

        const booking = {
            id: `BK${Date.now()}`,
            ...validatedData,
            tourTitle: tour.title,
            tourSlug: tour.slug,
            basePrice,
            estimatedTotal,
            status: 'pending',
            createdAt: new Date().toISOString(),
        };

        // Save booking
        await saveBooking(booking);

        // TODO: Send confirmation email to customer
        // TODO: Send notification to admin

        return NextResponse.json({
            success: true,
            bookingId: booking.id,
            message: 'Booking enquiry received successfully'
        });
    } catch (error) {
        console.error('Booking error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to process booking' },
            { status: 400 }
        );
    }
}

async function saveBooking(booking: any) {
    const fs = require('fs').promises;
    const path = require('path');

    const filePath = path.join(process.cwd(), 'data', 'bookings.json');

    try {
        let bookings = [];
        try {
            const content = await fs.readFile(filePath, 'utf-8');
            bookings = JSON.parse(content);
        } catch {
            // File doesn't exist
        }

        bookings.push(booking);

        await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, JSON.stringify(bookings, null, 2));
    } catch (error) {
        console.error('Error saving booking:', error);
        throw error;
    }
}
