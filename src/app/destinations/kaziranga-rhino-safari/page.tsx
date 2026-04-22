import type { Metadata } from 'next';
import Link from 'next/link';
import BackButton from '@/components/ui/BackButton';

export const metadata: Metadata = {
  title: 'Kaziranga Rhino Safari — UNESCO World Heritage, Assam',
  description:
    'Track the endangered one-horned rhinoceros by jeep and elephant in UNESCO World Heritage Kaziranga National Park. 3-day safari from ₹12,999.',
};

const quickFacts = [
  { icon: '🦏', label: 'Star Animal', value: 'One-Horned Rhino' },
  { icon: '📍', label: 'Location', value: 'Golaghat, Assam' },
  { icon: '🌿', label: 'Grade', value: 'Easy' },
  { icon: '📅', label: 'Best Season', value: 'Nov – Apr' },
  { icon: '⏱️', label: 'Duration', value: '3 Days / 2 Nights' },
  { icon: '🐘', label: 'Safaris', value: 'Jeep + Elephant' },
];

const itinerary = [
  {
    day: 1,
    title: 'Guwahati → Kaziranga',
    drive: '~220 km / 4 hrs',
    stay: 'Eco-lodge, Kaziranga',
    desc: "Depart Guwahati after breakfast and drive east along the National Highway 37, with the Brahmaputra glittering to the north. Check in to the eco-lodge by early afternoon. Evening orientation briefing with your naturalist guide over dinner.",
    highlights: ['Scenic NH-37 Brahmaputra drive', 'Eco-lodge check-in', 'Naturalist briefing & dinner'],
    meals: 'Dinner',
  },
  {
    day: 2,
    title: 'Elephant Safari at Dawn + Jeep Safari (Central Range)',
    drive: 'Park only',
    stay: 'Eco-lodge, Kaziranga',
    desc: "The best day of the tour. Rise before dawn for an elephant-back safari — the only way to move quietly through tall elephant grass and approach rhinos at close range. After breakfast, a jeep safari through the Central Range (Kohora), the highest density zone for rhinos, elephants, and if you are fortunate, the Bengal tiger.",
    highlights: ['Dawn elephant-back safari', 'One-horned rhino at close range', 'Wild elephant herds', 'Jeep safari — Central Range', 'Bengal tiger sightings (seasonal)'],
    meals: 'Breakfast + Lunch + Dinner',
  },
  {
    day: 3,
    title: 'Western Range Jeep Safari → Guwahati',
    drive: '~220 km return',
    stay: 'Drop-off',
    desc: 'Early morning jeep safari through the Western Range (Bagori) — renowned for its bird diversity and open grasslands with large rhino congregations. Pack up and drive back to Guwahati, arriving by evening.',
    highlights: ['Western Range (Bagori) jeep safari', '480+ bird species spotting', 'Water buffalo herds', 'Return to Guwahati'],
    meals: 'Breakfast + Lunch',
  },
];

const wildlife = [
  { emoji: '🦏', name: 'Indian One-Horned Rhino', count: '2,600+', note: 'Largest population on Earth' },
  { emoji: '🐘', name: 'Asian Elephant', count: '1,300+', note: 'Largest in Northeast India' },
  { emoji: '🐅', name: 'Bengal Tiger', count: '120+', note: 'High-density tiger reserve' },
  { emoji: '🦬', name: 'Wild Water Buffalo', count: '1,500+', note: 'Rare pure-bred population' },
  { emoji: '🐊', name: 'Mugger Crocodile', count: 'Abundant', note: 'Along the Brahmaputra banks' },
  { emoji: '🦅', name: 'Bird Species', count: '480+', note: 'Including 9 globally threatened' },
];

