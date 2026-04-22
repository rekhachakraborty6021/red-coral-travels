import type { Metadata } from 'next';
import Link from 'next/link';
import BackButton from '@/components/ui/BackButton';

export const metadata: Metadata = {
  title: "Tawang Monastery & Sela Pass — Arunachal Pradesh",
  description:
    "Journey to India's highest monastery at 10,000 ft, cross the frozen Sela Pass at 13,700 ft, and witness Tibetan Buddhism alive in the Himalayas. 6-day tour from ₹24,999.",
};

const quickFacts = [
  { icon: '🏔️', label: 'Altitude', value: '13,700 ft (Sela)' },
  { icon: '📍', label: 'Location', value: 'Tawang, Arunachal Pradesh' },
  { icon: '🧭', label: 'Grade', value: 'Moderate' },
  { icon: '📅', label: 'Best Season', value: 'Mar–May · Sep–Nov' },
  { icon: '⏱️', label: 'Duration', value: '6 Days / 5 Nights' },
  { icon: '🪪', label: 'Permit', value: 'ILP Required' },
];

const itinerary = [
  {
    day: 1,
    title: 'Guwahati → Bhalukpong → Dirang',
    drive: '~320 km',
    stay: 'Dirang',
    desc: 'Depart Guwahati early and drive into Arunachal Pradesh through lush foothills. Cross the Kameng river, stop at Tipi Orchid Research Centre, and arrive at Dirang — a charming valley town with apple orchards and hot springs.',
    highlights: ['Tipi Orchid Research Centre', 'Dirang Dzong (mini monastery)', 'Hot spring dip at Dirang'],
    meals: 'Dinner',
  },
  {
    day: 2,
    title: 'Dirang → Sela Pass → Tawang',
    drive: '~175 km',
    stay: 'Tawang',
    desc: 'The most dramatic drive of the tour. Ascend to the breathtaking Sela Pass at 13,700 ft — a high-altitude lake, glacial silence, and sweeping Himalayan panoramas. Descend through war memorials and pine forests to reach Tawang town.',
    highlights: ['Sela Pass at 13,700 ft', 'Sela Lake (frozen in winter)', 'Nuranang (Jung) Falls', 'Jaswant Garh War Memorial'],
    meals: 'Breakfast + Dinner',
  },
  {
    day: 3,
    title: 'Tawang Monastery Full Day',
    drive: 'Local',
    stay: 'Tawang',
    desc: "Full day at the jewel of the tour. Tawang Monastery — the 2nd largest in the world and largest in India — perches at 10,000 ft and dates to 1681. Attend morning prayers with monks, explore the museum housing 400-year-old manuscripts, and visit the adjacent Urgelling Monastery, birthplace of the 6th Dalai Lama.",
    highlights: ['Tawang Monastery (morning prayers)', 'Ancient manuscript museum', 'Urgelling Monastery', 'Craft bazaar for Monpa textiles'],
    meals: 'Breakfast + Lunch + Dinner',
  },
  {
    day: 4,
    title: 'Madhuri Lake & Bum La Pass (optional)',
    drive: 'Local excursions',
    stay: 'Tawang',
    desc: 'Morning excursion to Madhuri Lake (Sangetsar Lake) — the mirror-like high-altitude lake famous from the Bollywood film. Afternoon option to visit Bum La Pass on the China border (subject to Army clearance). Evening at leisure in Tawang market.',
    highlights: ['Madhuri Lake (Sangetsar)', 'Bum La Pass — Indo-China border', 'PT Tso Lake', 'Local Monpa cuisine dinner'],
    meals: 'Breakfast + Dinner',
  },
  {
    day: 5,
    title: 'Tawang → Bomdila',
    drive: '~180 km',
    stay: 'Bomdila',
    desc: 'Return journey through the mountains, stopping at Bomdila — a hill station with its own monastery and sweeping views of the Eastern Himalayas. Visit the Bomdila Monastery and craft centre.',
    highlights: ['Bomdila Monastery', 'Himalayan panorama viewpoint', 'Apple orchards of Bomdila', 'Craft centre — thangka paintings'],
    meals: 'Breakfast + Dinner',
  },
  {
    day: 6,
    title: 'Bomdila → Guwahati',
    drive: '~320 km',
    stay: 'Drop-off',
    desc: 'Final drive back through the Assam foothills, crossing the Brahmaputra plains to Guwahati. Drop-off at airport or railway station.',
    highlights: ['Last mountain views at Bhalukpong', 'Riverside lunch en route', 'Guwahati drop-off by evening'],
    meals: 'Breakfast + Lunch',
  },
];

