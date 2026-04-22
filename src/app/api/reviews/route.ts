import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import fs from 'fs/promises';
import path from 'path';

const reviewsPath = path.join(process.cwd(), 'data', 'reviews.json');

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const tourSlug = searchParams.get('tourSlug');

    try {
        let reviews = [];
        try {
            const data = await fs.readFile(reviewsPath, 'utf-8');
            reviews = JSON.parse(data);
        } catch {
            // File might not exist
        }

        if (tourSlug) {
            reviews = reviews.filter((r: any) => r.tourSlug === tourSlug);
        }

        return NextResponse.json(reviews.reverse());
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { tourSlug, rating, comment } = await request.json();

        if (!tourSlug || !rating || !comment) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        let reviews = [];
        try {
            const data = await fs.readFile(reviewsPath, 'utf-8');
            reviews = JSON.parse(data);
        } catch {
            // File might not exist
        }

        const newReview = {
            id: Date.now().toString(),
            tourSlug,
            userId: (session.user as any).id,
            userName: session.user?.name,
            rating,
            comment,
            createdAt: new Date().toISOString(),
        };

        reviews.push(newReview);

        await fs.mkdir(path.dirname(reviewsPath), { recursive: true });
        await fs.writeFile(reviewsPath, JSON.stringify(reviews, null, 2));

        return NextResponse.json(newReview);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to submit review' }, { status: 500 });
    }
}
