import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session || (session.user as any).role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        // Read bookings
        const bookingsPath = path.join(process.cwd(), 'data', 'bookings.json');
        let bookings = [];
        try {
            const bookingsData = await fs.readFile(bookingsPath, 'utf-8');
            bookings = JSON.parse(bookingsData);
        } catch {
            // File might not exist yet
        }

        // Read payments
        const paymentsPath = path.join(process.cwd(), 'data', 'payments.json');
        let payments = [];
        try {
            const paymentsData = await fs.readFile(paymentsPath, 'utf-8');
            payments = JSON.parse(paymentsData);
        } catch {
            // File might not exist yet
        }

        // Read contacts
        const contactsPath = path.join(process.cwd(), 'data', 'contacts.json');
        let contacts = [];
        try {
            const contactsData = await fs.readFile(contactsPath, 'utf-8');
            contacts = JSON.parse(contactsData);
        } catch {
            // File might not exist yet
        }

        const totalRevenue = payments.reduce((sum: number, p: any) => sum + p.amount, 0);
        const pendingBookings = bookings.filter((b: any) => b.status === 'pending').length;
        const confirmedBookings = bookings.filter((b: any) => b.status === 'confirmed').length;

        return NextResponse.json({
            totalBookings: bookings.length,
            pendingBookings,
            confirmedBookings,
            totalRevenue,
            totalEnquiries: contacts.length,
            recentBookings: bookings.slice(-5).reverse(),
        });
    } catch (error) {
        console.error('Error fetching stats:', error);
        return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
    }
}
