import type { Metadata } from 'next';
import Link from 'next/link';
import BackButton from '@/components/ui/BackButton';

export const metadata: Metadata = {
  title: 'Hornbill Festival — Festival of Festivals, Nagaland',
  description:
    "Witness all 16 Naga tribes under one roof at Asia's most spectacular indigenous festival. Warrior dances, tribal cuisine, archery, and rock music in Kohima. 5-day tour from ₹18,999.",
};

const quickFacts = [
  { icon: '🎭', label: 'Type', value: 'Cultural Festival' },
  { icon: '📍', label: 'Location', value: 'Kisama, Kohima, Nagaland' },
  { icon: '🧭', label: 'Grade', value: 'Easy' },
  { icon: '📅', label: 'Dates', value: '1–10 December' },
  { icon: '⏱️', label: 'Duration', value: '5 Days / 4 Nights' },
  { icon: '🪪', label: 'Permit', value: 'ILP Required' },
];

const tribes = [
  { name: 'Angami', trait: 'Hosts of Kohima, known for distinctive shawls and stone-built villages' },
  { name: 'Ao', trait: 'Famous for the Moatsu Festival; skilled weavers and oral historians' },
  { name: 'Konyak', trait: 'The legendary headhunters of Mon district; tattooed warriors with brass head ornaments' },
  { name: 'Lotha', trait: 'Known for the Tokhu Emong harvest festival and vibrant geometric textiles' },
  { name: 'Sumi', trait: 'Renowned for the Tuluni festival and traditionally the most numerous Naga tribe' },
  { name: 'Chakhesang', trait: 'Distinctive conical hats and the Sükhrunye festival celebrating womanhood' },
];

const itinerary = [
  {
    day: 1,
    title: 'Arrival in Dimapur → Kohima',
    drive: '~74 km / 2.5 hrs',
    stay: 'Kohima',
    desc: 'Fly into Dimapur and drive up to Kohima through forested hills. Check in and take an orientation walk through Kohima town — visit the iconic World War II Cemetery where Allied and Japanese soldiers lie side by side, and the old Kohima village on the hill.',
    highlights: ['Kohima War Cemetery', 'Old Kohima village', 'Angami tribal market', 'Welcome dinner'],
    meals: 'Dinner',
  },
  {
    day: 2,
    title: 'Hornbill Festival — Opening Day',
    drive: '12 km to Kisama',
    stay: 'Kohima',
    desc: "Full day at the Hornbill Festival at Kisama Heritage Village. The opening ceremony features all 16 Naga tribes in traditional regalia — feathered headdresses, warrior beads, and ceremonial spears. Explore the tribal morungs (dormitories), taste authentic Naga cuisine at the food stalls, and watch the mesmerising warrior dance performances.",
    highlights: ['Opening ceremony — all 16 tribes', 'Naga warrior dances', 'Tribal morung exploration', 'Authentic Naga food stalls', 'Handicraft & textile market'],
    meals: 'Breakfast + Dinner',
  },
  {
    day: 3,
    title: 'Hornbill Festival — Deep Dive + Evening Concert',
    drive: '12 km to Kisama',
    stay: 'Kohima',
    desc: "Second festival day — go deeper. Attend the traditional Naga wrestling and archery competitions, watch the indigenous games, and join a guided tour of the Naga Heritage Village with its full-scale tribal houses. Evening: the legendary Hornbill Rock Concert — Northeast India's most celebrated music event — at the natural amphitheatre.",
    highlights: ['Naga wrestling championship', 'Traditional archery contest', 'Indigenous games (spear-throwing)', 'Naga Heritage Village tour', 'Hornbill Rock Concert'],
    meals: 'Breakfast + Dinner',
  },
  {
    day: 4,
    title: 'Day Trip to Mon — Konyak Headhunter Villages',
    drive: '~4 hrs each way (optional)',
    stay: 'Kohima',
    desc: "Optional day excursion to Mon district — home of the Konyak tribe, the last living headhunters of the world. Visit elderly Konyak warriors with traditional facial tattoos and brass ornaments representing past raids. Return to Kohima by evening for the final night of the festival.",
    highlights: ['Konyak tribal village visit', 'Meet tattooed Konyak elders', 'Longwa village — straddles India-Myanmar border', 'Final festival evening'],
    meals: 'Breakfast + Dinner',
  },
  {
    day: 5,
    title: 'Kohima → Dimapur → Departure',
    drive: '~74 km',
    stay: 'Drop-off',
    desc: 'Morning at leisure for last-minute shopping — Naga shawls, woodcarvings, and jewellery at Kohima market. Drive to Dimapur for your onward flight or train.',
    highlights: ['Kohima local market shopping', 'Naga shawl weaving demonstration', 'Dimapur transfer & departure'],
    meals: 'Breakfast',
  },
];

const experiences = [
  { emoji: '🪖', title: '16 Naga Tribes in Full Regalia', desc: "The Hornbill Festival gathers all 16 recognised Naga tribes — each with distinct language, textile, and warrior tradition — in a single heritage village. There is nowhere else on Earth this is possible." },
  { emoji: '⚔️', title: 'Warriors, Wrestling & Archery', desc: "Watch traditional Naga warrior dances, indigenous wrestling matches (Naga wrestling has no weight classes), and spear-throwing and archery competitions that date back to inter-tribal warfare." },
  { emoji: '🎸', title: 'Rock Capital of India', desc: "Nagaland is known as the Rock Capital of India. The Hornbill Rock Concert draws the best bands from across the Northeast and beyond — played in a stunning natural hillside amphitheatre." },
  { emoji: '🍖', title: 'Naga Cuisine', desc: "Fiercely distinctive — smoked pork, fermented bamboo shoots, ghost pepper (Bhut Jolokia) chutneys, rice beer, and silk worm fry. The festival food stalls are a culinary adventure unto themselves." },
];

