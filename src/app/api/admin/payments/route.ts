import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import fs from 'fs/promises';
import path from 'path';

const paymentsPath = path.join(process.cwd(), 'data', 'payments.json');

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session || (session.user as any).role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        let payments = [];
        try {
            const data = await fs.readFile(paymentsPath, 'utf-8');
            payments = JSON.parse(data);
        } catch {
            // File might not exist
        }

        return NextResponse.json(payments.reverse());
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch payments' }, { status: 500 });
    }
}
