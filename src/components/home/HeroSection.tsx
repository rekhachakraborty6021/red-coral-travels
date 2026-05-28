'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ── Add your hero images here ─────────────────────────────
// Place images in /public/images/hero/ and list them below.
// Recommended size: 1920×1080 px, JPG/PNG.
const slides = [
    { src: '/images/hero/hero-1.png', alt: 'Northeast India – explore untouched landscapes' },
    { src: '/images/hero/hero-2.png', alt: 'Kaziranga – one-horned rhino safari' },
    { src: '/images/hero/hero-3.png', alt: 'Dzukou Valley – valley of flowers' },
    { src: '/images/hero/hero-4.png', alt: 'Majuli Island – river island culture' },
    { src: '/images/hero/hero-5.png', alt: 'Tawang Monastery – Buddhist highlands' },
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);
    const [transitioning, setTransitioning] = useState(false);

    const goTo = useCallback((index: number) => {
        if (transitioning) return;
        setTransitioning(true);
        setCurrent(index);
        setTimeout(() => setTransitioning(false), 600);
    }, [transitioning]);

    const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
    const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

    // Auto-advance every 5 s
    useEffect(() => {
        const id = setInterval(next, 5000);
        return () => clearInterval(id);
    }, [next]);

    return (
        <section className="relative text-white overflow-hidden min-h-[70vh] flex items-center">

            {/* Slides */}
            {slides.map((slide, i) => (
                <div
                    key={slide.src}
                    className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                    <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        className="object-cover object-center"
                        priority={i === 0}
                        sizes="100vw"
                    />
                </div>
            ))}

            {/* Overlay — just enough to make buttons readable */}
            <div className="absolute inset-0 z-20 bg-black/10" />

            {/* Prev / Next arrows */}
            <button
                onClick={prev}
                aria-label="Previous slide"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-[#C8553D]/80 backdrop-blur-sm flex items-center justify-center transition-colors"
            >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button
                onClick={next}
                aria-label="Next slide"
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-[#C8553D]/80 backdrop-blur-sm flex items-center justify-center transition-colors"
            >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>

            {/* Content */}
            <div className="absolute bottom-14 left-0 right-0 z-30 flex justify-center gap-4 px-4">
                <Link href="/tours" className="px-8 py-3.5 bg-yellow-400 !text-blue-900 rounded-lg font-bold text-lg hover:bg-yellow-300 active:scale-95 transition-all shadow-lg">
                    Explore Tours
                </Link>
                <Link href="/contact" className="px-8 py-3.5 bg-white/20 backdrop-blur-sm border-2 border-white !text-white rounded-lg font-bold text-lg hover:bg-white/30 active:scale-95 transition-all">
                    Plan My Trip
                </Link>
            </div>

            {/* Dot indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`transition-all duration-300 rounded-full ${i === current ? 'w-6 h-2.5 bg-[#C8553D]' : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'}`}
                    />
                ))}
            </div>
        </section>
    );
}
