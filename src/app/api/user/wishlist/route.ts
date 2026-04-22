import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import fs from 'fs/promises';
import path from 'path';

const usersPath = path.join(process.cwd(), 'data', 'users.json');

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const data = await fs.readFile(usersPath, 'utf-8');
        const users = JSON.parse(data);
        const user = users.find((u: any) => u.email === session.user?.email);

        return NextResponse.json(user?.wishlist || []);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch wishlist' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { tourSlug } = await request.json();
        const data = await fs.readFile(usersPath, 'utf-8');
        let users = JSON.parse(data);

        const userIndex = users.findIndex((u: any) => u.email === session.user?.email);

        if (userIndex === -1) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        const user = users[userIndex];
        if (!user.wishlist) user.wishlist = [];

        if (user.wishlist.includes(tourSlug)) {
            user.wishlist = user.wishlist.filter((slug: string) => slug !== tourSlug);
        } else {
            user.wishlist.push(tourSlug);
        }

        users[userIndex] = user;
        await fs.writeFile(usersPath, JSON.stringify(users, null, 2));

        return NextResponse.json(user.wishlist);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update wishlist' }, { status: 500 });
    }
}
