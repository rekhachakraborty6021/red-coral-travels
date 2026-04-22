import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const usersPath = path.join(process.cwd(), 'data', 'users.json');

export async function POST(request: Request) {
    try {
        const { name, email, password } = await request.json();

        if (!name || !email || !password) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        let users = [];
        try {
            const data = await fs.readFile(usersPath, 'utf-8');
            users = JSON.parse(data);
        } catch {
            // File might not exist
        }

        // Check if user already exists
        if (users.find((u: any) => u.email === email)) {
            return NextResponse.json(
                { error: 'User already exists' },
                { status: 400 }
            );
        }

        const newUser = {
            id: Date.now().toString(),
            name,
            email,
            password, // In production, hash this!
            role: 'customer',
            createdAt: new Date().toISOString(),
            wishlist: [],
        };

        users.push(newUser);

        // Ensure directory exists
        await fs.mkdir(path.dirname(usersPath), { recursive: true });
        await fs.writeFile(usersPath, JSON.stringify(users, null, 2));

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Signup error:', error);
        return NextResponse.json(
            { error: 'Failed to create account' },
            { status: 500 }
        );
    }
}
