import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BackButton from '@/components/ui/BackButton';

export const metadata: Metadata = {
  title: "Majuli Island Cultural Immersion — World's Largest River Island, Assam",
  description:
    "Explore the world's largest river island on the Brahmaputra. Ancient Satras, mask-making villages, Mishing tribal culture, and sunset boat rides. 4-day tour .",
  keywords: ["Majuli Island Assam","world largest river island","Brahmaputra island tour","Assam cultural tour"],
  alternates: { canonical: 'https://www.redcoraltravels.com/destinations/majuli-island' },
  openGraph: {
    type: 'website', url: 'https://www.redcoraltravels.com/destinations/majuli-island',
    title: "Majuli Island - World's Largest River Island, Assam | Red Coral Travels",
    description: "Explore the world's largest river island on the Brahmaputra. Ancient Satras, mask-making villages, Mishing tribal culture, and sunset boat rides.",
    images: [{ url: 'https://www.redcoraltravels.com/og-image.jpg', width: 1200, height: 630, alt: 'Majuli Island Assam' }],
  },
  twitter: { card: 'summary_large_image', title: 'Majuli Island - Assam | Red Coral Travels', images: ['https://www.redcoraltravels.com/og-image.jpg'] },
};

const quickFacts = [
  { icon: '🏝️', label: 'Type', value: "River Island" },
  { icon: '📍', label: 'Location', value: 'Brahmaputra, Assam' },
  { icon: '🧭', label: 'Grade', value: 'Easy' },
  { icon: '📅', label: 'Best Season', value: 'Oct – Mar' },
  { icon: '⏱️', label: 'Duration', value: '4 Days / 3 Nights' },
  { icon: '🎭', label: 'Culture', value: 'Vaishnavite & Mishing' },
];

const itinerary = [
  {
    day: 1,
    title: 'Guwahati → Jorhat → Ferry to Majuli',
    drive: '~310 km + 1 hr ferry',
    stay: 'Heritage guesthouse, Majuli',
    desc: "Depart Guwahati early and drive to Nimati Ghat, Jorhat. Board the country ferry across the Brahmaputra — a 1-hour crossing through braided channels, sandbanks, and migratory birds. Arrive on Majuli in the afternoon. Explore the immediate surroundings by bicycle and settle in for a traditional Assamese welcome dinner.",
    highlights: ['Brahmaputra ferry crossing', 'First bicycle ride on the island', 'Assamese welcome dinner', 'Sunset from the riverbank'],
    meals: 'Dinner',
  },
  {
    day: 2,
    title: 'Satras Day — Ancient Vaishnavite Monasteries',
    drive: 'Bicycle / local transport',
    stay: 'Heritage guesthouse, Majuli',
    desc: "Full day visiting the ancient Satras — Vaishnavite monastery-villages unique to Majuli. Begin at Auniati Satra (founded 1653), renowned for its collection of antique utensils, jewellery, and handwritten manuscripts. Continue to Kamalabari Satra for its evening prayer and classical Borgeet music. End at Dakhinpat Satra, the most atmospheric, with resident monks and traditional mask collections.",
    highlights: ['Auniati Satra — antique manuscripts', 'Kamalabari evening prayers & Borgeet', 'Dakhinpat Satra mask collection', 'Sattriya dance glimpse'],
    meals: 'Breakfast + Dinner',
  },
  {
    day: 3,
    title: 'Mask-Making, Mishing Village & Pottery',
    drive: 'Bicycle / local transport',
    stay: 'Heritage guesthouse, Majuli',
    desc: "Morning workshop at a mask-making family workshop — Majuli is the sole surviving tradition of Mukha Shilpa, the ancient art of making papier-mâché and bamboo masks used in Sattriya performances. Afternoon visit to a Mishing tribal village to see traditional weaving on back-strap looms and eat a Mishing home meal. End the day at Salmora pottery village, famous for the distinctive black pottery made by the Deori community.",
    highlights: ['Mukha Shilpa mask-making workshop', 'Mishing tribal village & weaving', 'Traditional Mishing meal', 'Salmora black pottery village', 'Sunset Brahmaputra boat ride'],
    meals: 'Breakfast + Lunch + Dinner',
  },
  {
    day: 4,
    title: 'Morning Ride → Ferry → Jorhat → Guwahati',
    drive: '~310 km return',
    stay: 'Drop-off',
    desc: "Final morning bicycle ride through rice paddies and bamboo groves before the ferry back to Nimati Ghat. Drive to Jorhat for lunch, then return to Guwahati for onward travel.",
    highlights: ['Dawn paddy field cycle ride', 'Final Brahmaputra crossing', 'Jorhat lunch stop', 'Return to Guwahati'],
    meals: 'Breakfast + Lunch',
  },
];

