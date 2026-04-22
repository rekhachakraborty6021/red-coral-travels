'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'All Tours', href: '/tours' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-thistle/20">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                            🌍
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-deep-navy">
                                Jajabor
                            </span>
                            <span className="text-xs text-lavender-purple font-medium">
                                Northeast India
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-graphite hover:text-lavender-purple font-medium transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lavender-purple group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/tours"
                            className="px-6 py-2.5 bg-lavender-purple text-white rounded-lg font-semibold hover:bg-primary-600 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
                        >
                            Explore Tours
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="md:hidden p-2 rounded-lg hover:bg-lavender-veil active:bg-secondary-dark transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <XMarkIcon className="h-6 w-6 text-lavender-purple" />
                        ) : (
                            <Bars3Icon className="h-6 w-6 text-lavender-purple" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-thistle/20 animate-slide-down">
                        <div className="flex flex-col gap-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="px-4 py-3 rounded-lg hover:bg-lavender-veil active:bg-secondary-dark font-medium text-graphite hover:text-lavender-purple transition-all"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/tours"
                                className="mt-2 px-4 py-3 bg-lavender-purple text-white text-center rounded-lg font-semibold hover:bg-primary-600 active:scale-95 transition-all"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Explore Tours
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
