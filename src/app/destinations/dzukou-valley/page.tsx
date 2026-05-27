import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BackButton from '@/components/ui/BackButton';

export const metadata: Metadata = {
  title: 'Dzukou Valley Trek — Valley of Flowers, Nagaland',
  description:
    'Trek through the pristine Dzukou Valley at 2,452 m, home to the endemic Dzukou Lily. Plan your 3-day adventure at the Nagaland-Manipur border with Red Coral Travels.',
  keywords: ["Dzukou Valley trek","Nagaland trekking","Valley of Flowers Northeast India","Nagaland tour packages"],
  alternates: { canonical: 'https://www.redcoraltravels.com/destinations/dzukou-valley' },
  openGraph: {
    type: 'website', url: 'https://www.redcoraltravels.com/destinations/dzukou-valley',
    title: 'Dzukou Valley Trek - Valley of Flowers, Nagaland | Red Coral Travels',
    description: 'Trek through the pristine Dzukou Valley at 2,452 m, home to the endemic Dzukou Lily. Plan your 3-day adventure at the Nagaland-Manipur border with Red Coral Travels.',
    images: [{ url: 'https://www.redcoraltravels.com/og-image.jpg', width: 1200, height: 630, alt: 'Dzukou Valley Trek Nagaland' }],
  },
  twitter: { card: 'summary_large_image', title: 'Dzukou Valley Trek - Nagaland | Red Coral Travels', images: ['https://www.redcoraltravels.com/og-image.jpg'] },
};

/* ── Data ─────────────────────────────────────────── */

const quickFacts = [
  { icon: '🏔️', label: 'Altitude', value: '2,452 m' },
  { icon: '📍', label: 'Location', value: 'Nagaland–Manipur Border' },
  { icon: '🥾', label: 'Trek Grade', value: 'Moderate' },
  { icon: '📅', label: 'Best Season', value: 'Jun – Sep' },
  { icon: '⏱️', label: 'Duration', value: '3 Days / 2 Nights' },
  { icon: '📏', label: 'Trail Length', value: '18 km (round trip)' },
];

const itinerary = [
  {
    day: 1,
    title: 'Kohima → Viswema → Base Camp',
    distance: '~7 km trek',
    elevation: 'Ascent: 900 m',
    desc: 'Drive from Kohima to Viswema village (the trailhead) and begin the uphill climb through pine and bamboo forest. Arrive at the base camp on the valley rim by late afternoon. Camp under a canopy of stars.',
    meals: 'Lunch + Dinner',
    highlights: ['Dense pine forest trail', 'Panoramic valley rim views', 'Stargazing at camp'],
  },
  {
    day: 2,
    title: 'Valley Exploration Day',
    distance: '~8 km circuit',
    elevation: 'Flat to rolling',
    desc: 'Full day inside the valley. Trek through rolling emerald meadows carpeted with Dzukou Lily in full bloom (Jun–Jul). Explore the seasonal stream, the cave shelter, and distant ridgelines. This is your photography day.',
    meals: 'Breakfast + Lunch + Dinner',
    highlights: ['Dzukou Lily fields', 'Valley stream & cave', 'Sunrise over the hills', 'Naga tribal lore from guide'],
  },
  {
    day: 3,
    title: 'Valley → Viswema → Kohima',
    distance: '~7 km descent',
    elevation: 'Descent: 900 m',
    desc: 'Early morning walk with golden light across the meadows before packing camp. Descend through the forest back to Viswema and drive to Kohima for a farewell lunch.',
    meals: 'Breakfast + Lunch',
    highlights: ['Dawn golden-hour light', 'Descent through bamboo groves', 'Farewell lunch in Kohima'],
  },
];

const experiences = [
  {
    emoji: '🌸',
    title: 'The Dzukou Lily',
    desc: 'An endemic species found nowhere else on Earth. The pale blue-white lily blooms in July and transforms the valley floor into a living watercolour.',
  },
  {
    emoji: '⛺',
    title: 'Camping Under Stars',
    desc: 'Far from any light pollution, the valley offers some of the clearest night skies in Northeast India — perfect for stargazers.',
  },
  {
    emoji: '🌿',
    title: 'Dwarf Bamboo Forest',
    desc: 'The trail winds through dense stands of dwarf bamboo, rhododendron, and pine — a forest unlike anything in the plains.',
  },
  {
    emoji: '📸',
    title: "Photographer's Paradise",
    desc: 'Rolling green hills, morning mist, flower carpets, and dramatic ridgelines make this one of the most photogenic treks in India.',
  },
];

