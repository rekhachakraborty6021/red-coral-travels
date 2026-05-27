import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BackButton from '@/components/ui/BackButton';

export const metadata: Metadata = {
  title: 'Living Root Bridges Trek — Nongriat, Meghalaya',
  description:
    "Trek 3,500 stone steps through rainforest to the iconic Double Decker Living Root Bridge — a 500-year-old bio-engineering marvel of the Khasi tribe. 4-day trek ",
  keywords: ["Living Root Bridges Meghalaya","Double Decker Root Bridge","Nongriat trek","Meghalaya trekking","Northeast India nature"],
  alternates: { canonical: 'https://www.redcoraltravels.com/destinations/living-root-bridges' },
  openGraph: {
    type: 'website', url: 'https://www.redcoraltravels.com/destinations/living-root-bridges',
    title: 'Living Root Bridges Trek - Nongriat, Meghalaya | Red Coral Travels',
    description: "Trek 3,500 stone steps through rainforest to the iconic Double Decker Living Root Bridge - a 500-year-old bio-engineering marvel of the Khasi tribe. 4-day trek .",
    images: [{ url: 'https://www.redcoraltravels.com/og-image.jpg', width: 1200, height: 630, alt: 'Living Root Bridges Meghalaya' }],
  },
  twitter: { card: 'summary_large_image', title: 'Living Root Bridges Trek - Meghalaya | Red Coral Travels', images: ['https://www.redcoraltravels.com/og-image.jpg'] },
};

const quickFacts = [
  { icon: '🌿', label: 'Highlight', value: 'Double Decker Root Bridge' },
  { icon: '📍', label: 'Location', value: 'Nongriat, Meghalaya' },
  { icon: '🥾', label: 'Grade', value: 'Challenging' },
  { icon: '📅', label: 'Best Season', value: 'Oct – Mar' },
  { icon: '⏱️', label: 'Duration', value: '4 Days / 3 Nights' },
  { icon: '🪨', label: 'Steps', value: '3,500+ stone steps' },
];

const itinerary = [
  {
    day: 1,
    title: 'Shillong → Cherrapunji → Tyrna Village',
    drive: '~60 km',
    stay: 'Tyrna Village guesthouse',
    desc: "Drive from Shillong through the misty highlands to Cherrapunji (Sohra) — the wettest place on Earth. Stop at Nohkalikai Falls viewpoint (India's tallest plunge waterfall) and Seven Sisters Falls before descending to Tyrna, the trailhead for Nongriat. Evening briefing and early dinner.",
    highlights: ['Nohkalikai Falls viewpoint', 'Seven Sisters Falls', 'Eco Park panorama', 'Tyrna village arrival'],
    meals: 'Dinner',
  },
  {
    day: 2,
    title: 'The Descent to Nongriat — Double Decker Root Bridge',
    drive: '~3 km trek (3,500 steps down)',
    stay: 'Nongriat village homestay',
    desc: "The main event. Begin the legendary descent through dense subtropical forest — 3,500 hand-cut stone steps winding between ferns, orchids, and waterfalls. At the bottom: the Double Decker Living Root Bridge. Cross it, explore the natural swimming pool beneath, and spend the night in a Khasi village homestay listening to the forest.",
    highlights: ['3,500-step rainforest descent', 'Double Decker Living Root Bridge', 'Natural swimming pool', 'Single-level Root Bridge (nearby)', 'Village homestay experience'],
    meals: 'Breakfast + Lunch + Dinner',
  },
  {
    day: 3,
    title: 'Rainbow Falls Trek + Village Life',
    drive: '~4 km trek',
    stay: 'Nongriat village homestay',
    desc: 'Full day in Nongriat. Morning trek to the stunning Rainbow Falls — a multi-tiered cascade named for the permanent rainbow formed in its mist. Afternoon at leisure: swim, photograph the bridges, or walk with your Khasi guide through the village learning about the 500-year cultivation tradition of the living roots.',
    highlights: ['Rainbow Falls (1.5 hr trek)', 'Permanent rainbow in the mist', 'Root bridge cultivation explanation', 'Traditional Khasi meal with host family'],
    meals: 'Breakfast + Lunch + Dinner',
  },
  {
    day: 4,
    title: 'Ascent → Cherrapunji → Shillong',
    drive: '3 km ascent + ~60 km drive',
    stay: 'Drop-off',
    desc: 'The climb back — harder than the descent, but equally beautiful in the morning light. Depart Tyrna and drive back through Cherrapunji for a final stop at Mawsmai Cave before returning to Shillong.',
    highlights: ['Morning ascent (3,500 steps up)', 'Final bridge crossing at sunrise light', 'Mawsmai Cave exploration', 'Return to Shillong'],
    meals: 'Breakfast + Lunch',
  },
];

