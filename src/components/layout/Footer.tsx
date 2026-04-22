import Link from 'next/link';

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
                                <span className="text-xl font-bold">Jajabor</span>
                                <span className="text-xs text-lavender-veil">Northeast India</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Discover the hidden gems of Northeast India with curated
                            travel experiences across eight sister states.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3 mt-4">
                            {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                                <a
                                    key={social}
                                    href={`https://${social}.com`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-lavender-purple
                           flex items-center justify-center transition-all duration-200
                           hover:scale-110"
                                    aria-label={social}
                                >
                                    <span className="text-sm">📱</span>
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
                            © {currentYear} Jajabor. All rights reserved.
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
