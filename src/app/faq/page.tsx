'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = [
  {
    label: 'Booking & Payment',
    icon: '💳',
    faqs: [
      {
        q: 'How do I book a tour?',
        a: 'Browse our tours, click "Book Now" on any tour page, fill in your travel details, and complete payment securely via Stripe. You\'ll receive a confirmation email instantly.',
      },
      {
        q: 'What payment methods are accepted?',
        a: 'We accept all major credit/debit cards (Visa, Mastercard, Amex), UPI, and net banking — all processed securely through Stripe.',
      },
      {
        q: 'Can I pay in instalments?',
        a: 'Yes! For tours above ₹15,000 we offer a 30% advance at booking and the balance 7 days before departure. Contact us to set this up.',
      },
      {
        q: 'Is my payment secure?',
        a: 'Absolutely. All payments are processed by Stripe, a PCI-DSS Level 1 certified provider. We never store your card details.',
      },
    ],
  },
  {
    label: 'Cancellation & Refunds',
    icon: '🔄',
    faqs: [
      {
        q: 'What is your cancellation policy?',
        a: 'Cancellations made 15+ days before departure receive a full refund. 7–14 days: 50% refund. Under 7 days: no refund. All cancellations must be submitted in writing.',
      },
      {
        q: 'How long do refunds take?',
        a: 'Refunds are processed within 5–7 business days and credited to your original payment method.',
      },
      {
        q: 'Can I reschedule my tour instead of cancelling?',
        a: 'Yes — you can reschedule once at no charge up to 10 days before departure, subject to availability.',
      },
    ],
  },
  {
    label: 'Tour Experience',
    icon: '🧭',
    faqs: [
      {
        q: 'Are your tours suitable for solo travellers?',
        a: 'Absolutely. Our group tours are welcoming to solo travellers, and we can also arrange fully private customised itineraries.',
      },
      {
        q: 'What is the average group size?',
        a: 'Our group tours have a maximum of 12 participants to ensure a personal, high-quality experience with our guides.',
      },
      {
        q: 'Do I need prior trekking experience?',
        a: 'Each tour lists a difficulty rating. Most cultural and wildlife tours need no prior experience. Trekking tours specify fitness requirements clearly on the tour page.',
      },
      {
        q: 'Are meals included?',
        a: 'Meal inclusions vary by tour and are listed on each tour page. Most multi-day tours include breakfast and dinner, giving you freedom for lunches.',
      },
    ],
  },
  {
    label: 'Travel & Permits',
    icon: '🪪',
    faqs: [
      {
        q: 'Do I need a special permit to visit Northeast India?',
        a: 'Some states (Arunachal Pradesh, Nagaland, Mizoram, Manipur) require an Inner Line Permit (ILP) or Protected Area Permit (PAP). We handle all permit applications on your behalf.',
      },
      {
        q: 'What documents should I carry?',
        a: 'A valid government-issued photo ID (Aadhaar, passport, or voter card) is mandatory. Foreign nationals must carry a valid passport and visa at all times.',
      },
      {
        q: 'What is the best time to visit Northeast India?',
        a: 'October to April is ideal for most destinations. For Kaziranga, November–April is best. Monsoon (June–September) is spectacular in Meghalaya but challenging for trekking.',
      },
    ],
  },
  {
    label: 'Customisation & Groups',
    icon: '✨',
    faqs: [
      {
        q: 'Can I customise an itinerary for my family or group?',
        a: 'Yes! We specialise in bespoke private tours. Share your dates, interests, and budget via our Contact page and we\'ll craft a personalised itinerary within 24 hours.',
      },
      {
        q: 'Do you offer corporate or incentive travel?',
        a: 'We do. We\'ve organised team offsites and incentive trips for groups of 10–100. Contact us with your requirements for a custom quote.',
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-thistle/30 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-deep-navy group-hover:text-lavender-purple transition-colors">
          {q}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full bg-lavender-veil flex items-center justify-center text-lavender-purple font-bold transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {open && (
        <p className="pb-5 text-graphite/70 leading-relaxed text-sm pr-10">
          {a}
        </p>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-hero text-white py-16 sm:py-24 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <span className="badge bg-white/10 text-lavender-veil border border-white/20 mb-6">Help Centre</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto">
            Everything you need to know before your Northeast India adventure.
            Can't find an answer?{' '}
            <Link href="/contact" className="text-lavender-veil underline underline-offset-2 hover:text-white transition-colors">
              Just ask us.
            </Link>
          </p>
        </div>
      </section>

      {/* Category Tabs + Content */}
      <section className="py-12 sm:py-16 bg-primary-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  activeCategory === i
                    ? 'bg-lavender-purple text-white border-lavender-purple shadow-md'
                    : 'bg-white text-graphite border-thistle/40 hover:border-lavender-purple hover:text-lavender-purple'
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white rounded-2xl shadow-sm border border-thistle/20 px-6 sm:px-8">
            {categories[activeCategory].faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lavender-veil text-3xl mb-6">
            💬
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-deep-navy mb-4">
            Still Have Questions?
          </h2>
          <p className="text-graphite/70 mb-8">
            Our travel experts are available Monday–Saturday, 9 AM – 7 PM IST.
            We typically respond within a few hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Send Us a Message
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
              className="btn-secondary">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
