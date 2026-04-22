import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const bookingsPath = path.join(process.cwd(), 'data', 'bookings.json');
        let bookings = [];
        try {
            const data = await fs.readFile(bookingsPath, 'utf-8');
            bookings = JSON.parse(data);
        } catch {
            // File might not exist
        }

        // Filter bookings for the logged-in user
        const userBookings = bookings.filter((b: any) => b.customerEmail === session.user?.email);

        return NextResponse.json(userBookings.reverse());
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
    }
}
