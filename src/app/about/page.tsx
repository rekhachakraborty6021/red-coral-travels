import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Jajabor — our story, mission, and the passionate team behind Northeast India\'s most curated travel experiences.',
};

const stats = [
  { value: '500+', label: 'Happy Travellers' },
  { value: '8', label: 'Sister States Covered' },
  { value: '50+', label: 'Curated Tours' },
  { value: '5+', label: 'Years of Experience' },
];

const values = [
  {
    icon: '🏔️',
    title: 'Authentic Experiences',
    description: 'We go beyond tourist trails to connect you with the real Northeast — its people, culture, and untouched landscapes.',
  },
  {
    icon: '🤝',
    title: 'Community First',
    description: 'Every tour supports local guides, homestays, and artisans, ensuring your travel uplifts the communities you visit.',
  },
  {
    icon: '🌿',
    title: 'Responsible Travel',
    description: 'We design low-impact journeys that protect the fragile ecosystems and rich biodiversity of Northeast India.',
  },
  {
    icon: '💡',
    title: 'Expert Curation',
    description: 'Every itinerary is crafted by people who live and breathe the Northeast — no generic packages, ever.',
  },
];

const team = [
  {
    name: 'Arjun Bora',
    role: 'Founder & Lead Guide',
    origin: 'Guwahati, Assam',
    bio: 'Born and raised in Assam, Arjun has spent 15 years exploring every corner of the Northeast. His passion for storytelling and community-based travel sparked the creation of Jajabor.',
    emoji: '🧭',
  },
  {
    name: 'Priya Devi',
    role: 'Head of Experiences',
    origin: 'Shillong, Meghalaya',
    bio: 'Priya curates immersive cultural programmes and has deep connections with tribal communities across Meghalaya and Nagaland.',
    emoji: '🎨',
  },
  {
    name: 'Tenzing Lepcha',
    role: 'Adventure & Trekking Lead',
    origin: 'Gangtok, Sikkim',
    bio: 'A certified mountaineer with over 200 treks under his belt, Tenzing designs safe yet thrilling high-altitude adventures across Sikkim and Arunachal.',
    emoji: '⛰️',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #F2D7EE 0%, transparent 50%), radial-gradient(circle at 80% 20%, #D3BCC0 0%, transparent 40%)' }} />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <span className="badge mb-6 bg-white/10 text-lavender-veil border border-white/20">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Born from a Love of the{' '}
            <span className="text-lavender-veil">Northeast</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Jajabor — meaning "wanderer" in Assamese — was founded by travellers
            who fell in love with the hidden wonders of India's eight sister states
            and wanted to share them with the world.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-lavender-purple">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl sm:text-4xl font-bold">{s.value}</div>
                <div className="text-sm sm:text-base text-lavender-veil mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="badge mb-4">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy mb-6">
                Putting Northeast India on Every Traveller's Map
              </h2>
              <p className="text-graphite/80 text-lg leading-relaxed mb-6">
                The Northeast is home to some of the most extraordinary landscapes,
                cultures, and biodiversity on Earth — yet it remains largely
                undiscovered. We're on a mission to change that.
              </p>
              <p className="text-graphite/80 leading-relaxed">
                Through thoughtfully designed tours, deep local partnerships, and
                an unwavering commitment to responsible travel, we create journeys
                that transform both the traveller and the communities they visit.
              </p>
            </div>

            {/* Visual block */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: '🦏', label: 'Kaziranga Safaris', bg: 'bg-primary-100' },
                { emoji: '🌧️', label: 'Meghalaya Caves', bg: 'bg-secondary' },
                { emoji: '🏔️', label: 'Sikkim Treks', bg: 'bg-accent-light' },
                { emoji: '🎭', label: 'Tribal Festivals', bg: 'bg-primary-50' },
              ].map((item) => (
                <div key={item.label}
                  className={`${item.bg} rounded-2xl p-6 flex flex-col items-center justify-center gap-3 text-center aspect-square`}>
                  <span className="text-4xl">{item.emoji}</span>
                  <span className="text-sm font-semibold text-deep-navy">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4">What We Stand For</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card p-6">
                <div className="w-12 h-12 rounded-xl bg-lavender-veil flex items-center justify-center text-2xl mb-4">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-deep-navy mb-2">{v.title}</h3>
                <p className="text-sm text-graphite/70 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge mb-4">The People Behind Jajabor</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy">Meet Our Team</h2>
            <p className="text-graphite/70 mt-4 max-w-xl mx-auto">
              We're locals, explorers, and storytellers — united by a deep love for the Northeast.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="card p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-secondary flex items-center justify-center text-4xl mx-auto mb-4">
                  {member.emoji}
                </div>
                <h3 className="text-xl font-bold text-deep-navy">{member.name}</h3>
                <p className="text-lavender-purple font-medium text-sm mt-1">{member.role}</p>
                <p className="text-xs text-graphite/50 mt-1 mb-4">📍 {member.origin}</p>
                <p className="text-sm text-graphite/70 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-hero text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join hundreds of travellers who've discovered the magic of Northeast India with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours" className="btn-primary bg-lavender-veil text-deep-navy hover:bg-secondary-dark">
              Explore Tours
            </Link>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white/10">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
