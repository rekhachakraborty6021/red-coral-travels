import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getStateBySlug, getStates } from '@/lib/data/states';
import StateDetailTabs from '@/components/states/StateDetailTabs';
import { generateStateJsonLd } from '@/lib/seo/jsonld';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://www.redcoraltravels.com';

export async function generateStaticParams() {
    return getStates().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const state = getStateBySlug(slug);

    if (!state) return { title: 'State Not Found' };

    const title = `${state.name} Travel Guide — Tours & Packages | Northeast India`;
    const url = `${BASE_URL}/state/${slug}`;

    return {
        title,
        description: `Plan your trip to ${state.name}. ${state.description} Best time: ${state.bestTime.join(', ')}. Explore top attractions, tour packages, and travel tips.`,
        keywords: [
            `${state.name} travel`, `${state.name} tours`, `${state.name} tour packages`,
            `travel to ${state.name}`, `${state.name} holiday`, `${state.name} tourism`,
            `${state.name} destinations`, 'Northeast India travel', 'Northeast India tours',
            ...state.highlights,
        ],
        alternates: { canonical: url },
        openGraph: {
            type: 'website',
            url,
            title,
            description: state.description,
            images: [{ url: `${BASE_URL}${state.image}`, width: 1200, height: 630, alt: `${state.name} — Northeast India` }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description: state.description,
            images: [`${BASE_URL}${state.image}`],
        },
    };
}

export default async function StateLandingPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const state = getStateBySlug(slug);

    if (!state) {
        notFound();
    }

    const jsonLd = generateStateJsonLd({
        name: state.name,
        description: state.description,
        slug,
        image: state.image,
        highlights: state.highlights,
    });

    return (
        <div className="min-h-screen bg-white">
            {jsonLd.map((schema, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            ))}
            {/* Hero Section */}
            <div className="relative h-72 sm:h-96">
                <Image
                    src={state.image}
                    alt={state.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
                                Destination Guide
                            </span>
                            {state.permitRequired && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-400/40 text-xs font-medium text-yellow-200">
                                    ⚠️ ILP Required
                                </span>
                            )}
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-2">
                            {state.name}
                        </h1>
                        <p className="text-white/80 text-base sm:text-lg max-w-2xl">
                            {state.tagline}
                        </p>
                    </div>
                </div>
            </div>

            <StateDetailTabs
                slug={slug}
                stateName={state.name}
                itinerary={null}
            />
        </div>
    );
}
