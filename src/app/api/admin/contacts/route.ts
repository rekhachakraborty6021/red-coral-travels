import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import fs from 'fs/promises';
import path from 'path';

const contactsPath = path.join(process.cwd(), 'data', 'contacts.json');

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session || (session.user as any).role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        let contacts = [];
        try {
            const data = await fs.readFile(contactsPath, 'utf-8');
            contacts = JSON.parse(data);
        } catch {
            // File might not exist
        }

        return NextResponse.json(contacts.reverse());
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 });
    }
}
