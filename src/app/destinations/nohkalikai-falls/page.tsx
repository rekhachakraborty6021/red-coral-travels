import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BackButton from '@/components/ui/BackButton';

export const metadata: Metadata = {
  title: "Nohkalikai Falls & Cave Exploration — Cherrapunji, Meghalaya",
  description:
    "Stand at the edge of India's tallest plunge waterfall and explore ancient limestone caves in the wettest place on Earth. 3-day tour ",
  keywords: ["Nohkalikai Falls Cherrapunji","tallest waterfall India","Meghalaya waterfalls tour","Cherrapunji tour package"],
  alternates: { canonical: 'https://www.redcoraltravels.com/destinations/nohkalikai-falls' },
  openGraph: {
    type: 'website', url: 'https://www.redcoraltravels.com/destinations/nohkalikai-falls',
    title: 'Nohkalikai Falls & Cave Exploration - Cherrapunji, Meghalaya | Red Coral Travels',
    description: "Stand at the edge of India's tallest plunge waterfall and explore ancient limestone caves in the wettest place on Earth. 3-day tour .",
    images: [{ url: 'https://www.redcoraltravels.com/og-image.jpg', width: 1200, height: 630, alt: 'Nohkalikai Falls Cherrapunji' }],
  },
  twitter: { card: 'summary_large_image', title: 'Nohkalikai Falls - Meghalaya | Red Coral Travels', images: ['https://www.redcoraltravels.com/og-image.jpg'] },
};

const quickFacts = [
  { icon: '💧', label: 'Waterfall Drop', value: '340 metres' },
  { icon: '📍', label: 'Location', value: 'Cherrapunji, Meghalaya' },
  { icon: '🧭', label: 'Grade', value: 'Moderate' },
  { icon: '📅', label: 'Best Season', value: 'Oct – Mar' },
  { icon: '⏱️', label: 'Duration', value: '3 Days / 2 Nights' },
  { icon: '🌧️', label: 'Rainfall', value: 'Wettest Place on Earth' },
];

const itinerary = [
  {
    day: 1,
    title: 'Shillong → Cherrapunji',
    drive: '~55 km / 1.5 hrs',
    stay: 'Cherrapunji',
    desc: "Drive from Shillong through the rolling highlands of the East Khasi Hills. Stop at the Eco Park viewpoint above Cherrapunji for a sweeping panorama of the Bangladesh plains 1,400 metres below — on clear days you can see the Bay of Bengal. Check in and visit the Nohkalikai Falls viewpoint in the late afternoon as the light softens — the 340-metre plunge into the emerald pool below is most dramatic at this hour.",
    highlights: ['Eco Park panorama viewpoint', 'Nohkalikai Falls first view', 'Bangladesh plains vista', 'Check-in and dinner'],
    meals: 'Dinner',
  },
  {
    day: 2,
    title: 'Cave Exploration + Seven Sisters Falls',
    drive: 'Local',
    stay: 'Cherrapunji',
    desc: "Full exploration day. Morning at Mawsmai Cave — a cathedral-like limestone cavern with stalactites, stalagmites, and narrow passages that open into vast chambers. Your guide will explain the geology of these 65-million-year-old formations. Afternoon at Arwah Cave, less visited and more atmospheric, with fossilised marine shells embedded in the walls — evidence that these hills were once an ocean floor. End the day at Seven Sisters Falls, a seven-segmented waterfall that flows only in the wetter months.",
    highlights: ['Mawsmai Cave — cathedral chambers', 'Arwah Cave — fossilised ocean floor', 'Seven Sisters Falls', 'Theriang viewpoint at dusk'],
    meals: 'Breakfast + Lunch + Dinner',
  },
  {
    day: 3,
    title: 'Dainthlen Falls + Shillong Return',
    drive: '~55 km',
    stay: 'Drop-off',
    desc: "Morning visit to Dainthlen Falls — a wide, powerful cascade steeped in Khasi legend (the site where a giant serpent was slain). Stop at the Cherrapunji market for local honey, orange produce, and dried Khasi chillies before driving back to Shillong.",
    highlights: ['Dainthlen Falls & Khasi legend', 'Cherrapunji local market', 'Local honey & orange produce', 'Return to Shillong'],
    meals: 'Breakfast + Lunch',
  },
];

const experiences = [
  {
    emoji: '💧',
    title: "India's Tallest Plunge Waterfall",
    desc: "Nohkalikai drops 340 metres in a single unbroken plunge into a vivid turquoise-green pool. Named after a tragic Khasi legend, it is one of the most photographed natural sites in all of Northeast India.",
  },
  {
    emoji: '🪨',
    title: '65-Million-Year-Old Caves',
    desc: "The limestone caves of Cherrapunji were formed from ancient coral reefs. Arwah Cave still has marine fossils in its walls — a reminder that the Meghalaya plateau was once beneath the Tethys Sea.",
  },
  {
    emoji: '🌧️',
    title: 'The Wettest Place on Earth',
    desc: "Cherrapunji (Sohra) and nearby Mawsynram hold world rainfall records. The landscape this creates — constant cloud, luminous green hills, waterfalls appearing from every crevice — is unlike anywhere else.",
  },
  {
    emoji: '🌅',
    title: 'Plains of Bangladesh at Your Feet',
    desc: "From the Cherrapunji plateau, the land drops 1,400 metres to the flat Bangladesh floodplains. The scale of the escarpment — especially at sunset — is one of the great natural spectacles in India.",
  },
];

