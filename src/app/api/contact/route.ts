import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations/contact';
import { getTourBySlug } from '@/lib/data/tours';

// For MVP: Store in JSON file or send email
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate input
        const validatedData = contactFormSchema.parse(body);

        // Get tour details if tourId provided
        const tour = validatedData.tourId
            ? getTourBySlug(validatedData.tourId)
            : null;

        // For MVP: Log to console or file
        console.log('New contact form submission:', {
            ...validatedData,
            tour: tour?.title,
            timestamp: new Date().toISOString(),
        });

        // In production: Send email via Resend/SendGrid
        // await sendEmail({
        //   to: 'info@wanderways.com',
        //   subject: `New Contact Form: ${validatedData.name}`,
        //   body: formatEmailBody(validatedData, tour),
        // });

        // For MVP: Save to JSON file
        await saveToFile(validatedData, tour);

        return NextResponse.json({
            success: true,
            message: 'Form submitted successfully'
        });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to process request' },
            { status: 400 }
        );
    }
}

// Helper function to save submissions
async function saveToFile(data: any, tour: any) {
    const fs = require('fs').promises;
    const path = require('path');

    const submission = {
        id: Date.now().toString(),
        ...data,
        tourTitle: tour?.title,
        submittedAt: new Date().toISOString(),
    };

    const filePath = path.join(process.cwd(), 'data', 'submissions.json');

    try {
        // Read existing submissions
        let submissions = [];
        try {
            const content = await fs.readFile(filePath, 'utf-8');
            submissions = JSON.parse(content);
        } catch {
            // File doesn't exist yet
        }

        // Add new submission
        submissions.push(submission);

        // Write back to file
        await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, JSON.stringify(submissions, null, 2));
    } catch (error) {
        console.error('Error saving submission:', error);
    }
}
