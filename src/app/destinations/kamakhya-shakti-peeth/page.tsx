import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BackButton from '@/components/ui/BackButton';

export const metadata: Metadata = {
  title: 'Kamakhya Shakti Peeth Pilgrimage — Guwahati, Assam',
  description:
    "Journey to one of India's most powerful Shakti Peethas. Experience Tantric rituals, riverside aartis, and the spiritual heart of Assam. 3-day pilgrimage ",
  keywords: ["Kamakhya Temple Guwahati","Kamakhya Shakti Peeth","Assam pilgrimage tour","Guwahati spiritual tour","Northeast India temples"],
  alternates: { canonical: 'https://www.redcoraltravels.com/destinations/kamakhya-shakti-peeth' },
  openGraph: {
    type: 'website', url: 'https://www.redcoraltravels.com/destinations/kamakhya-shakti-peeth',
    title: 'Kamakhya Shakti Peeth Pilgrimage - Guwahati, Assam | Red Coral Travels',
    description: "Journey to one of India's most powerful Shakti Peethas. Experience Tantric rituals, riverside aartis, and the spiritual heart of Assam. 3-day pilgrimage.",
    images: [{ url: 'https://www.redcoraltravels.com/og-image.jpg', width: 1200, height: 630, alt: 'Kamakhya Temple Guwahati' }],
  },
  twitter: { card: 'summary_large_image', title: 'Kamakhya Shakti Peeth - Assam | Red Coral Travels', images: ['https://www.redcoraltravels.com/og-image.jpg'] },
};

const quickFacts = [
  { icon: '🛕', label: 'Type', value: 'Pilgrimage Tour' },
  { icon: '📍', label: 'Location', value: 'Guwahati & Hajo, Assam' },
  { icon: '🧭', label: 'Grade', value: 'Easy' },
  { icon: '📅', label: 'Best Season', value: 'Oct – Apr' },
  { icon: '⏱️', label: 'Duration', value: '3 Days / 2 Nights' },
  { icon: '👨‍👩‍👧', label: 'Suitable For', value: 'Families & Solo' },
];

const itinerary = [
  {
    day: 1,
    title: 'Arrival in Guwahati → Kamakhya Temple',
    drive: 'Local',
    stay: 'Guwahati',
    desc: 'Arrive in Guwahati and check in. Afternoon visit to the Kamakhya Temple on Nilachal Hill — one of the 51 Shakti Peethas and the most powerful centre of Tantric worship in India. Witness the evening aarti as butter lamps illuminate the ancient stone sanctum. Dinner at a local dhaba known for traditional Assamese cuisine.',
    highlights: ['Kamakhya Temple darshan', 'Evening aarti on Nilachal Hill', 'Tantric iconography guided tour', 'Assamese thali dinner'],
    meals: 'Dinner',
  },
  {
    day: 2,
    title: 'Navagraha Temple → Umananda → Hajo',
    drive: '~50 km',
    stay: 'Guwahati',
    desc: 'Morning visit to the Navagraha Temple (Nine Planets) atop Chitrachal Hill, unique in India for its nine Shiva lingas representing the celestial bodies. Take a ferry to the Umananda Temple — perched on a tiny island in the Brahmaputra, considered the smallest inhabited river island in the world. Afternoon drive to Hajo, a rare site of Hindu, Buddhist, and Muslim convergence.',
    highlights: ['Navagraha Temple — Nine Planets', 'Ferry to Umananda Island Temple', 'Hajo — Hayagriva Madhava Temple', 'Poa Mecca mosque (Muslim pilgrims)'],
    meals: 'Breakfast + Dinner',
  },
  {
    day: 3,
    title: 'Brahmaputra Morning Aarti → Departure',
    drive: 'Local',
    stay: 'Drop-off',
    desc: 'Rise before dawn for a boat ride on the Brahmaputra at sunrise — the most serene hour in Guwahati. Return for a final Kamakhya Temple visit at the quieter morning hour, then check out and transfer to airport or railway station.',
    highlights: ['Sunrise Brahmaputra boat ride', 'Morning Kamakhya darshan (less crowded)', 'Prasad and farewell blessings', 'Airport / station drop-off'],
    meals: 'Breakfast',
  },
];

const experiences = [
  { emoji: '🔥', title: 'Living Tantric Tradition', desc: "Kamakhya is not a museum — it is the living epicentre of Shakta Tantra. The rituals performed here date back over 1,500 years and are found nowhere else in India." },
  { emoji: '🌊', title: 'Brahmaputra at Dusk', desc: "Watch the sky turn gold over the world's most powerful river from a small boat at dusk. The evening aarti reflections on the Brahmaputra are a sight of profound beauty." },
  { emoji: '🏝️', title: "World's Smallest River Island", desc: "Umananda — 'Island of Shiva' — sits in the middle of the Brahmaputra. Accessible only by ferry, the temple and resident golden langurs make it utterly otherworldly." },
  { emoji: '☯️', title: 'Three Faiths at Hajo', desc: "At Hajo, a Hindu temple, a Buddhist temple claiming a connection to the Buddha's enlightenment, and a mosque revered as a minor Mecca stand within walking distance of each other." },
];