const highlights = [
  { emoji: '🐘', title: 'Elephant-Back Safari', desc: "The only silent way into Kaziranga's tall grass. At dawn, atop an elephant, you enter the rhino's world — close enough to hear them breathe. Absolutely irreplaceable." },
  { emoji: '🦏', title: "World's Largest Rhino Population", desc: "Kaziranga shelters over 2,600 Indian one-horned rhinos — more than 70% of the global population. Sightings are virtually guaranteed in the Central Range." },
  { emoji: '🌿', title: 'UNESCO World Heritage Site', desc: "Inscribed in 1985, Kaziranga is one of India's most successful conservation stories — a national park brought back from the brink to become a global biodiversity hotspot." },
  { emoji: '📸', title: "Photographer's Dream", desc: 'Open grasslands, low morning mist, and habituated wildlife make Kaziranga one of the most rewarding wildlife photography destinations anywhere in Asia.' },
];

const practicalInfo = [
  { icon: '🪪', title: 'No Permit Needed', body: 'Unlike many Northeast destinations, Kaziranga requires no special permit. All park entry fees and safari permits are included in your package.' },
  { icon: '🌅', title: 'Safari Timing', body: 'Elephant safaris depart at 5:30 AM. Jeep safaris run 6–9 AM and 3–6 PM. Early mornings offer the best light and the most rhino activity.' },
  { icon: '🌧️', title: 'Park Closure', body: 'The park is closed May–October (monsoon) when the Brahmaputra floods the grasslands. Plan your visit between November and April for guaranteed access.' },
  { icon: '👨‍👩‍👧', title: 'Family Friendly', body: "Kaziranga is one of the most accessible wildlife parks in India — flat terrain, well-maintained tracks, and comfortable eco-lodges make it ideal for families." },
];

const packingList = [
  { cat: 'Safari Wear', items: ['Neutral / earth-tone clothing (no bright colours)', 'Full-sleeve shirts (insect protection)', 'Comfortable trekking trousers', 'Warm layer for dawn safaris'] },
  { cat: 'Gear', items: ['Binoculars (8×42 recommended)', 'Camera with zoom lens (200mm+)', 'Insect repellent', 'Dustproof bag for camera'] },
  { cat: 'Footwear', items: ['Closed-toe walking shoes', 'Sandals for lodge evenings', 'Socks × 3 pairs'] },
  { cat: 'Essentials', items: ['Sunscreen SPF 50+', 'Wide-brim hat', 'Personal medications', 'Original Govt ID (park entry)'] },
];

export default function KazirangaRhinoSafariPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(ellipse at 20% 65%, #3E3760 0%, transparent 55%), radial-gradient(ellipse at 85% 20%, #F2D7EE 0%, transparent 45%)' }} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <BackButton />
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">Assam</span>
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">🌿 UNESCO Heritage</span>
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">🦏 Rhino Country</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Kaziranga Rhino Safari
            <span className="block text-lavender-veil text-2xl sm:text-3xl font-medium mt-2">
              Face to Face with the One-Horned Giant
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-8">
            Home to more than 70% of the world's Indian one-horned rhinoceros,
            Kaziranga is one of the great wildlife spectacles on Earth. Come for
            the rhinos. Stay for the tigers, elephants, and dawn mist over the grasslands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book/kaziranga-rhino-safari" className="btn-primary bg-lavender-veil text-deep-navy hover:bg-secondary-dark">
              Book Safari — ₹12,999
            </Link>
            <Link href="/contact?tour=kaziranga-rhino-safari" className="btn-outline border-white text-white hover:bg-white/10">
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
                Assam's Crown Jewel
              </h2>
              <div className="space-y-4 text-graphite/75 leading-relaxed">
                <p>
                  Spread across 430 sq km of floodplain grassland, riverine forest, and wetland
                  at the foothills of the Eastern Himalayas, Kaziranga National Park is one of
                  India's most celebrated conservation success stories. Declared a UNESCO World
                  Heritage Site in 1985, it shelters the densest populations of large mammals
                  anywhere in the world.
                </p>
                <p>
                  The park is divided into four ranges — Central (Kohora), Western (Bagori),
                  Eastern (Agoratoli), and Burapahar — each with a distinct landscape and wildlife
                  profile. The <strong className="text-deep-navy">Central Range</strong> offers the
                  best rhino density; the <strong className="text-deep-navy">Western Range</strong>{' '}
                  is renowned for birds and open grasslands.
                </p>
                <p>
                  During our two full safari days, you experience both by jeep and — uniquely — by
                  elephant-back at dawn, the only way to enter the tall elephant grass where rhinos
                  truly live.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: '🦏', stat: 'Rhinos', sub: '2,600+ (70% of world pop.)', bg: 'bg-primary-100' },
                { emoji: '🏞️', stat: 'Park Area', sub: '430 sq km', bg: 'bg-secondary' },
                { emoji: '🐅', stat: 'Tigers', sub: 'Project Tiger since 2006', bg: 'bg-accent-light' },
                { emoji: '🦅', stat: 'Bird Species', sub: '480+ recorded', bg: 'bg-primary-50' },
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

      {/* Wildlife Checklist */}
      <section className="py-16 sm:py-20 bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4">The Big Six</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy">Wildlife You May Encounter</h2>
            <p className="text-graphite/60 mt-3 max-w-xl mx-auto text-sm">Kaziranga has the highest density of large mammals of any protected area on Earth.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {wildlife.map((w) => (
              <div key={w.name} className="card p-5 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-lavender-veil flex items-center justify-center text-3xl flex-shrink-0">{w.emoji}</div>
                <div>
                  <div className="font-bold text-deep-navy text-sm">{w.name}</div>
                  <div className="text-lavender-purple font-semibold text-lg leading-tight">{w.count}</div>
                  <div className="text-graphite/50 text-xs">{w.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4">What Makes It Special</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy">Four Unmissable Experiences</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="card p-6">
                <div className="w-12 h-12 rounded-xl bg-lavender-veil flex items-center justify-center text-2xl mb-4">{h.emoji}</div>
                <h3 className="text-base font-bold text-deep-navy mb-2">{h.title}</h3>
                <p className="text-sm text-graphite/70 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 sm:py-20 bg-primary-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4">Day by Day</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy">3-Day Safari Itinerary</h2>
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
                        <span key={h} className="px-2 py-0.5 bg-white text-lavender-purple rounded-full text-xs font-medium border border-lavender-purple/20">{h}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="py-16 sm:py-20 bg-white">
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

          <h3 className="text-2xl font-bold text-deep-navy text-center mb-8">What to Pack</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packingList.map((s) => (
              <div key={s.cat} className="bg-primary-50 rounded-xl p-5 border border-thistle/20">
                <h4 className="font-bold text-lavender-purple mb-3 text-sm uppercase tracking-wide">{s.cat}</h4>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-graphite/70">
                      <span className="text-lavender-purple flex-shrink-0 mt-0.5">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included / Excluded */}
      <section className="py-16 sm:py-20 bg-primary-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-deep-navy text-center mb-10">What's in the Package</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="font-bold text-lg text-deep-navy mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-lavender-purple font-bold">✓</span>
                Included
              </h3>
              <ul className="space-y-3">
                {['Accommodation in eco-lodge (2 nights)', 'All meals (breakfast, lunch, dinner)', 'Elephant-back safari (Day 2 dawn)', 'Two jeep safaris (Central + Western Range)', 'Safari permits and park entry fees', 'Expert naturalist guide', 'Transportation from Guwahati'].map((item) => (
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
                {['Flight or train tickets to Guwahati', 'Personal expenses', 'Camera fees (if applicable in park)', 'Tips for guides and naturalist', 'Travel insurance'].map((item) => (
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
          <div className="text-5xl mb-6">🦏</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Meet the Rhinos?</h2>
          <p className="text-white/75 text-lg mb-3">3 Days · 2 Nights · ₹12,999 per person</p>
          <p className="text-white/60 text-sm mb-8">Max 12 guests · No permit required · Elephant + Jeep safaris included</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book/kaziranga-rhino-safari" className="btn-primary bg-lavender-veil text-deep-navy hover:bg-secondary-dark font-bold text-base">
              Book Now
            </Link>
            <Link href="/contact?tour=kaziranga-rhino-safari" className="btn-outline border-white text-white hover:bg-white/10 font-bold text-base">
              Enquire First
            </Link>
          </div>
          <p className="mt-6 text-white/50 text-xs">Free cancellation up to 15 days before departure · Secure Stripe checkout</p>
        </div>
      </section>

    </div>
  );
}
