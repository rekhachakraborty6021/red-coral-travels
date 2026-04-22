import type { Metadata } from 'next';
import Link from 'next/link';
import BackButton from '@/components/ui/BackButton';

export const metadata: Metadata = {
  title: "Ziro Music Festival & Apatani Culture — Ziro Valley, Arunachal Pradesh",
  description:
    "India's most beloved outdoor music festival set in the UNESCO-nominated Ziro Valley. Indie music, Apatani tribal culture, and paddy-cum-fish farming landscapes. 5-day tour from ₹16,999.",
};

const quickFacts = [
  { icon: '🎵', label: 'Festival Type', value: 'Indie / Alternative' },
  { icon: '📍', label: 'Location', value: 'Ziro Valley, Arunachal' },
  { icon: '🧭', label: 'Grade', value: 'Easy' },
  { icon: '📅', label: 'Dates', value: 'Late September (4 days)' },
  { icon: '⏱️', label: 'Duration', value: '5 Days / 4 Nights' },
  { icon: '🪪', label: 'Permit', value: 'ILP Required' },
];

const itinerary = [
  {
    day: 1,
    title: 'Itanagar → Ziro Valley',
    drive: '~165 km / 5 hrs',
    stay: 'Festival camp, Ziro',
    desc: "Fly into Itanagar (or arrive by train to Naharlagun) and drive north through forested hills into the Ziro Valley — a wide, serene bowl at 1,500 m ringed by pine-covered ridges. Check in to your festival camp and explore the grounds as the early stages warm up. The atmosphere on arrival evening is electric — thousands of music lovers from across India converging on one of the country's most beautiful valleys.",
    highlights: ['Scenic drive to Ziro Valley', 'Festival camp check-in', 'Opening night performances', 'First taste of Apatani food stalls'],
    meals: 'Dinner',
  },
  {
    day: 2,
    title: 'Festival Day 1 + Apatani Village Morning',
    drive: 'Local',
    stay: 'Festival camp, Ziro',
    desc: "Morning guided walk through an Apatani village — meet community members keeping alive the traditions of nose plugs (Yaping Hullo) and facial tattoos, and watch women weaving on traditional looms. Afternoon and evening at the festival: multiple stages running simultaneously from indie folk to experimental electronica, all against the backdrop of the pine hills and open sky.",
    highlights: ['Apatani village guided walk', 'Traditional nose plug & tattoo culture', 'Back-strap loom weaving', 'Festival afternoon & evening performances'],
    meals: 'Breakfast + Dinner',
  },
  {
    day: 3,
    title: 'Festival Day 2 + Paddy-Cum-Fish Fields',
    drive: 'Local',
    stay: 'Festival camp, Ziro',
    desc: "Morning walk through Apatani paddy-cum-fish fields — an ancient UNESCO-recognised agricultural system where fish are cultivated directly in the rice paddies, eliminating the need for fertiliser. The terraced landscape in September is luminously green. Return for the full afternoon-to-night festival programme — typically the biggest headliner evening.",
    highlights: ['Paddy-cum-fish field walk', 'UNESCO-nominated agriculture system', 'Festival headliner evening', 'Ziro Valley stargazing post-concert'],
    meals: 'Breakfast + Dinner',
  },
  {
    day: 4,
    title: 'Festival Day 3 + Talley Valley Trek',
    drive: 'Local + short trek',
    stay: 'Festival camp / Ziro guesthouse',
    desc: "Morning nature walk into the fringes of Talley Valley Wildlife Sanctuary — old-growth cloud forest with orchids and rare birds. Return for the final day of the festival: closing ceremonies often include tribal performances woven into the musical lineup. Late-night campfire sessions with fellow travellers.",
    highlights: ['Talley Valley cloud forest walk', 'Orchid spotting', 'Festival closing ceremony', 'Campfire session'],
    meals: 'Breakfast + Dinner',
  },
  {
    day: 5,
    title: 'Ziro → Itanagar → Departure',
    drive: '~165 km',
    stay: 'Drop-off',
    desc: "Final morning at leisure in Ziro town — pick up local honey, kiwi wine (a Ziro speciality), and handwoven Apatani textiles at the market. Drive back to Itanagar for onward travel.",
    highlights: ['Ziro local market', 'Apatani textiles & honey', 'Kiwi wine tasting', 'Itanagar drop-off'],
    meals: 'Breakfast',
  },
];

const experiences = [
  {
    emoji: '🎸',
    title: "India's Finest Outdoor Festival",
    desc: "Ziro Music Festival consistently ranks as the best independent music festival in India. No commercial headliners — just carefully curated indie, folk, electronic, and world music in a pine-valley setting that has no equal.",
  },
  {
    emoji: '👃',
    title: 'Apatani Tribal Culture',
    desc: "The Apatani are one of the most fascinating tribes in Northeast India — known for nose plugs and facial tattoos (now worn by elders), extraordinary agricultural ingenuity, and a matrilineal social structure.",
  },
  {
    emoji: '🌾',
    title: 'UNESCO-Nominated Farmland',
    desc: "The Apatani paddy-cum-fish system has been nominated for UNESCO World Heritage status. Walking through the September fields — luminous green, alive with frogs and birds — is a profound agricultural experience.",
  },
  {
    emoji: '🌲',
    title: 'Talley Valley Cloud Forest',
    desc: "Adjacent to the festival valley, Talley Valley Wildlife Sanctuary is a pristine old-growth cloud forest with orchids, hornbills, and rare mammals — one of the least visited parks in all of India.",
  },
];

