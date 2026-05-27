import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactFormSchema } from '@/lib/validations/contact';
import { getTourBySlug } from '@/lib/data/tours';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const data = contactFormSchema.parse(body);

        const tour = data.tourId ? getTourBySlug(data.tourId) : undefined;

        await sendEmail(data, tour);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to send message' },
            { status: 400 }
        );
    }
}

async function sendEmail(data: any, tour: any) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const subject = tour
        ? `New Enquiry: ${tour.title} — from ${data.name}`
        : `New Contact Enquiry — from ${data.name}`;

    const html = `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
            <h2 style="color:#C8553D">New Enquiry — Red Coral Travels</h2>
            <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:8px;font-weight:bold;width:140px">Name</td><td style="padding:8px">${data.name}</td></tr>
                <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${data.email}">${data.email}</a></td></tr>
                <tr><td style="padding:8px;font-weight:bold">Phone</td><td style="padding:8px">${data.phone || '—'}</td></tr>
                ${tour ? `<tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold">Tour</td><td style="padding:8px">${tour.title}</td></tr>` : ''}
                <tr ${tour ? '' : 'style="background:#f9f9f9"'}><td style="padding:8px;font-weight:bold;vertical-align:top">Message</td><td style="padding:8px">${data.message.replace(/\n/g, '<br/>')}</td></tr>
            </table>
            <p style="color:#888;font-size:12px;margin-top:24px">Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
        </div>
    `;

    await transporter.sendMail({
        from: `"Red Coral Travels" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL,
        replyTo: data.email,
        subject,
        html,
    });
}
