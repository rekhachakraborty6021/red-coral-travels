import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getTourBySlug } from '@/lib/data/tours';
import { generateTourJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo/jsonld';
import ReviewSection from '@/components/tours/ReviewSection';

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}) {
    const tour = getTourBySlug(params.slug);

    if (!tour) {
        return {
            title: 'Tour Not Found',
        };
    }

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.jajabor.com';
    const url = `${baseUrl}/tours/${tour.slug}`;

    return {
        title: `${tour.title} — Tour Package | Northeast India`,
        description: tour.shortDescription,
        keywords: [
            tour.title, 'Northeast India tour', 'tour package',
            ...(tour.highlights || []).slice(0, 4),
            'Jajabor tours',
        ],
        alternates: { canonical: url },
        openGraph: {
            type: 'website',
            url,
            title: tour.title,
            description: tour.shortDescription,
            images: [{ url: tour.images.main, width: 1200, height: 630, alt: tour.title }],
        },
        twitter: {
            card: 'summary_large_image',
            title: tour.title,
            description: tour.shortDescription,
            images: [tour.images.main],
        },
    };
}

export default function TourPage({
    params,
}: {
    params: { slug: string };
}) {
    const tour = getTourBySlug(params.slug);

    if (!tour) {
        notFound();
    }

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.jajabor.com';
    const tourJsonLd = generateTourJsonLd(tour);
    const breadcrumbJsonLd = generateBreadcrumbJsonLd([
        { name: 'Home', url: baseUrl },
        { name: 'Tours', url: `${baseUrl}/tours` },
        { name: tour.title, url: `${baseUrl}/tours/${tour.slug}` },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(tourJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <div className="min-h-screen bg-white">
                {/* Hero Image */}
                <div className="relative h-64 sm:h-96 lg:h-[500px]">
                    <Image
                        src={tour.images.main}
                        alt={tour.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Quick Info */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {[
                                    { label: 'Duration', value: `${tour.duration.days}D/${tour.duration.nights}N` },
                                    { label: 'Group Size', value: `Max ${tour.maxGroupSize}` },
                                    { label: 'Difficulty', value: tour.difficulty },
                                    { label: 'Destination', value: tour.destination },
                                ].map((item, i) => (
                                    <div key={i} className="bg-gray-50 rounded-lg p-4">
                                        <div className="text-xs text-gray-600 mb-1">{item.label}</div>
                                        <div className="font-semibold text-gray-900 capitalize">{item.value}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Description */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4">About This Tour</h2>
                                <p className="text-gray-700 leading-relaxed">{tour.longDescription}</p>
                            </div>

                            {/* Highlights */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Highlights</h2>
                                <ul className="space-y-3">
                                    {tour.highlights.map((highlight: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                                            <span className="text-gray-700">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Included/Excluded */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-green-700">What's Included</h3>
                                    <ul className="space-y-2">
                                        {tour.included.map((item: string, i: number) => (
                                            <li key={i} className="flex items-start gap-2 text-sm">
                                                <span className="text-green-600">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-red-700">What's Not Included</h3>
                                    <ul className="space-y-2">
                                        {tour.excluded.map((item: string, i: number) => (
                                            <li key={i} className="flex items-start gap-2 text-sm">
                                                <span className="text-red-600">✗</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sticky Booking Card */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-20 bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
                                <Link
                                    href={`/contact?tour=${tour.slug}`}
                                    className="block w-full py-4 bg-blue-600 text-white text-center font-bold rounded-lg text-lg hover:bg-blue-700 active:scale-[0.98] transition-all duration-200"
                                >
                                    Book Your Trip
                                </Link>

                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <div className="space-y-3 text-sm text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <span>✓</span>
                                            <span>Instant confirmation</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span>✓</span>
                                            <span>Free cancellation up to 7 days</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span>✓</span>
                                            <span>24/7 customer support</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ReviewSection tourSlug={tour.slug} />
            </div>
        </>
    );
}
