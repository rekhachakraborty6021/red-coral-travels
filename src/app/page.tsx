import type { Metadata } from 'next';
import Link from 'next/link';
import TourCard from '@/components/tours/TourCard';
import ThemeCard from '@/components/themes/ThemeCard';
import StateCard from '@/components/states/StateCard';
import HeroSection from '@/components/home/HeroSection';

import { getTours } from '@/lib/data/tours';
import { themes } from '@/lib/data/themes';
import { getStates } from '@/lib/data/states';

export const metadata: Metadata = {
  title: 'Red Coral Travels — Northeast India Travel & Tour Packages',
  description: 'Discover Northeast India with Red Coral Travels. Expert-curated tour packages for Assam, Meghalaya, Arunachal Pradesh, Nagaland, Manipur, Mizoram, Tripura & Sikkim. Wildlife safaris, treks, festivals and more.',
  keywords: [
    'Northeast India tour packages', 'travel Northeast India', 'Assam tour packages',
    'Meghalaya tour packages', 'Arunachal Pradesh tours', 'Nagaland Hornbill Festival',
    'seven sisters India tour', 'Kaziranga National Park safari', 'Tawang Monastery tour',
    'Living Root Bridges Meghalaya', 'Ziro Music Festival', 'Northeast India holiday',
  ],
  alternates: { canonical: '/' },
};

export default function HomePage() {
  const featuredTours = getTours().filter(t => t.featured);
  const states = getStates();

  return (
    <>
      <HeroSection />

      {/* Explore by State */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Explore by State
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover the unique treasures of Northeast India's eight sister states
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                        gap-6 lg:gap-8">
            {states.map((state) => (
              <StateCard key={state.id} state={state} />
            ))}
          </div>
        </div>
      </section>

      {/* Explore by Experience (Themes) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Explore by Experience
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find your perfect adventure through curated travel themes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                        gap-6 lg:gap-8">
            {themes.map((theme) => (
              <ThemeCard key={theme.id} theme={theme} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/tours"
              className="inline-block px-8 py-3 bg-blue-600 text-white 
                       rounded-lg font-semibold hover:bg-blue-700
                       active:scale-95 transition-all"
            >
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Tours
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Handpicked destinations for unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                        gap-6 lg:gap-8">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Mobile Friendly */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Why Travel With Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                        gap-8">
            {[
              {
                icon: '✓',
                title: 'Best Prices',
                description: 'Competitive rates with no hidden charges'
              },
              {
                icon: '⭐',
                title: 'Expert Guides',
                description: 'Experienced local guides who know the best spots'
              },
              {
                icon: '🛡️',
                title: 'Safe Travel',
                description: 'Your safety is our top priority'
              },
              {
                icon: '💬',
                title: '24/7 Support',
                description: 'Always here to help during your journey'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl 
                                        hover:shadow-lg transition-shadow bg-white">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