const packingList = [
  { cat: 'Gear', items: ['Trekking poles', 'Waterproof backpack', 'Headlamp + spare batteries', 'Trekking boots (ankle support)'] },
  { cat: 'Clothing', items: ['Warm fleece / down jacket', 'Waterproof rain jacket', 'Quick-dry trekking pants', 'Woollen socks × 3'] },
  { cat: 'Health', items: ['Personal medications', 'Sunscreen SPF 50+', 'Lip balm', 'Rehydration sachets'] },
  { cat: 'Documents', items: ['Inner Line Permit (we arrange)', 'Govt photo ID (original)', 'Emergency contacts printout'] },
];

const practicalInfo = [
  { icon: '🪪', title: 'Inner Line Permit', body: 'Nagaland is a permit-required state. We handle the full ILP process on your behalf — no extra paperwork for you.' },
  { icon: '🏋️', title: 'Fitness Level', body: 'Moderate. The ascent involves a sustained 900 m climb over ~3 hrs. Regular walkers and joggers handle it comfortably.' },
  { icon: '📡', title: 'Connectivity', body: 'There is no mobile network inside the valley. Our guides carry satellite communication devices for emergencies.' },
  { icon: '🌧️', title: 'Monsoon Trekking', body: 'The valley is best in monsoon (Jun–Sep) when the lilies bloom. Expect rain — pack waterproofs. Trails can be slippery.' },
];

/* ── Page ─────────────────────────────────────────── */

