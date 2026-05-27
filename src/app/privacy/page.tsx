import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Privacy Policy | Red Coral Travels',
    description: 'Privacy Policy for Red Coral Travels — how we collect, use, and protect your personal information.',
    alternates: { canonical: 'https://www.redcoraltravels.com/privacy' },
};

const sections = [
    {
        title: '1. Information We Collect',
        content: [
            'When you submit a booking enquiry or contact form, we collect your name, email address, phone number, and travel preferences.',
            'When you browse our website, we may collect non-personal data such as browser type, device type, and pages visited through analytics tools.',
            'We do not collect payment card details directly — any payments are processed through secure third-party providers.',
        ],
    },
    {
        title: '2. How We Use Your Information',
        content: [
            'To respond to your travel enquiries and process booking requests.',
            'To send you tour confirmations, itineraries, and relevant travel information.',
            'To improve our website and tailor content to your interests.',
            'We will never sell or rent your personal information to third parties.',
        ],
    },
    {
        title: '3. Data Sharing',
        content: [
            'We share your information only with trusted partners directly involved in delivering your tour — such as local guides, hotels, and transport providers — and only to the extent necessary.',
            'We may disclose information if required by Indian law or government authorities.',
        ],
    },
    {
        title: '4. Cookies',
        content: [
            'Our website uses essential cookies to ensure proper functionality.',
            'Analytics cookies (e.g. Google Analytics) help us understand how visitors use our site. You may disable cookies in your browser settings, though some features may not function correctly.',
        ],
    },
    {
        title: '5. Data Security',
        content: [
            'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, or loss.',
            'Despite these measures, no internet transmission is completely secure, and we cannot guarantee absolute security.',
        ],
    },
    {
        title: '6. Data Retention',
        content: [
            'We retain your personal data for as long as necessary to fulfil the purposes described in this policy, or as required by law.',
            'You may request deletion of your data at any time by contacting us.',
        ],
    },
    {
        title: '7. Your Rights',
        content: [
            'You have the right to access, correct, or delete the personal data we hold about you.',
            'To exercise any of these rights, contact us at info@redcoraltravels.com.',
        ],
    },
    {
        title: '8. Changes to This Policy',
        content: [
            'We may update this Privacy Policy from time to time. The revised version will be posted on this page with an updated date.',
        ],
    },
    {
        title: '9. Contact Us',
        content: [
            'If you have any questions about this Privacy Policy, please contact us at info@redcoraltravels.com or call +91 91015 56092.',
        ],
    },
];

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

                <div className="mb-10">
                    <Link href="/" className="text-sm text-[#1B5E6B] hover:text-[#C8553D] transition-colors">
                        ← Back to Home
                    </Link>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-2">Privacy Policy</h1>
                    <p className="text-sm text-gray-500">Last updated: May 2026</p>
                    <p className="mt-4 text-gray-600">
                        Red Coral Travels ("we", "our", "us") is committed to protecting your privacy.
                        This policy explains how we handle your personal information when you use our website
                        or book a tour with us.
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
