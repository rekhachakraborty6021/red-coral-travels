'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'All Tours', href: '/tours', icon: '🗺️' },
    { name: 'About', href: '/about', icon: '✦' },
    { name: 'Contact', href: '/contact', icon: '✉️' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="z-50">

            {/* Row 1 — Banner + Contact (scrolls away) */}
            <div className="bg-[#f5f0ee] border-b border-[#d4a898]/30 flex items-stretch">

                {/* Banner image — 70% width, full natural height, zero crop */}
                <Link href="/" className="block w-[70%]">
                    <Image
                        src="/header-banner.png"
                        alt="Red Coral Travels"
                        width={2816}
                        height={894}
                        priority
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </Link>

                {/* Contact info — remaining 30% */}
                <div className="hidden md:flex w-[30%] flex-col justify-center gap-3 px-6 lg:px-10 bg-[#f5f0ee]">
                    <a
                        href="tel:+919101556092"
                        className="flex items-center gap-2.5 text-[#1B5E6B] hover:text-[#C8553D] transition-colors group"
                    >
                        <span className="w-7 h-7 rounded-full bg-[#1B5E6B]/10 group-hover:bg-[#C8553D]/10 flex items-center justify-center transition-colors text-sm">📞</span>
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#C8553D]">Call Us</p>
                            <p className="text-sm font-bold">+91 91015 56092</p>
                        </div>
                    </a>
                    <a
                        href="mailto:redcoraltravels@gmail.com"
                        className="flex items-center gap-2.5 text-[#1B5E6B] hover:text-[#C8553D] transition-colors group"
                    >
                        <span className="w-7 h-7 rounded-full bg-[#1B5E6B]/10 group-hover:bg-[#C8553D]/10 flex items-center justify-center transition-colors text-sm">✉️</span>
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#C8553D]">Email Us</p>
                            <p className="text-sm font-bold">redcoraltravels@gmail.com</p>
                        </div>
                    </a>
                    <a
                        href="https://wa.me/919101556092"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#C8553D] hover:bg-[#E8735A] text-white text-xs font-bold px-4 py-1.5 rounded-full transition-colors shadow-sm"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L0 24l6.335-1.502A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.372l-.36-.213-3.728.883.935-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/></svg>
                        WhatsApp Us
                    </a>
                </div>
            </div>

            {/* Row 2 — Navigation (sticky) */}
            <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E8735A]/20 shadow-sm">
                <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-11 items-center justify-between md:justify-center md:gap-10">

                        <div className="hidden md:flex items-center gap-10">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center gap-1.5 text-[#1B5E6B] hover:text-[#C8553D] font-semibold text-sm uppercase tracking-wider transition-colors relative group"
                                >
                                    <span className="text-base">{item.icon}</span>
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C8553D] group-hover:w-full transition-all duration-300" />
                                </Link>
                            ))}
                        </div>

                        <div className="md:hidden flex items-center w-full justify-between">
                            <span className="text-xs font-semibold text-[#1B5E6B] uppercase tracking-wider">Menu</span>
                            <button
                                type="button"
                                className="p-2 rounded-lg hover:bg-[#E8735A]/10 transition-colors"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                {mobileMenuOpen
                                    ? <XMarkIcon className="h-6 w-6 text-[#C8553D]" />
                                    : <Bars3Icon className="h-6 w-6 text-[#1B5E6B]" />}
                            </button>
                        </div>
                    </div>

                    {mobileMenuOpen && (
                        <div className="md:hidden py-3 border-t border-[#E8735A]/20">
                            <div className="flex flex-col gap-1">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#E8735A]/10 font-semibold text-[#1B5E6B] hover:text-[#C8553D] transition-all"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span>{item.icon}</span>
                                        {item.name}
                                    </Link>
                                ))}
                                {/* Mobile contact */}
                                <div className="flex gap-4 px-4 py-3 border-t border-[#E8735A]/10 mt-1">
                                    <a href="tel:+919" className="text-xs text-[#1B5E6B] font-semibold flex items-center gap-1">📞 +91 99999 99999</a>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
}