const experiences = [
  {
    emoji: '🎭',
    title: 'Living Satras — 400 Years Old',
    desc: "Majuli's Satras are not museums. These Vaishnavite monastery-villages have been continuously occupied and practising Sattriya art, music, and philosophy since the 16th century — a living tradition unlike anything else in India.",
  },
  {
    emoji: '🎨',
    title: 'Mukha Shilpa Mask-Making',
    desc: "The ancient art of making ritual masks from bamboo, clay, and cow dung is alive only here. Each mask — used in the Raas Mahotsav festival — takes weeks to craft and tells a story from the Mahabharata or Ramayana.",
  },
  {
    emoji: '🚲',
    title: 'Island Life by Bicycle',
    desc: "No traffic, no crowds. Majuli is explored best on two wheels — through paddy fields, bamboo forests, and reed-lined waterways, stopping wherever curiosity leads.",
  },
  {
    emoji: '🌅',
    title: 'Brahmaputra Sunsets',
    desc: "The world's mightiest river at dusk, seen from a wooden country boat. The light on the sandbanks, the silhouettes of the river dolphins, and the silence — this is the memory you take home.",
  },
];

const practicalInfo = [
  {
    icon: '🚢',
    title: 'Ferry Schedule',
    body: 'The government ferry from Nimati Ghat runs twice daily (morning and noon). We book the morning crossing. The return is timed to avoid the last ferry (which can be cancelled in rough weather).',
  },
  {
    icon: '🌊',
    title: 'Erosion Reality',
    body: "Majuli loses land to the Brahmaputra every monsoon. What you see is one of India's most fragile inhabited places — visiting now matters, both for the island's communities and for you.",
  },
  {
    icon: '🚲',
    title: 'Getting Around',
    body: "Bicycles are the primary mode of transport on Majuli. Included in your package. The island is flat and manageable — even casual cyclists will have no trouble.",
  },
  {
    icon: '📵',
    title: 'Connectivity',
    body: 'Mobile signal is patchy on the island. BSNL and Jio have partial coverage. Embrace the disconnection — it is part of the magic.',
  },
];

