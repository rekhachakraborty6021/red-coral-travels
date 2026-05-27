import Link from 'next/link';

const socialLinks = [
    {
        name: 'Facebook', href: 'https://facebook.com',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
    },
    {
        name: 'Instagram', href: 'https://instagram.com',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    },
    {
        name: 'YouTube', href: 'https://youtube.com',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
    },
    {
        name: 'Twitter / X', href: 'https://twitter.com',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'About Us', href: '/about' },
        { name: 'All Tours', href: '/tours' },
        { name: 'Contact', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
    ];

    const states = [
        { name: 'Assam', href: '/state/assam' },
        { name: 'Meghalaya', href: '/state/meghalaya' },
        { name: 'Arunachal Pradesh', href: '/state/arunachal-pradesh' },
        { name: 'Sikkim', href: '/state/sikkim' },
    ];

    const experiences = [
        { name: 'Wildlife Safaris', href: '/tours?theme=wildlife-safaris' },
        { name: 'Trekking Adventures', href: '/tours?theme=trekking-adventures' },
        { name: 'Buddhist Circuit', href: '/tours?theme=buddhist-circuit' },
        { name: 'Tribal Immersion', href: '/tours?theme=tribal-immersion' },
    ];

    return (
        <footer className="bg-deep-navy text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-primary 
                            flex items-center justify-center text-xl">
                                🌍
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold">Red Coral Travels</span>
                                <span className="text-xs text-lavender-veil">Northeast India</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Discover the hidden gems of Northeast India with curated
                            travel experiences across eight sister states.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3 mt-4">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.name}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C8553D] flex items-center justify-center transition-all duration-200 hover:scale-110"
                                    aria-label={s.name}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-lavender-veil">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-300 hover:text-lavender-veil
                             transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular States */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-lavender-veil">
                            Popular States
                        </h3>
                        <ul className="space-y-2">
                            {states.map((state) => (
                                <li key={state.name}>
                                    <Link
                                        href={state.href}
                                        className="text-sm text-gray-300 hover:text-lavender-veil
                             transition-colors"
                                    >
                                        {state.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Experiences */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-lavender-veil">
                            Experiences
                        </h3>
                        <ul className="space-y-2">
                            {experiences.map((exp) => (
                                <li key={exp.name}>
                                    <Link
                                        href={exp.href}
                                        className="text-sm text-gray-300 hover:text-lavender-veil
                             transition-colors"
                                    >
                                        {exp.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center 
                        gap-4 text-sm text-gray-400">
                        <p>
                            © {currentYear} Red Coral Travels. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="hover:text-lavender-veil transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-lavender-veil transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
