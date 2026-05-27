import Image from 'next/image';
import Link from 'next/link';
import { Tour } from '@/types';

interface TourCardProps {
    tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
    const difficultyColors = {
        easy: 'bg-green-100 text-green-700 border-green-300',
        moderate: 'bg-yellow-100 text-yellow-700 border-yellow-300',
        challenging: 'bg-orange-100 text-orange-700 border-orange-300',
        expert: 'bg-red-100 text-red-700 border-red-300',
    };

    return (
        <Link
            href={tour.detailsUrl ?? `/tours/${tour.slug}`}
            className="block group"
        >
            <article className="bg-white rounded-2xl shadow-md overflow-hidden 
                         hover:shadow-2xl transition-all duration-300
                         active:scale-[0.98] border-2 border-thistle/20
                         hover:border-lavender-purple/50 h-full flex flex-col">

                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={tour.images.main}
                        alt={tour.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* State Badge */}
                    <div className="absolute top-3 left-3">
                        <span className="px-3 py-1.5 text-xs font-bold uppercase
                           bg-lavender-veil/95 backdrop-blur-sm rounded-full
                           text-lavender-purple border border-lavender-purple/30
                           shadow-lg">
                            {tour.state.replace('-', ' ')}
                        </span>
                    </div>

                    {/* Difficulty Badge */}
                    <div className="absolute top-3 right-3">
                        <span className={`px-3 py-1.5 text-xs font-bold uppercase
                           rounded-full border backdrop-blur-sm shadow-lg
                           ${difficultyColors[tour.difficulty]}`}>
                            {tour.difficulty}
                        </span>
                    </div>

                    {/* Special Attributes */}
                    {tour.attributes.permitRequired && (
                        <div className="absolute bottom-3 left-3">
                            <span className="px-3 py-1.5 text-xs font-bold
                             bg-yellow-500/95 backdrop-blur-sm text-yellow-900
                             rounded-full border border-yellow-600/30 shadow-lg">
                                ⚠️ Permit Required
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-grow flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-deep-navy 
                       mb-2 line-clamp-2 group-hover:text-lavender-purple 
                       transition-colors">
                        {tour.title}
                    </h3>

                    <p className="text-sm text-graphite/80 mb-4 line-clamp-2 flex-grow">
                        {tour.shortDescription}
                    </p>

                    {/* Theme Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tour.themes.slice(0, 3).map((theme, i) => (
                            <span
                                key={i}
                                className="px-2.5 py-1 text-xs font-semibold
                         bg-lavender-veil text-lavender-purple rounded-full
                         border border-lavender-purple/20"
                            >
                                #{theme}
                            </span>
                        ))}
                    </div>

                    {/* Info Pills */}
                    <div className="flex flex-wrap gap-3 text-xs sm:text-sm pt-4 
                        border-t border-thistle/30">
                        <div className="flex items-center gap-1.5 text-graphite/70">
                            <svg className="w-4 h-4 text-lavender-purple" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-medium">
                                {tour.duration.days}D/{tour.duration.nights}N
                            </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-graphite/70">
                            <svg className="w-4 h-4 text-lavender-purple" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="font-medium">
                                Max {tour.maxGroupSize}
                            </span>
                        </div>
                    </div>

                    {/* View Details Button */}
                    <div className="mt-4">
                        <div className="flex items-center justify-between px-4 py-3 
                          bg-lavender-veil/30 rounded-xl
                          group-hover:bg-lavender-purple group-hover:text-white
                          transition-all duration-300">
                            <span className="font-semibold">View Details</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
}
