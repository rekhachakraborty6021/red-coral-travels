import Image from 'next/image';
import Link from 'next/link';
import { State } from '@/lib/data/states';

interface StateCardProps {
    state: State;
}

export default function StateCard({ state }: StateCardProps) {
    return (
        <Link
            href={`/state/${state.slug}`}
            className="group block"
        >
            <article className="bg-white rounded-2xl shadow-md overflow-hidden 
                        hover:shadow-2xl transition-all duration-300
                        active:scale-[0.98] border-2 border-thistle/20
                        hover:border-lavender-purple/50 h-full flex flex-col">

                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={state.image}
                        alt={state.name}
                        fill
                        className={`object-cover group-hover:scale-110 transition-transform duration-500 ${state.imagePosition ?? 'object-center'}`}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Permit Badge */}
                    {state.permitRequired && (
                        <div className="absolute top-3 right-3">
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
                        {state.name}
                    </h3>

                    <p className="text-sm text-graphite/80 mb-4 line-clamp-2 flex-grow">
                        {state.tagline}
                    </p>

                    {/* Theme Tags */}
                    <div className="flex flex-wrap gap-2">
                        {state.primaryThemes.slice(0, 2).map((theme, i) => (
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
                </div>
            </article>
        </Link>
    );
}
