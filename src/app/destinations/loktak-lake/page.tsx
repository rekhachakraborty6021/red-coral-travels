import type { Metadata } from 'next';
import Link from 'next/link';
import BackButton from '@/components/ui/BackButton';

export const metadata: Metadata = {
  title: "Loktak Lake & Keibul Lamjao — World's Only Floating National Park, Manipur",
  description:
    "Explore the floating phumdis of Loktak Lake and spot the endangered Sangai deer in the world's only floating national park. 4-day tour from ₹11,999.",
};

const quickFacts = [
  { icon: '🌊', label: 'Type', value: 'Lake & Wildlife' },
  { icon: '📍', label: 'Location', value: 'Bishnupur, Manipur' },
  { icon: '🧭', label: 'Grade', value: 'Easy' },
  { icon: '📅', label: 'Best Season', value: 'Oct – Mar' },
  { icon: '⏱️', label: 'Duration', value: '4 Days / 3 Nights' },
  { icon: '🪪', label: 'Permit', value: 'ILP Required' },
];

const itinerary = [
  {
    day: 1,
    title: 'Arrival in Imphal → Loktak Lake',
    drive: '~55 km',
    stay: 'Imphal',
    desc: 'Fly into Imphal and drive south to Loktak Lake. Check in and take an evening boat ride across the lake as the sun sets behind the Manipur hills — your first encounter with the floating phumdis, the mass of vegetation, soil and organic matter that drift across the surface and define this extraordinary ecosystem.',
    highlights: ['Evening boat ride on Loktak', 'First phumdi encounter', 'Sendra Island viewpoint', 'Sunset over the lake'],
    meals: 'Dinner',
  },
  {
    day: 2,
    title: 'Keibul Lamjao National Park — Sangai Safari',
    drive: 'Local',
    stay: 'Imphal',
    desc: "Full day in Keibul Lamjao — the world's only floating national park, resting entirely on phumdis. Home to the critically endangered Sangai deer (Manipur's state animal), whose hooves are adapted to walk on the floating vegetation. Morning boat entry into the park, followed by a guided walk on the phumdis with your naturalist. Afternoon birdwatching: the lake supports over 100 species including the rare brown-antlered deer.",
    highlights: ['Keibul Lamjao floating park entry', 'Sangai deer sighting', 'Walking on floating phumdis', 'Birdwatching — 100+ species', 'Rare brown-antlered deer'],
    meals: 'Breakfast + Lunch + Dinner',
  },
  {
    day: 3,
    title: 'Imphal Cultural Day — Ima Keithel & Temples',
    drive: '~55 km to Imphal',
    stay: 'Imphal',
    desc: "Drive into Imphal for a cultural day. Visit the legendary Ima Keithel (Mothers' Market) — a 500-year-old market run entirely by women, one of the largest all-women markets in Asia. Afternoon at the Shree Govindajee Temple, seat of Vaishnavism in Manipur, and the Manipur State Museum for context on the region's kingdoms and tribal heritage. Evening: optional Manipuri classical dance performance.",
    highlights: ["Ima Keithel — all-women's market", 'Shree Govindajee Temple', 'Manipur State Museum', 'Optional Manipuri classical dance'],
    meals: 'Breakfast + Dinner',
  },
  {
    day: 4,
    title: 'Morning Lake Ride → Imphal → Departure',
    drive: 'Local + airport',
    stay: 'Drop-off',
    desc: 'Final dawn boat ride on Loktak — the quietest, most magical hour on the lake when mist sits on the phumdis and kingfishers skim the water. Return to Imphal for departure.',
    highlights: ['Dawn mist boat ride', 'Kingfisher & waterbird spotting', 'Imphal transfer & departure'],
    meals: 'Breakfast',
  },
];

const experiences = [
  {
    emoji: '🦌',
    title: "World's Only Floating National Park",
    desc: "Keibul Lamjao rests entirely on floating phumdis — there is no solid ground in the park. It is the last refuge of the Sangai, a deer so rare it was thought extinct until rediscovered in 1953.",
  },
  {
    emoji: '🌿',
    title: 'The Phumdis',
    desc: "Heterogeneous masses of vegetation, soil, and organic matter — some large enough to support entire fishing communities. Walking on them, feeling the ground move beneath your feet, is genuinely surreal.",
  },
  {
    emoji: '👩‍🦱',
    title: "Ima Keithel — 500 Years of Women",
    desc: "The Mothers' Market in Imphal has been run exclusively by women for over 500 years. Over 5,000 women traders sell everything from fish to fine Manipuri textiles. There is nowhere like it in Asia.",
  },
  {
    emoji: '💃',
    title: 'Manipuri Classical Dance',
    desc: "One of India's eight classical dance forms, Manipuri dance is fluid, devotional, and hypnotic. An evening performance in Imphal, with its elaborate costumes and Vaishnava themes, is unforgettable.",
  },
];

