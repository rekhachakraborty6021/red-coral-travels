import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import fs from 'fs/promises';
import path from 'path';

const bookingsPath = path.join(process.cwd(), 'data', 'bookings.json');

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session || (session.user as any).role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        let bookings = [];
        try {
            const data = await fs.readFile(bookingsPath, 'utf-8');
            bookings = JSON.parse(data);
        } catch {
            // File might not exist
        }

        return NextResponse.json(bookings.reverse());
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
    }
}

export async function PATCH(request: Request) {
    const session = await getServerSession(authOptions);

    if (!session || (session.user as any).role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { id, status } = await request.json();

        const data = await fs.readFile(bookingsPath, 'utf-8');
        let bookings = JSON.parse(data);

        const index = bookings.findIndex((b: any) => b.id === id);
        if (index === -1) {
            return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
        }

        bookings[index].status = status;
        bookings[index].updatedAt = new Date().toISOString();

        await fs.writeFile(bookingsPath, JSON.stringify(bookings, null, 2));

        return NextResponse.json(bookings[index]);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update booking' }, { status: 500 });
    }
}