export default function MajuliIslandPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        <Image src="/images/tours/majuli-main.jpg" alt="Majuli Island Assam" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/30 to-black/60" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <BackButton />
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">Assam</span>
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">🏝️ Largest River Island</span>
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">🎭 Vaishnavite Culture</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Majuli Island
            <span className="block text-lavender-veil text-2xl sm:text-3xl font-medium mt-2">
              The Soul of the Brahmaputra
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-8">
            The world's largest inhabited river island — a place of ancient Vaishnavite monasteries,
            living mask-making traditions, Mishing tribal villages, and the most beautiful sunsets
            on the Brahmaputra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book/majuli-island-cultural-tour" className="btn-primary bg-lavender-veil text-deep-navy hover:bg-secondary-dark">
              Book Tour 
            </Link>
            <Link href="/contact?tour=majuli-island-cultural-tour" className="btn-outline border-white text-white hover:bg-white/10">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-lavender-purple">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-white">
            {quickFacts.map((f) => (
              <div key={f.label} className="py-2">
                <div className="text-2xl mb-1">{f.icon}</div>
                <div className="text-xs text-lavender-veil uppercase tracking-wide">{f.label}</div>
                <div className="font-bold text-sm mt-0.5">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="badge mb-4">The Destination</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy mb-6">
                A Civilisation on a River Island
              </h2>
              <div className="space-y-4 text-graphite/75 leading-relaxed">
                <p>
                  Majuli sits in the middle of the Brahmaputra — the mightiest river in India —
                  accessible only by ferry from Jorhat. At roughly 350 sq km, it is the largest
                  inhabited river island on Earth, and it shelters one of the most distinctive
                  cultures in all of Northeast India.
                </p>
                <p>
                  In the 16th century, the saint-scholar <strong className="text-deep-navy">Srimanta Sankardeva</strong> established
                  the Neo-Vaishnavite movement here, founding the Satras — monastery-villages that
                  became the custodians of Assamese classical arts, philosophy, and identity.
                  Today, 22 Satras survive on the island, each a living museum of Borgeet music,
                  Sattriya dance, and Mukha Shilpa mask-making.
                </p>
                <p>
                  The island is also home to the <strong className="text-deep-navy">Mishing</strong> tribe — one of Assam's
                  largest indigenous communities — whose stilt houses, back-strap looms, and
                  fermented rice beer culture offer a completely different window into life on
                  the Brahmaputra.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: '🏝️', stat: 'Island Size', sub: '~350 sq km', bg: 'bg-secondary' },
                { emoji: '🛕', stat: 'Active Satras', sub: '22 surviving', bg: 'bg-primary-100' },
                { emoji: '🎭', stat: 'Mask Tradition', sub: '500+ years old', bg: 'bg-accent-light' },
                { emoji: '🌊', stat: 'River', sub: 'Brahmaputra', bg: 'bg-primary-50' },
              ].map((t) => (
                <div key={t.stat} className={`${t.bg} rounded-2xl p-6 flex flex-col items-center justify-center text-center aspect-square gap-2`}>
                  <span className="text-4xl">{t.emoji}</span>
                  <span className="text-sm font-bold text-deep-navy">{t.stat}</span>
                  <span className="text-xs text-graphite/60">{t.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-16 sm:py-20 bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4">Island Life</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy">Four Things Only Majuli Offers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((e) => (
              <div key={e.title} className="card p-6">
                <div className="w-12 h-12 rounded-xl bg-lavender-veil flex items-center justify-center text-2xl mb-4">{e.emoji}</div>
                <h3 className="text-base font-bold text-deep-navy mb-2">{e.title}</h3>
                <p className="text-sm text-graphite/70 leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4">Day by Day</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy">4-Day Itinerary</h2>
          </div>
          <div className="space-y-6">
            {itinerary.map((day, idx) => (
              <div key={day.day} className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-lavender-purple text-white flex items-center justify-center font-bold text-sm flex-shrink-0 z-10">
                    D{day.day}
                  </div>
                  {idx < itinerary.length - 1 && <div className="w-0.5 flex-1 bg-thistle/40 mt-1" />}
                </div>
                <div className="card p-6 flex-1 mb-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <h3 className="text-base font-bold text-deep-navy">{day.title}</h3>
                    <div className="flex gap-2 flex-wrap">
                      <span className="badge text-xs">{day.drive}</span>
                      <span className="badge text-xs">🏨 {day.stay}</span>
                    </div>
                  </div>
                  <p className="text-sm text-graphite/70 leading-relaxed mb-4">{day.desc}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    <span className="text-graphite/60 text-xs">🍽️ {day.meals}</span>
                    <div className="flex flex-wrap gap-2">
                      {day.highlights.map((h) => (
                        <span key={h} className="px-2 py-0.5 bg-primary-50 text-lavender-purple rounded-full text-xs font-medium">{h}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Info + Included/Excluded */}
      <section className="py-16 sm:py-20 bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4">Need to Know</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy">Practical Information</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {practicalInfo.map((p) => (
              <div key={p.title} className="card p-6">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-deep-navy mb-2">{p.title}</h3>
                <p className="text-sm text-graphite/70 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-6">
              <h3 className="font-bold text-lg text-deep-navy mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-lavender-purple font-bold">✓</span>
                Included
              </h3>
              <ul className="space-y-3">
                {[
                  'Heritage guesthouse (3 nights on island)',
                  'All meals (breakfast + dinner daily)',
                  'Ferry tickets to/from island',
                  'Bicycle rental for all 3 days',
                  'Cultural guide (Satra specialist)',
                  'Transportation from Jorhat',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-graphite/70">
                    <span className="text-lavender-purple flex-shrink-0 mt-0.5">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-lg text-deep-navy mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-accent-light flex items-center justify-center text-graphite font-bold">✗</span>
                Not Included
              </h3>
              <ul className="space-y-3">
                {[
                  'Travel to Jorhat',
                  'Handicraft purchases',
                  'Lunch (free exploration encouraged)',
                  'Tips for guide and guesthouse staff',
                  'Travel insurance',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-graphite/70">
                    <span className="text-accent-dark flex-shrink-0 mt-0.5">✗</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-hero text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="text-5xl mb-6">🏝️</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Discover Majuli Before It Disappears</h2>
          <p className="text-white/75 text-lg mb-3">4 Days · 3 Nights </p>
          <p className="text-white/60 text-sm mb-8">Max 12 guests · Bicycle included · Satra expert guide</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book/majuli-island-cultural-tour" className="btn-primary bg-lavender-veil text-deep-navy hover:bg-secondary-dark font-bold text-base">
              Book Now
            </Link>
            
          </div>
          <p className="mt-6 text-white/50 text-xs">Free cancellation up to 15 days before departure · Secure Stripe checkout</p>
        </div>
      </section>

    </div>
  );
}