const experiences = [
  { emoji: '🌉', title: 'The Double Decker Bridge', desc: "Two living root bridges stacked on top of each other — grown over 500 years by the Khasi people from the aerial roots of rubber fig trees. There is nothing else like it on Earth." },
  { emoji: '🏊', title: 'Natural Swimming Pool', desc: "A crystal-clear natural pool formed where the river meets the base of the bridge. After 3,500 steps, diving in is one of the great small pleasures of any trek in India." },
  { emoji: '🌈', title: 'Rainbow Falls', desc: "A powerful multi-tiered waterfall with a resident rainbow in its mist. The 1.5-hour trek from Nongriat through old-growth forest is itself the experience." },
  { emoji: '🏘️', title: 'Khasi Village Homestay', desc: "Spend two nights as a guest in Nongriat — a village accessible only on foot. Your host family's cooking, stories, and hospitality are the true heart of this trip." },
];

const practicalInfo = [
  { icon: '🦵', title: 'Fitness Required', body: '3,500 stone steps down (and back up) over steep, sometimes slippery terrain. Good knee strength and trekking poles are strongly recommended. Not suitable for those with knee problems.' },
  { icon: '🌧️', title: 'Monsoon Info', body: 'Oct–Mar is ideal — lush but drier. The bridges are beautiful year-round but trails are slippery in peak monsoon (Jun–Sep). We do run monsoon treks for the experienced.' },
  { icon: '📵', title: 'Off-grid Village', body: "Nongriat has no vehicle access and limited mobile signal. The homestay has electricity and running water, but this is genuinely off-the-grid living for two nights." },
  { icon: '👟', title: 'Footwear', body: 'Waterproof trekking boots with ankle support are essential. Flip-flops or sandals for the swimming pool. The steps are wet and mossy year-round.' },
];

export default function LivingRootBridgesPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        <Image src="/images/tours/root-bridge-main.jpg" alt="Living Root Bridges Meghalaya" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/30 to-black/60" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <BackButton />
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">Meghalaya</span>
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">🥾 Challenging Trek</span>
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">🌿 Bio-Engineering Marvel</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Living Root Bridges
            <span className="block text-lavender-veil text-2xl sm:text-3xl font-medium mt-2">
              500 Years of Living Architecture
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-8">
            Descend 3,500 stone steps through one of the world's last subtropical rainforests
            to reach the Double Decker Living Root Bridge — grown over centuries by the Khasi
            people and found nowhere else on Earth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book/living-root-bridges-trek" className="btn-primary bg-lavender-veil text-deep-navy hover:bg-secondary-dark">
              Book Trek 
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
                Where Roots Become Bridges
              </h2>
              <div className="space-y-4 text-graphite/75 leading-relaxed">
                <p>
                  Deep in the War-Khasi Hills of southern Meghalaya, the Khasi tribe discovered
                  centuries ago that the secondary roots of the <em>Ficus elastica</em> rubber fig
                  tree could be guided across rivers using betel nut trunks as channels — and over
                  decades would grow into living, self-strengthening bridges.
                </p>
                <p>
                  The result is extraordinary: bridges that are <strong className="text-deep-navy">alive</strong>,
                  that grow stronger each year, that self-repair when damaged, and that have spanned
                  the same rivers for 500 years. The Double Decker at Nongriat — two bridges stacked
                  vertically — is the most spectacular example, and accessing it requires one of
                  the most dramatic walks in all of India.
                </p>
                <p>
                  This is not just a trek — it is a visit to a living civilisation that learned to
                  work with nature rather than against it, centuries before the word "sustainability"
                  was coined.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: '🌉', stat: 'Bridge Age', sub: '500+ years growing', bg: 'bg-primary-100' },
                { emoji: '🌿', stat: 'Bridge Type', sub: 'Ficus elastica roots', bg: 'bg-secondary' },
                { emoji: '🪨', stat: 'Steps to Valley', sub: '3,500 stone steps', bg: 'bg-accent-light' },
                { emoji: '🌧️', stat: 'Annual Rainfall', sub: 'Wettest place on Earth', bg: 'bg-primary-50' },
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
            <span className="badge mb-4">What Awaits You</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy">Four Unmissable Moments</h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy">4-Day Trek Itinerary</h2>
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
                {['Village homestay (2 nights in Nongriat)', 'Guesthouse in Tyrna (1 night)', 'Local Khasi meals throughout', 'Trekking guide (Khasi local)', 'Entry fees', 'Transportation from Shillong'].map((item) => (
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
                {['Travel to Shillong', 'Personal trekking gear', 'Bottled water (carry a reusable bottle)', 'Tips for guide and host family', 'Travel insurance'].map((item) => (
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
          <div className="text-5xl mb-6">🌿</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Cross the Living Bridge?</h2>
          <p className="text-white/75 text-lg mb-3">4 Days · 3 Nights </p>
          <p className="text-white/60 text-sm mb-8">Max 8 guests · Khasi village homestay · Rainbow Falls included</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book/living-root-bridges-trek" className="btn-primary bg-lavender-veil text-deep-navy hover:bg-secondary-dark font-bold text-base">
              Book Now
            </Link>
            
          </div>
          <p className="mt-6 text-white/50 text-xs">Free cancellation up to 15 days before departure · Secure Stripe checkout</p>
        </div>
      </section>

    </div>
  );
}
