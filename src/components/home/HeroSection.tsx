'use client';

import Link from 'next/link';
import Image from 'next/image';
import MotionWrapper from '@/components/ui/MotionWrapper';

export default function HeroSection() {
    return (
        <section className="relative text-white overflow-hidden min-h-[70vh] flex items-center">

            {/* Background image — anchored to top so temple domes are fully visible */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero/hero.jpg"
                    alt="Hero background"
                    fill
                    className="object-cover object-top"
                    priority
                />
            </div>

            {/* Minimal overlay — keeps image colourful and transparent */}
            <div className="absolute inset-0 z-10" style={{ background: 'rgba(0,0,0,0.02)' }} />

            {/* Content */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 w-full relative z-20">
                <div className="text-center">
                    <MotionWrapper delay={0.1}>
                        <h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white"
                            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.85)' }}
                        >
                            Discover Your Next
                            <span className="block text-yellow-400 mt-2">Adventure</span>
                        </h1>
                    </MotionWrapper>

                    <MotionWrapper delay={0.3}>
                        <p
                            className="text-lg sm:text-xl text-white mb-8 sm:mb-10 max-w-2xl mx-auto px-4"
                            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}
                        >
                            Curated travel experiences across India and the world.
                            From beaches to mountains, we&apos;ve got your perfect getaway.
                        </p>
                    </MotionWrapper>

                    <MotionWrapper delay={0.5}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
                            <Link
                                href="/tours"
                                className="px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg font-bold text-lg hover:bg-yellow-300 active:scale-95 transition-all duration-200 text-center shadow-lg hover:shadow-xl"
                            >
                                Explore Tours
                            </Link>
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/20 active:scale-95 transition-all duration-200 text-center"
                            >
                                Plan My Trip
                            </Link>
                        </div>
                    </MotionWrapper>
                </div>
            </div>
        </section>
    );
}
