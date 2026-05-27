import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Terms of Service | Red Coral Travels',
    description: 'Terms and conditions for booking tours and using the Red Coral Travels website.',
    alternates: { canonical: 'https://www.redcoraltravels.com/terms' },
};

const sections = [
    {
        title: '1. Acceptance of Terms',
        content: [
            'By accessing our website or submitting a booking enquiry, you agree to be bound by these Terms of Service.',
            'If you do not agree to these terms, please do not use our services.',
        ],
    },
    {
        title: '2. Booking Enquiries',
        content: [
            'Submitting a booking form is an enquiry, not a confirmed booking. Your booking is confirmed only after you receive a written confirmation from Red Coral Travels and pay the required deposit.',
            'We reserve the right to decline any booking at our discretion.',
            'All prices quoted are in Indian Rupees (INR) and are per person unless stated otherwise.',
        ],
    },
    {
        title: '3. Payments & Deposits',
        content: [
            'A deposit of 25% of the total tour cost is required to confirm your booking.',
            'The remaining balance is due 30 days before the tour departure date.',
            'For bookings made within 30 days of departure, full payment is required at the time of booking.',
        ],
    },
    {
        title: '4. Cancellation Policy',
        content: [
            'Cancellations made 30 or more days before departure: full refund of deposit.',
            'Cancellations made 15–29 days before departure: 50% of total tour cost charged.',
            'Cancellations made less than 15 days before departure: no refund.',
            'Red Coral Travels reserves the right to cancel or modify tours due to unforeseen circumstances (e.g. natural disasters, political unrest). In such cases, a full refund or alternative tour will be offered.',
        ],
    },
    {
        title: '5. Travel Insurance',
        content: [
            'We strongly recommend that all travellers obtain comprehensive travel insurance covering medical emergencies, trip cancellation, and loss of belongings.',
            'Red Coral Travels is not liable for costs arising from the absence of travel insurance.',
        ],
    },
    {
        title: '6. Health & Fitness',
        content: [
            'Certain tours involve trekking, high altitudes, or physically demanding activities. You are responsible for ensuring you are medically fit for the tour you book.',
            'Please disclose any medical conditions at the time of booking.',
        ],
    },
    {
        title: '7. Liability',
        content: [
            'Red Coral Travels acts as an organiser and is not liable for personal injury, loss, or damage caused by third-party service providers (hotels, transport operators, guides).',
            'Our liability is limited to the total amount paid for the tour.',
            'We are not responsible for delays or changes caused by weather, natural events, or government restrictions.',
        ],
    },
    {
        title: '8. Itinerary Changes',
        content: [
            'Itineraries are subject to change due to weather conditions, road closures, or other unforeseen circumstances.',
            'We will always endeavour to provide the best possible alternative arrangements.',
        ],
    },
    {
        title: '9. Intellectual Property',
        content: [
            'All content on this website — including text, images, logos, and itineraries — is the property of Red Coral Travels and may not be reproduced without written permission.',
        ],
    },
    {
        title: '10. Governing Law',
        content: [
            'These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Guwahati, Assam.',
        ],
    },
    {
        title: '11. Contact',
        content: [
            'For any questions regarding these terms, contact us at info@redcoraltravels.com or +91 91015 56092.',
        ],
    },
];

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

                <div className="mb-10">
                    <Link href="/" className="text-sm text-[#1B5E6B] hover:text-[#C8553D] transition-colors">
                        ← Back to Home
                    </Link>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-2">Terms of Service</h1>
                    <p className="text-sm text-gray-500">Last updated: May 2026</p>
                    <p className="mt-4 text-gray-600">
                        Please read these Terms of Service carefully before booking a tour or using the
                        Red Coral Travels website. These terms constitute a legally binding agreement between
                        you and Red Coral Travels.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-100">
                    {sections.map((section) => (
                        <div key={section.title} className="p-6 sm:p-8">
                            <h2 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h2>
                            <ul className="space-y-2">
                                {section.content.map((item, i) => (
                                    <li key={i} className="text-gray-600 text-sm leading-relaxed flex gap-2">
                                        <span className="text-[#C8553D] mt-1 flex-shrink-0">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <p className="text-center text-sm text-gray-400 mt-8">
                    © {new Date().getFullYear()} Red Coral Travels. All rights reserved.
                </p>
            </div>
        </div>
    );
}