const highlights = [
  { emoji: '🛕', title: "2nd Largest Monastery in the World", desc: "Tawang Monastery — Galden Namgyal Lhatse — was founded in 1681 and houses over 450 monks. Its golden rooftop, ancient murals, and 8-metre Buddha statue are unlike anything else in India." },
  { emoji: '🏔️', title: 'Sela Pass at 13,700 ft', desc: 'One of the highest motorable passes in the world, flanked by a glacial lake and Himalayan peaks. Crossing it in morning mist is an experience that stays with you forever.' },
  { emoji: '🌊', title: 'Nuranang Falls', desc: "Also called Jung Falls, this 100-metre cascade plunges through a rocky gorge. The drive alongside it on the way to Tawang is one of India's great road-trip moments." },
  { emoji: '🪬', title: 'Living Buddhist Culture', desc: 'Tawang is not a museum — it is a living Buddhist town. Butter lamps, prayer flags, chanting monks, and Monpa hospitality are woven into every moment of your stay.' },
];

const practicalInfo = [
  { icon: '🪪', title: 'Inner Line Permit', body: 'ILP is mandatory for all Indian nationals. Foreign nationals require a Protected Area Permit (PAP). We handle the full application process at no extra charge.' },
  { icon: '🏋️', title: 'Altitude & Health', body: 'Sela Pass sits at 13,700 ft. Acclimatise in Dirang (Night 1) before ascending. Those with heart/respiratory conditions should consult a doctor before booking.' },
  { icon: '❄️', title: 'Weather', body: 'Mar–May: pleasant and clear (best for photography). Sep–Nov: crisp autumn light. Dec–Feb: heavy snow may close Sela — for experienced winter travellers only.' },
  { icon: '📡', title: 'Connectivity', body: 'BSNL is the only network with partial coverage in Tawang. Inform your contacts before you leave — full digital detox territory.' },
];

const packingList = [
  { cat: 'Layering', items: ['Heavy down jacket', 'Thermal inner wear (top + bottom)', 'Fleece mid-layer', 'Windproof outer shell'] },
  { cat: 'Footwear', items: ['Waterproof trekking boots', 'Woollen socks × 4', 'Sandals for monastery visits', 'Gaiters (winter trips)'] },
  { cat: 'Health', items: ['Diamox (altitude sickness — consult doctor)', 'Sunscreen SPF 50+', 'Lip balm', 'Personal medications'] },
  { cat: 'Documents', items: ['ILP (we arrange)', 'Original Govt ID', 'Emergency contacts', 'Passport photos × 4 (for permits)'] },
];