export default function DzukouValleyPage() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="relative text-white overflow-hidden">
        <Image src="/images/tours/dzukou-main.jpg" alt="Dzukou Valley Trek Nagaland" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/30 to-black/60" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <BackButton />
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">Nagaland</span>
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">🥾 Moderate Trek</span>
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">🌸 Endemic Lily</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Dzukou Valley
            <span className="block text-lavender-veil text-2xl sm:text-3xl font-medium mt-2">
              The Valley of Flowers of Northeast India
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-8">
            At 2,452 metres on the Nagaland–Manipur border, Dzukou is a world apart —
            rolling emerald meadows, bamboo-lined trails, and the legendary Dzukou Lily
            that blooms for just a few weeks every monsoon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book/dzukou-valley-trek" className="btn-primary bg-lavender-veil text-deep-navy hover:bg-secondary-dark">
              Book Trek 
            </Link>
            
          </div>
        </div>
      </section>

      {/* ── Quick Facts ── */}
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

      {/* ── About the Valley ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="badge mb-4">The Destination</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy mb-6">
                A Valley Lost in Time
              </h2>
              <div className="space-y-4 text-graphite/75 leading-relaxed">
                <p>
                  Tucked between the peaks of Japfü and Dzüko at the border of Nagaland and Manipur,
                  Dzukou Valley sits at an elevation that keeps it cool, misty, and almost entirely
                  untouched. It is one of the few places in India where you can spend two nights in a
                  valley and feel genuinely alone in nature.
                </p>
                <p>
                  The valley owes its fame to a single flower — the <strong className="text-deep-navy">Dzukou Lily</strong>{' '}
                  (<em>Lilium nanum</em> var. <em>dzukouense</em>), a pale blue-white bloom endemic to
                  this valley alone. From late June through September the entire floor transforms into
                  a sea of flowers, drawing botanists, photographers, and trekkers from across the country.
                </p>
                <p>
                  Beyond the lily season, the valley is equally spectacular — a tapestry of rhododendron,
                  dwarf bamboo, pine, and seasonal streams that feed the Brahmaputra basin far below.
                </p>
              </div>
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: '🌺', stat: 'Bloom Season', sub: 'Late June – August', bg: 'bg-secondary' },
                { emoji: '🌡️', stat: 'Valley Temp', sub: '8 °C – 22 °C', bg: 'bg-primary-100' },
                { emoji: '🦋', stat: 'Biodiversity', sub: 'Endemic flora & fauna', bg: 'bg-accent-light' },
                { emoji: '🏕️', stat: 'Camping Spots', sub: '2 designated areas', bg: 'bg-primary-50' },
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

      {/* ── 4 Experiences ── */}
      <section className="py-16 sm:py-20 bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4">What Awaits You</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy">
              Four Reasons Dzukou is Unmissable
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((e) => (
              <div key={e.title} className="card p-6">
                <div className="w-12 h-12 rounded-xl bg-lavender-veil flex items-center justify-center text-2xl mb-4">
                  {e.emoji}
                </div>
                <h3 className="text-lg font-bold text-deep-navy mb-2">{e.title}</h3>
                <p className="text-sm text-graphite/70 leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Itinerary ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4">Day by Day</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy">Trek Itinerary</h2>
          </div>

          <div className="space-y-6">
            {itinerary.map((day, idx) => (
              <div key={day.day} className="relative flex gap-6">
                {/* Timeline spine */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-lavender-purple text-white flex items-center justify-center font-bold text-sm flex-shrink-0 z-10">
                    D{day.day}
                  </div>
                  {idx < itinerary.length - 1 && (
                    <div className="w-0.5 flex-1 bg-thistle/40 mt-1" />
                  )}
                </div>

                {/* Content */}
                <div className="card p-6 flex-1 mb-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <h3 className="text-lg font-bold text-deep-navy">{day.title}</h3>
                    <div className="flex gap-2 flex-wrap">
                      <span className="badge text-xs">{day.distance}</span>
                      <span className="badge text-xs">{day.elevation}</span>
                    </div>
                  </div>
                  <p className="text-sm text-graphite/70 leading-relaxed mb-4">{day.desc}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-graphite/60">🍽️ {day.meals}</span>
                    <div className="flex flex-wrap gap-2">
                      {day.highlights.map((h) => (
                        <span key={h} className="px-2 py-0.5 bg-primary-50 text-lavender-purple rounded-full text-xs font-medium">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practical Info ── */}
      <section className="py-16 sm:py-20 bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4">Need to Know</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy">Practical Information</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {practicalInfo.map((p) => (
              <div key={p.title} className="card p-6">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-deep-navy mb-2">{p.title}</h3>
                <p className="text-sm text-graphite/70 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          {/* Packing Grid */}
          <div>
            <h3 className="text-2xl font-bold text-deep-navy text-center mb-8">What to Pack</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {packingList.map((section) => (
                <div key={section.cat} className="bg-white rounded-xl p-5 border border-thistle/20">
                  <h4 className="font-bold text-lavender-purple mb-3 text-sm uppercase tracking-wide">
                    {section.cat}
                  </h4>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-graphite/70">
                        <span className="text-lavender-purple mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Included / Excluded ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-deep-navy text-center mb-10">What's in the Package</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Included */}
            <div className="card p-6">
              <h3 className="font-bold text-lg text-deep-navy mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-lavender-purple font-bold">✓</span>
                Included
              </h3>
              <ul className="space-y-3">
                {[
                  'Camping equipment (tent, sleeping bag, mat)',
                  'All meals during the trek',
                  'Experienced trekking guide',
                  'Porter services',
                  'Inner Line Permit (ILP) fees',
                  'Transportation from Kohima',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-graphite/70">
                    <span className="text-lavender-purple flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Excluded */}
            <div className="card p-6">
              <h3 className="font-bold text-lg text-deep-navy mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-accent-light flex items-center justify-center text-graphite font-bold">✗</span>
                Not Included
              </h3>
              <ul className="space-y-3">
                {[
                  'Travel to / from Kohima',
                  'Personal trekking gear & clothing',
                  'Travel insurance (strongly recommended)',
                  'Tips for guides and porters',
                  'Any personal expenses',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-graphite/70">
                    <span className="text-accent-dark flex-shrink-0 mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20 bg-gradient-hero text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="text-5xl mb-6">🌸</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Trek Dzukou Valley?
          </h2>
          <p className="text-white/75 text-lg mb-3">
            3 Days · 2 Nights 
          </p>
          <p className="text-white/60 text-sm mb-8">
            Small groups (max 10) · Permits handled · All camping gear provided
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book/dzukou-valley-trek" className="btn-primary bg-lavender-veil text-deep-navy hover:bg-secondary-dark font-bold text-base">
              Book Now
            </Link>
            
          </div>
          <p className="mt-6 text-white/50 text-xs">
            Free cancellation up to 15 days before departure · Secure Stripe checkout
          </p>
        </div>
      </section>

    </div>
  );
}