const practicalInfo = [
  {
    icon: '📸',
    title: 'Best Light',
    body: "Nohkalikai is most dramatic in the afternoon when the light enters the gorge. The falls flow strongest post-monsoon (Oct–Nov). In winter (Dec–Feb) they reduce but the skies are clear for the Bangladesh plains view.",
  },
  {
    icon: '🕯️',
    title: 'Cave Preparation',
    body: 'Mawsmai has paths lit with electric lights. Arwah is darker and more adventurous — wear closed shoes and bring a small torch. Both are fully safe with our guide.',
  },
  {
    icon: '🌧️',
    title: 'Rain Gear',
    body: "Pack a waterproof jacket year-round. Even in the dry season (Oct–Mar), Cherrapunji receives more rain than most Indian cities. The mist and drizzle are part of the atmosphere.",
  },
  {
    icon: '🚗',
    title: 'Getting There',
    body: 'Shillong is the nearest hub (1.5 hrs). Our package includes pick-up and drop from Shillong. Most travellers fly into Guwahati and drive 3 hrs to Shillong the day before.',
  },
];

export default function NohkalaikaiFallsPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        <Image src="/images/tours/nohkalikai-main.jpg" alt="Nohkalikai Falls Cherrapunji" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/30 to-black/60" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <BackButton />
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">Meghalaya</span>
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">💧 340m Waterfall</span>
            <span className="badge bg-white/10 text-lavender-veil border border-white/20">🪨 Limestone Caves</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Nohkalikai Falls
            <span className="block text-lavender-veil text-2xl sm:text-3xl font-medium mt-2">
              Edge of the World, Cherrapunji
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-8">
            India's tallest plunge waterfall, 65-million-year-old limestone caves with
            fossilised ocean floors, and a plateau that drops 1,400 metres to the plains
            of Bangladesh. Cherrapunji is where the Earth shows off.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book/nohkalikai-caves-meghalaya" className="btn-primary bg-lavender-veil text-deep-navy hover:bg-secondary-dark">
              Book Tour
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
                Where Clouds Are Born
              </h2>
              <div className="space-y-4 text-graphite/75 leading-relaxed">
                <p>
                  Cherrapunji — or Sohra as the Khasi people call it — sits at 1,484 m on the
                  southern edge of the Meghalaya plateau, directly in the path of the Bay of Bengal
                  monsoon. For decades it held the record as the wettest place on Earth, receiving
                  over 11,000 mm of rain annually. The landscape this creates is extraordinary:
                  every cliff face has a waterfall, every valley is green to an almost unreal degree,
                  and the horizon to the south is a sheer drop to the Bangladeshi plains.
                </p>
                <p>
                  <strong className="text-deep-navy">Nohkalikai</strong> — at 340 metres — is India's
                  tallest plunge waterfall. It takes its name from a Khasi legend about a woman
                  named Likai who, consumed by grief, leapt from the cliff. The turquoise-green
                  pool at the base gets its colour from the high mineral content of the water
                  flowing through limestone.
                </p>
                <p>
                  Beneath the plateau, the same limestone has been carved by millions of years of
                  water into a vast cave system — including Mawsmai, the most accessible, and Arwah,
                  where fossil marine shells record the time these hills lay beneath an ancient sea.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: '💧', stat: 'Fall Height', sub: '340 m plunge', bg: 'bg-primary-100' },
                { emoji: '🌧️', stat: 'Annual Rain', sub: '11,000+ mm', bg: 'bg-secondary' },
                { emoji: '🪨', stat: 'Cave Age', sub: '65 million years', bg: 'bg-accent-light' },
                { emoji: '🌅', stat: 'Escarpment', sub: '1,400 m drop to plains', bg: 'bg-primary-50' },
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
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy">3-Day Itinerary</h2>
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
                {['Accommodation in Cherrapunji (2 nights)', 'All meals as per itinerary', 'Cave entry fees (Mawsmai + Arwah)', 'Transportation from Shillong', 'Guide for cave exploration', 'All viewpoint entry fees'].map((item) => (
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
                {['Travel to Shillong', 'Personal expenses', 'Photography fees (if applicable)', 'Tips for guide and driver', 'Travel insurance'].map((item) => (
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
          <div className="text-5xl mb-6">💧</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stand at the Edge of Nohkalikai</h2>
          <p className="text-white/75 text-lg mb-3">3 Days · 2 Nights </p>
          <p className="text-white/60 text-sm mb-8">Max 15 guests · No permit required · Both caves included</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book/nohkalikai-caves-meghalaya" className="btn-primary bg-lavender-veil text-deep-navy hover:bg-secondary-dark font-bold text-base">Book Now</Link>
            
          </div>
          <p className="mt-6 text-white/50 text-xs">Free cancellation up to 15 days before departure · Secure Stripe checkout</p>
        </div>
      </section>

    </div>
  );
}