export default function TawangMonasteryPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(ellipse at 25% 70%, #4A4174 0%, transparent 55%), radial-gradient(ellipse at 80% 15%, #D3BCC0 0%, transparent 45%)' }} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <BackButton />
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">Arunachal Pradesh</span>
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">🪪 ILP Required</span>
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">🏔️ High Altitude</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Tawang Monastery
            <span className="block text-lavender-veil text-2xl sm:text-3xl font-medium mt-2">
              & the Roof of Arunachal
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-8">
            Cross the frozen Sela Pass at 13,700 ft, stand before the 2nd largest monastery
            in the world, and trace the ancient Silk Road of Tibetan Buddhism through
            the highest reaches of Northeast India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book/tawang-monastery-circuit" className="btn-primary bg-lavender-veil text-deep-navy hover:bg-secondary-dark">
              Book Tour — ₹24,999
            </Link>
            <Link href="/contact?tour=tawang-monastery-circuit" className="btn-outline border-white text-white hover:bg-white/10">
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
                Where the Himalayas Meet the Divine
              </h2>
              <div className="space-y-4 text-graphite/75 leading-relaxed">
                <p>
                  Tawang sits at 10,000 feet in the far northwest corner of Arunachal Pradesh,
                  just 35 km from the Tibetan border. Founded by Merak Lama Lodre Gyatso in 1681,
                  Tawang Monastery is the largest in India and second only to Lhasa's Drepung
                  Monastery in the world — a sprawling complex of golden temples, monk quarters,
                  and a priceless 8-metre gilded Buddha.
                </p>
                <p>
                  To reach it, you cross the <strong className="text-deep-navy">Sela Pass</strong> — a
                  high-altitude corridor of glacial lakes, prayer flags, and Himalayan silence at
                  13,700 ft. The drive from Dirang to Tawang via Sela is consistently ranked
                  among the finest road journeys in all of Asia.
                </p>
                <p>
                  This is also the birthplace of the 6th Dalai Lama, and the Monpa people who
                  inhabit the valley have preserved Tibetan Buddhist traditions for centuries —
                  undiluted by modernity and utterly captivating.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: '🛕', stat: 'Founded', sub: '1681 AD', bg: 'bg-primary-100' },
                { emoji: '🧘', stat: 'Resident Monks', sub: '450+', bg: 'bg-secondary' },
                { emoji: '📜', stat: 'Manuscripts', sub: '400+ years old', bg: 'bg-accent-light' },
                { emoji: '🌡️', stat: 'Sela Pass Temp', sub: '-10°C in winter', bg: 'bg-primary-50' },
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

      {/* Highlights */}
      <section className="py-16 sm:py-20 bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4">Why Tawang</span>
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
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4">Day by Day</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy">6-Day Itinerary</h2>
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
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
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

      {/* Practical Info */}
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

          {/* Packing */}
          <h3 className="text-2xl font-bold text-deep-navy text-center mb-8">What to Pack</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packingList.map((s) => (
              <div key={s.cat} className="bg-white rounded-xl p-5 border border-thistle/20">
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
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-deep-navy text-center mb-10">What's in the Package</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="font-bold text-lg text-deep-navy mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-lavender-purple font-bold">✓</span>
                Included
              </h3>
              <ul className="space-y-3">
                {['ILP (Inner Line Permit) assistance', 'Accommodation in Tawang and Dirang', 'All meals as per itinerary', 'SUV transportation from Guwahati', 'Entry fees to all monasteries', 'Experienced driver-cum-guide'].map((item) => (
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
                {['Flight or train tickets to Guwahati', 'Personal expenses & shopping', 'Travel insurance (recommended)', 'Tips for guide and driver', 'Bum La Pass permit (Army-controlled)'].map((item) => (
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
          <div className="text-5xl mb-6">🛕</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready for Tawang?</h2>
          <p className="text-white/75 text-lg mb-3">6 Days · 5 Nights · ₹24,999 per person</p>
          <p className="text-white/60 text-sm mb-8">Max 8 guests · ILP handled · All monastery fees included</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book/tawang-monastery-circuit" className="btn-primary bg-lavender-veil text-deep-navy hover:bg-secondary-dark font-bold text-base">
              Book Now
            </Link>
            <Link href="/contact?tour=tawang-monastery-circuit" className="btn-outline border-white text-white hover:bg-white/10 font-bold text-base">
              Enquire First
            </Link>
          </div>
          <p className="mt-6 text-white/50 text-xs">Free cancellation up to 15 days before departure · Secure Stripe checkout</p>
        </div>
      </section>

    </div>
  );
}