const practicalInfo = [
  {
    icon: '🪪',
    title: 'ILP Required',
    body: 'Manipur requires an Inner Line Permit for all Indian nationals. We handle the full application. Foreign nationals require a Protected Area Permit — apply at least 10 days in advance.',
  },
  {
    icon: '🚤',
    title: 'Boat Access Only',
    body: 'Keibul Lamjao and the phumdis are accessible only by boat. All boat rides are included in your package. Early morning departures get the best wildlife sightings.',
  },
  {
    icon: '🦌',
    title: 'Sangai Sightings',
    body: 'The Sangai deer is critically endangered with fewer than 260 individuals. Sightings are not guaranteed but are frequent in the early morning and late afternoon. Your naturalist guide maximises chances.',
  },
  {
    icon: '🌡️',
    title: 'Weather',
    body: 'Oct–Mar is ideal — cool, clear, and dry (15–25°C). Avoid the monsoon season (Jun–Sep) when the lake level rises, phumdis shift, and park access is restricted.',
  },
];

export default function LoktakLakePage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(ellipse at 25% 65%, #3E3760 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, #D3BCC0 0%, transparent 45%)' }} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <BackButton />
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">Manipur</span>
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">🌊 Floating National Park</span>
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">🦌 Sangai Deer</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Loktak Lake
            <span className="block text-lavender-veil text-2xl sm:text-3xl font-medium mt-2">
              The Floating World of Manipur
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-8">
            A lake where the ground floats, a national park with no solid earth,
            and a deer that was thought extinct. Loktak and Keibul Lamjao together
            form one of the most extraordinary wildlife landscapes on Earth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book/loktak-lake-floating-park" className="btn-primary bg-lavender-veil text-deep-navy hover:bg-secondary-dark">
              Book Tour — ₹11,999
            </Link>
            <Link href="/contact?tour=loktak-lake-floating-park" className="btn-outline border-white text-white hover:bg-white/10">
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
                A Lake That Defies Definition
              </h2>
              <div className="space-y-4 text-graphite/75 leading-relaxed">
                <p>
                  Loktak is the largest freshwater lake in Northeast India, spread across
                  287 sq km in Manipur's Bishnupur district. What makes it singular are the
                  <strong className="text-deep-navy"> phumdis</strong> — heterogeneous floating
                  masses of vegetation, soil, and organic matter that cover roughly a third of
                  the lake's surface. Some are large enough to support entire fishing villages.
                </p>
                <p>
                  Within the lake sits <strong className="text-deep-navy">Keibul Lamjao National Park</strong> —
                  the only national park in the world that floats. Its 40 sq km rest entirely
                  on phumdis, rising and falling with the water level. It is the last refuge of
                  the <strong className="text-deep-navy">Sangai</strong>, the brow-antlered deer and
                  state animal of Manipur, which was declared extinct in 1950 and rediscovered here in 1953.
                </p>
                <p>
                  This tour pairs the lake and park with Imphal's extraordinary cultural life —
                  the all-women Ima Keithel market and Manipuri classical dance — for a complete
                  immersion in one of India's most overlooked states.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: '🌊', stat: 'Lake Size', sub: '287 sq km', bg: 'bg-primary-100' },
                { emoji: '🦌', stat: 'Sangai Deer', sub: 'Fewer than 260 remain', bg: 'bg-secondary' },
                { emoji: '🌿', stat: 'Phumdis', sub: 'Cover ~40% of the lake', bg: 'bg-accent-light' },
                { emoji: '🐦', stat: 'Bird Species', sub: '100+ recorded', bg: 'bg-primary-50' },
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
            <span className="badge mb-4">What Awaits</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy">Four Unmissable Encounters</h2>
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
                  <div className="w-10 h-10 rounded-full bg-lavender-purple text-white flex items-center justify-center font-bold text-sm flex-shrink-0 z-10">D{day.day}</div>
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
                {['Accommodation in Imphal (3 nights)', 'All meals as per itinerary', 'Boat rides on Loktak Lake', 'Keibul Lamjao park entry fees', 'ILP assistance', 'All transportation'].map((item) => (
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
                {['Airfare to Imphal', 'Shopping at Ima Keithel', 'Dance performance ticket (optional)', 'Tips for guide', 'Travel insurance'].map((item) => (
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
          <div className="text-5xl mb-6">🌊</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Walk on Water in Manipur</h2>
          <p className="text-white/75 text-lg mb-3">4 Days · 3 Nights · ₹11,999 per person</p>
          <p className="text-white/60 text-sm mb-8">Max 12 guests · ILP handled · All boat rides included</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book/loktak-lake-floating-park" className="btn-primary bg-lavender-veil text-deep-navy hover:bg-secondary-dark font-bold text-base">Book Now</Link>
            <Link href="/contact?tour=loktak-lake-floating-park" className="btn-outline border-white text-white hover:bg-white/10 font-bold text-base">Enquire First</Link>
          </div>
          <p className="mt-6 text-white/50 text-xs">Free cancellation up to 15 days before departure · Secure Stripe checkout</p>
        </div>
      </section>

    </div>
  );
}