const practicalInfo = [
  { icon: '🪪', title: 'ILP Required', body: "Nagaland requires an Inner Line Permit for all Indian nationals. Foreign nationals need a Protected Area Permit. We handle the full application process — no extra paperwork for you." },
  { icon: '📅', title: 'Fixed Dates Only', body: 'The Hornbill Festival runs 1–10 December annually. Our tour departs around 30 November and returns 5 December. Book early — this is the most in-demand tour we offer.' },
  { icon: '🌡️', title: 'December Weather', body: 'Kohima in December is cool to cold (8–18°C). Pack warm layers for evenings and mornings. Festival days can be crowded and physical — wear comfortable walking shoes.' },
  { icon: '📸', title: 'Photography', body: "The festival is a photographer's paradise. Always ask permission before photographing tribal elders or warriors — most are welcoming, but consent is important and respected." },
];

export default function HornbillFestivalPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(ellipse at 25% 65%, #4A4174 0%, transparent 55%), radial-gradient(ellipse at 78% 20%, #F2D7EE 0%, transparent 45%)' }} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <BackButton />
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">Nagaland</span>
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">🎭 16 Naga Tribes</span>
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">📅 1–10 December</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Hornbill Festival
            <span className="block text-lavender-veil text-2xl sm:text-3xl font-medium mt-2">
              The Festival of Festivals
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-8">
            For ten days every December, all 16 Naga tribes gather at Kisama Heritage Village
            in full ceremonial regalia. Warrior dances, ancient games, rock concerts, tattooed
            headhunters, and the most extraordinary indigenous feast in Asia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book/hornbill-festival-nagaland" className="btn-primary bg-lavender-veil text-deep-navy hover:bg-secondary-dark">
              Book Now — ₹18,999
            </Link>
            <Link href="/contact?tour=hornbill-festival-nagaland" className="btn-outline border-white text-white hover:bg-white/10">
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
              <span className="badge mb-4">The Festival</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy mb-6">
                A Civilisation on Display
              </h2>
              <div className="space-y-4 text-graphite/75 leading-relaxed">
                <p>
                  The Hornbill Festival — named after the great Indian hornbill, a bird of deep
                  cultural significance to the Naga people — was first held in 2000 to revive,
                  protect, and showcase the extraordinary diversity of Nagaland's 16 tribes.
                  Today it has become one of the most celebrated indigenous festivals anywhere
                  in the world.
                </p>
                <p>
                  At its heart is the <strong className="text-deep-navy">Naga Heritage Village at Kisama</strong> — a
                  permanent open-air museum where each tribe maintains a traditional
                  <em> morung</em> (bachelor dormitory). During the festival, these come alive
                  with dancing, cooking, and ceremonial displays that would otherwise only be
                  seen deep in individual tribal villages.
                </p>
                <p>
                  Beyond the heritage village, the festival includes rock concerts, wrestling,
                  archery, fashion shows blending tribal aesthetics with contemporary design,
                  and food stalls serving dishes you simply cannot find anywhere else in India.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: '🎭', stat: 'Tribes', sub: '16 Naga tribes present', bg: 'bg-secondary' },
                { emoji: '🏛️', stat: 'Venue', sub: 'Kisama Heritage Village', bg: 'bg-primary-100' },
                { emoji: '🎸', stat: 'Rock Concert', sub: 'Northeast India\'s biggest', bg: 'bg-accent-light' },
                { emoji: '📅', stat: 'Every Year', sub: '1–10 December', bg: 'bg-primary-50' },
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

      {/* Tribes Spotlight */}
      <section className="py-16 sm:py-20 bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4">The Tribes</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy">Tribes You Will Encounter</h2>
            <p className="text-graphite/60 mt-3 max-w-xl mx-auto text-sm">Each of Nagaland's 16 tribes has a distinct language, textile tradition, and ceremonial culture — six of the most iconic below.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tribes.map((t) => (
              <div key={t.name} className="card p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-lavender-purple text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-deep-navy">{t.name}</div>
                  <div className="text-sm text-graphite/70 mt-1 leading-relaxed">{t.trait}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4">Why Hornbill</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy">Four Unmissable Experiences</h2>
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
      <section className="py-16 sm:py-20 bg-primary-50">
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
                {['Accommodation in Kohima (4 nights)', 'Daily breakfast', 'Festival entry passes (all days)', 'ILP application assistance', 'Transportation to festival ground daily', 'Day trip to Mon (Konyak village)'].map((item) => (
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
                {['Airfare to Dimapur', 'Lunch and dinner (explore local stalls!)', 'Shopping and personal expenses', 'Tips for guide and driver', 'Travel insurance'].map((item) => (
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
            ⚡ The Hornbill Festival runs <strong>1–10 December only</strong> — this is a once-a-year event. Slots fill up by August.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-hero text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="text-5xl mb-6">🎭</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Be There for the Festival of Festivals</h2>
          <p className="text-white/75 text-lg mb-3">5 Days · 4 Nights · ₹18,999 per person</p>
          <p className="text-white/60 text-sm mb-8">Max 15 guests · ILP handled · All festival passes included</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book/hornbill-festival-nagaland" className="btn-primary bg-lavender-veil text-deep-navy hover:bg-secondary-dark font-bold text-base">
              Book Now
            </Link>
            <Link href="/contact?tour=hornbill-festival-nagaland" className="btn-outline border-white text-white hover:bg-white/10 font-bold text-base">
              Enquire First
            </Link>
          </div>
          <p className="mt-6 text-white/50 text-xs">Free cancellation up to 15 days before departure · Secure Stripe checkout</p>
        </div>
      </section>

    </div>
  );
}
