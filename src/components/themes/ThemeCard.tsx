import Image from 'next/image';
import Link from 'next/link';
import { Theme } from '@/types';

interface ThemeCardProps {
    theme: Theme;
}

export default function ThemeCard({ theme }: ThemeCardProps) {
    return (
        <Link
            href={`/tours?theme=${theme.slug}`}
            className="group block"
        >
            <article className="bg-white rounded-2xl shadow-md overflow-hidden 
                        hover:shadow-2xl transition-all duration-300
                        active:scale-[0.98] border-2 border-thistle/20
                        hover:border-lavender-purple/50 h-full flex flex-col">

                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={theme.image}
                        alt={theme.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Icon Badge */}
                    <div className="absolute top-3 right-3 w-12 h-12 
                        bg-white/90 backdrop-blur-sm 
                        rounded-full flex items-center justify-center 
                        text-2xl shadow-lg
                        group-hover:scale-110 group-hover:rotate-6 transition-all">
                        {theme.icon}
                    </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-grow flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-deep-navy 
                       mb-2 line-clamp-2 group-hover:text-lavender-purple 
                       transition-colors">
                        {theme.title}
                    </h3>

                    <p className="text-sm font-medium text-graphite/80 mb-2">
                        {theme.tagline}
                    </p>

                    <p className="text-sm text-graphite/70 mb-4 line-clamp-2 flex-grow">
                        {theme.description}
                    </p>

                    {/* Explore Button */}
                    <div className="mt-4">
                        <div className="flex items-center justify-between px-4 py-3 
                          bg-lavender-veil/30 rounded-xl
                          group-hover:bg-lavender-purple group-hover:text-white
                          transition-all duration-300">
                            <span className="font-semibold">Explore Tours</span>
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
