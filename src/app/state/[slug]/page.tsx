import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getStateBySlug } from '@/lib/data/states';
import { getItineraryBySlug } from '@/lib/data/itineraries';
import StateDetailTabs from '@/components/states/StateDetailTabs';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const state = getStateBySlug(slug);

    if (!state) {
        return { title: 'State Not Found' };
    }

    return {
        title: `${state.name} Travel Guide | Northeast India`,
        description: state.description,
    };
}

export default async function StateLandingPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const state = getStateBySlug(slug);

    if (!state) {
        notFound();
    }

    const itinerary = getItineraryBySlug(slug) ?? null;

    return (
        <div className="min-h-screen bg-white">
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

            {/* Tabs + Content */}
            <StateDetailTabs
                slug={slug}
                stateName={state.name}
                itinerary={itinerary}
            />
        </div>
    );
}