const practicalInfo = [
  {
    icon: '🪪',
    title: 'ILP Required',
    body: "Arunachal Pradesh requires an Inner Line Permit for all Indian nationals. Foreign nationals need a Protected Area Permit. We handle all applications — allow 7 days lead time.",
  },
  {
    icon: '📅',
    title: 'Festival Timing',
    body: "The festival runs for 4 days in the last week of September. Exact dates announced in July each year. Our tour is built around the peak 3 days. Book as soon as dates are announced — it sells out.",
  },
  {
    icon: '🌡️',
    title: 'September Weather',
    body: "Ziro in late September is cool (12–22°C) with occasional showers. The valley is lush and green — perfect festival weather. Pack a light rain jacket and a warm layer for evenings.",
  },
  {
    icon: '🏕️',
    title: 'Festival Camp',
    body: "We book you into a well-appointed festival camp (shared or private tent options). Full amenities — clean bathrooms, food stalls, charging points. A step up from general festival camping.",
  },
];

export default function ZiroMusicFestivalPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(ellipse at 25% 65%, #594E8D 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, #F2D7EE 0%, transparent 45%)' }}
        />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <BackButton />
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">Arunachal Pradesh</span>
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">🎵 Indie Music Festival</span>
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">🪪 ILP Required</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Ziro Music Festival
            <span className="block text-lavender-veil text-2xl sm:text-3xl font-medium mt-2">
              Where Music Meets the Mountains
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-8">
            India's most loved independent music festival — set in the UNESCO-nominated Ziro Valley
            at 1,500 m. Four days of world-class indie music, ancient Apatani tribal culture,
            and paddy fields that glow green under the September sky.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book/ziro-music-festival" className="btn-primary bg-lavender-veil text-deep-navy hover:bg-secondary-dark">
              Book Now — ₹16,999
            </Link>
            <Link href="/contact?tour=ziro-music-festival" className="btn-outline border-white text-white hover:bg-white/10">
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
              <span className="badge mb-4">The Experience</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy mb-6">
                The Valley That Became a Stage
              </h2>
              <div className="space-y-4 text-graphite/75 leading-relaxed">
                <p>
                  The Ziro Valley in Lower Subansiri district of Arunachal Pradesh is a wide,
                  pine-ringed bowl at 1,500 m — home to the Apatani tribe and nominated for
                  UNESCO World Heritage status for its extraordinary agricultural system. It is
                  also, every September, home to India's most beloved independent music festival.
                </p>
                <p>
                  Founded in 2012 by Bobby Hano and Anup Kutty, the <strong className="text-deep-navy">Ziro Music Festival</strong> was
                  born from a belief that great music belongs in great landscapes. The result is a
                  4-day gathering where artists perform on stages backed by pine forests and
                  mountain ridges — no corporate hoardings, no VIP excess, just music and nature.
                </p>
                <p>
                  What makes Ziro truly special is the layering: between sets you can walk into
                  an Apatani village, watch women weave, or look out over paddy fields that have
                  fed this community for centuries. It is the only music festival in India where
                  the destination is as extraordinary as the lineup.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: '🎵', stat: 'Festival Since', sub: '2012', bg: 'bg-secondary' },
                { emoji: '🌾', stat: 'Valley Altitude', sub: '1,500 m', bg: 'bg-primary-100' },
                { emoji: '🎸', stat: 'Stages', sub: 'Multiple indoor + outdoor', bg: 'bg-accent-light' },
                { emoji: '🏔️', stat: 'Setting', sub: 'UNESCO-nominated valley', bg: 'bg-primary-50' },
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
            <span className="badge mb-4">Beyond the Music</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy">Four Reasons to Come</h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy">5-Day Itinerary</h2>
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

      {/* Practical Info */}
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
                  'Festival passes (all days)',
                  'Festival camp accommodation (4 nights)',
                  'Breakfast and dinner daily',
                  'Inner Line Permit assistance',
                  'Apatani village tours with guide',
                  'Transportation from Itanagar',
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
                  'Airfare to Itanagar / Naharlagun train',
                  'Lunch (festival food stalls available)',
                  'Personal expenses & shopping',
                  'Tips for guide and camp staff',
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

      {/* Urgency Banner */}
      <section className="py-8 bg-lavender-veil border-y border-thistle/30">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-deep-navy font-semibold text-base">
            ⚡ Ziro Music Festival runs <strong>once a year in late September</strong>. Festival passes and camp slots sell out within days of announcement.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-hero text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="text-5xl mb-6">🎵</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Claim Your Spot in the Valley</h2>
          <p className="text-white/75 text-lg mb-3">5 Days · 4 Nights · ₹16,999 per person</p>
          <p className="text-white/60 text-sm mb-8">Max 20 guests · ILP handled · Festival passes + camp included</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book/ziro-music-festival" className="btn-primary bg-lavender-veil text-deep-navy hover:bg-secondary-dark font-bold text-base">
              Book Now
            </Link>
            <Link href="/contact?tour=ziro-music-festival" className="btn-outline border-white text-white hover:bg-white/10 font-bold text-base">
              Enquire First
            </Link>
          </div>
          <p className="mt-6 text-white/50 text-xs">Free cancellation up to 15 days before departure · Secure Stripe checkout</p>
        </div>
      </section>

    </div>
  );
}