const practicalInfo = [
  { icon: '👟', title: 'Remove Footwear', body: 'All temples require footwear removal before entry. Wear socks and slip-on shoes. Designated storage is available at all major temples.' },
  { icon: '👗', title: 'Dress Code', body: 'Modest, full-coverage clothing is required at all sites. Shoulders and knees should be covered. Bright colours are welcome — traditional attire is appreciated.' },
  { icon: '📸', title: 'Photography', body: "Photography is restricted inside the Kamakhya sanctum. The outer courtyards, Brahmaputra ghats, and Umananda island are excellent for photography." },
  { icon: '🚢', title: 'Ferry to Umananda', body: 'The Umananda ferry runs from Kachari Ghat. The 10-minute crossing is included in your package. The island also has a small population of golden langurs.' },
];

export default function KamakhyaShaktiPeethPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        <Image src="/images/tours/kamakhya-main.jpg" alt="Kamakhya Temple Guwahati" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/30 to-black/60" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <BackButton />
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">Assam</span>
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">🛕 Shakti Peeth</span>
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">☯️ Spiritual Journey</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Kamakhya Shakti Peeth
            <span className="block text-lavender-veil text-2xl sm:text-3xl font-medium mt-2">
              Tantric Heart of Assam
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-8">
            One of the 51 Shakti Peethas and the supreme centre of Tantric worship in India.
            A pilgrimage that takes you from the Brahmaputra riverbank to a tiny island temple,
            through ancient aarti smoke and the living faith of Assam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book/kamakhya-shakti-peeth-circuit" className="btn-primary bg-lavender-veil text-deep-navy hover:bg-secondary-dark">
              Book Pilgrimage 
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
                Where the Divine Feminine Reigns
              </h2>
              <div className="space-y-4 text-graphite/75 leading-relaxed">
                <p>
                  Perched on Nilachal Hill above Guwahati, the Kamakhya Temple is one of the oldest
                  and most revered Shakti Peethas in the Hindu world. According to legend, it marks
                  the spot where the <em>yoni</em> (womb) of the goddess Sati fell to Earth —
                  making it the supreme seat of the Divine Feminine and a magnet for Tantric
                  practitioners, pilgrims, and scholars from across the globe.
                </p>
                <p>
                  Unlike the grand temple complexes of South India, Kamakhya has a raw,
                  ancient energy. Its stone sanctum dates to the 8th century (rebuilt in the 17th),
                  and the rituals — including the extraordinary annual <strong className="text-deep-navy">Ambubachi Mela</strong> — have
                  continued unbroken for over a millennium.
                </p>
                <p>
                  Our pilgrimage weaves together Kamakhya, the Brahmaputra ghats, the island
                  temple of Umananda, and the extraordinary tri-faith site of Hajo — a complete
                  immersion in the spiritual geography of Assam.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: '🛕', stat: 'Shakti Peethas', sub: 'One of 51 in India', bg: 'bg-secondary' },
                { emoji: '📜', stat: 'Temple Age', sub: '8th century origins', bg: 'bg-primary-100' },
                { emoji: '🏝️', stat: 'Umananda', sub: "World's smallest river island", bg: 'bg-accent-light' },
                { emoji: '☯️', stat: 'Hajo', sub: '3 faiths, one hilltop', bg: 'bg-primary-50' },
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
            <span className="badge mb-4">Spiritual Encounters</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy">3-Day Itinerary</h2>
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
                    <span className="badge text-xs">🏨 {day.stay}</span>
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

          {/* Included / Excluded */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-6">
              <h3 className="font-bold text-lg text-deep-navy mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-lavender-purple font-bold">✓</span>
                Included
              </h3>
              <ul className="space-y-3">
                {['Hotel accommodation in Guwahati (2 nights)', 'All meals (breakfast + dinner daily)', 'Temple entry and VIP darshan', 'River ferry to Umananda', 'Experienced spiritual guide', 'All transportation within Guwahati & Hajo'].map((item) => (
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
                {['Travel to Guwahati', 'Personal offerings at temples', 'Lunch (free time to explore local eateries)', 'Tips for guide and driver', 'Travel insurance'].map((item) => (
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Begin Your Pilgrimage</h2>
          <p className="text-white/75 text-lg mb-3">3 Days · 2 Nights </p>
          <p className="text-white/60 text-sm mb-8">Max 20 guests · VIP darshan included · All temple fees covered</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book/kamakhya-shakti-peeth-circuit" className="btn-primary bg-lavender-veil text-deep-navy hover:bg-secondary-dark font-bold text-base">
              Book Now
            </Link>
            
          </div>
          <p className="mt-6 text-white/50 text-xs">Free cancellation up to 15 days before departure · Secure Stripe checkout</p>
        </div>
      </section>

    </div>
  );
}
