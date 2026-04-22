'use client';

import { useState, useEffect, useRef } from 'react';
import type { StateItinerary } from '@/lib/data/itineraries';
import ItineraryBuilder, { BookingDetails } from './ItineraryBuilder';

interface StateDetailTabsProps {
    slug: string;
    stateName: string;
    itinerary: StateItinerary | null;
    whatsappNumber?: string;
}

type TabId = 'guide' | 'build' | 'book';

function buildWhatsAppMessage(details: BookingDetails): string {
    const lines: string[] = [
        `🌿 *Trip Booking Request — ${details.stateName}*`,
        '',
        `📅 *Travel Dates:* ${details.startDate && details.endDate
            ? `${formatDate(details.startDate)} → ${formatDate(details.endDate)}`
            : details.startDate ? `From ${formatDate(details.startDate)}` : 'Dates flexible'
        }`,
        `👥 *Group Size:* ${details.groupSize} ${details.groupSize === 1 ? 'person' : 'people'}`,
        `💰 *Budget:* ${details.budget}`,
    ];

    if (details.selectedInterests.length > 0) {
        lines.push(`🎯 *Trip Focus:* ${details.selectedInterests.join(', ')}`);
    }

    lines.push('', `📍 *${details.days.length}-Day Itinerary:*`);
    lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    details.days.forEach(day => {
        lines.push('', `🗓️ *Day ${day.dayNum}: ${day.title}*`);
        day.slots.forEach(slot => {
            const icon = slot.time.toLowerCase().includes('morning') ? '🌅'
                : slot.time.toLowerCase().includes('afternoon') ? '🌞'
                    : slot.time.toLowerCase().includes('evening') ? '🌙'
                        : slot.time.toLowerCase().includes('am') ? '⏰'
                            : '📍';
            lines.push(`${icon} _${slot.time}:_ ${slot.text.substring(0, 120)}${slot.text.length > 120 ? '...' : ''}`);
        });
    });

    lines.push('', '━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    if (details.customRequests.trim()) {
        lines.push('', `📝 *Special Requests:*`, details.customRequests.trim());
    }

    lines.push('', 'Please help me confirm and book this trip! 🙏');

    return lines.join('\n');
}

function formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function StateDetailTabs({
    slug,
    stateName,
    itinerary,
    whatsappNumber = '919876543210',
}: StateDetailTabsProps) {
    const [activeTab, setActiveTab] = useState<TabId>('guide');
    const [iframeHeight, setIframeHeight] = useState(800);
    const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // Listen for height messages from the iframe
    useEffect(() => {
        const handler = (e: MessageEvent) => {
            if (e.data?.type === 'guide-height' && typeof e.data.height === 'number') {
                setIframeHeight(Math.max(600, e.data.height + 40));
            }
        };
        window.addEventListener('message', handler);
        return () => window.removeEventListener('message', handler);
    }, []);

    const handleBookItinerary = (details: BookingDetails) => {
        setBookingDetails(details);
        setActiveTab('book');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const openWhatsApp = () => {
        if (!bookingDetails) return;
        const message = buildWhatsAppMessage(bookingDetails);
        const encoded = encodeURIComponent(message);
        window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank');
    };

    const tabs = [
        { id: 'guide' as TabId, label: 'Destination Guide', icon: '🗺️' },
        { id: 'build' as TabId, label: 'Build My Itinerary', icon: '📝' },
        { id: 'book' as TabId, label: 'Book This Itinerary', icon: '💬' },
    ];

    return (
        <div className="w-full">
            {/* Tab Navigation */}
            <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex gap-0 overflow-x-auto scrollbar-hide">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold border-b-2 whitespace-nowrap transition-all ${activeTab === tab.id
                                    ? 'border-emerald-600 text-emerald-700'
                                    : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
                                    }`}
                            >
                                <span>{tab.icon}</span>
                                <span>{tab.label}</span>
                                {tab.id === 'book' && bookingDetails && (
                                    <span className="ml-1 w-2 h-2 bg-green-500 rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-screen">

                {/* GUIDE TAB */}
                {activeTab === 'guide' && (
                    <div className="w-full">
                        <iframe
                            ref={iframeRef}
                            src={`/api/state-guide/${slug}`}
                            title={`${stateName} Travel Guide`}
                            className="w-full border-0"
                            style={{ height: `${iframeHeight}px` }}
                            onLoad={() => {
                                // Attempt to read height directly (same-origin)
                                try {
                                    const doc = iframeRef.current?.contentDocument;
                                    if (doc) {
                                        const h = doc.body.scrollHeight;
                                        setIframeHeight(Math.max(600, h + 40));
                                    }
                                } catch { /* cross-origin fallback */ }
                            }}
                        />
                        {/* Quick action bar below guide */}
                        <div className="bg-gray-50 border-t border-gray-200 py-6 px-4">
                            <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 items-center justify-center">
                                <button
                                    onClick={() => setActiveTab('build')}
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-xl text-sm transition-all"
                                >
                                    📝 Build My Itinerary
                                </button>
                                <button
                                    onClick={() => setActiveTab('book')}
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl text-sm transition-all"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Book on WhatsApp
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* BUILD TAB */}
                {activeTab === 'build' && itinerary && (
                    <ItineraryBuilder
                        itinerary={itinerary}
                        onBookItinerary={handleBookItinerary}
                    />
                )}

                {/* No itinerary fallback */}
                {activeTab === 'build' && !itinerary && (
                    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
                        <p className="text-4xl mb-4">🗺️</p>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Itinerary Coming Soon</h3>
                        <p className="text-gray-500 text-sm mb-6">
                            Our travel experts are crafting the perfect {stateName} itinerary. Contact us on WhatsApp and we'll build one just for you.
                        </p>
                        <button
                            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello! I'd like to plan a trip to ${stateName}. Can you help me build a custom itinerary?`)}`, '_blank')}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold text-sm hover:bg-green-700 transition-all"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Chat on WhatsApp
                        </button>
                    </div>
                )}

                {/* BOOK TAB */}
                {activeTab === 'book' && (
                    <div className="max-w-2xl mx-auto px-4 py-10">
                        {bookingDetails ? (
                            <BookingPreview
                                details={bookingDetails}
                                onConfirm={openWhatsApp}
                                onEdit={() => setActiveTab('build')}
                                whatsappNumber={whatsappNumber}
                            />
                        ) : (
                            <QuickBookForm
                                stateName={stateName}
                                itinerary={itinerary}
                                whatsappNumber={whatsappNumber}
                                onBuildFirst={() => setActiveTab('build')}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

/* ── BookingPreview ─────────────────────────────── */
function BookingPreview({
    details,
    onConfirm,
    onEdit,
    whatsappNumber,
}: {
    details: BookingDetails;
    onConfirm: () => void;
    onEdit: () => void;
    whatsappNumber: string;
}) {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Your {details.stateName} Trip</h2>
                <p className="text-gray-500 text-sm mt-1">Review your itinerary then send it to our team on WhatsApp</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-gray-50 rounded-xl p-3 text-center border border-gray-200">
                    <div className="text-lg mb-1">📅</div>
                    <div className="text-xs text-gray-500">Dates</div>
                    <div className="text-xs font-semibold text-gray-900 mt-0.5">
                        {details.startDate ? formatDate(details.startDate) : 'Flexible'}
                    </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center border border-gray-200">
                    <div className="text-lg mb-1">👥</div>
                    <div className="text-xs text-gray-500">Group</div>
                    <div className="text-xs font-semibold text-gray-900 mt-0.5">{details.groupSize} {details.groupSize === 1 ? 'person' : 'people'}</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center border border-gray-200">
                    <div className="text-lg mb-1">💰</div>
                    <div className="text-xs text-gray-500">Budget</div>
                    <div className="text-xs font-semibold text-gray-900 mt-0.5">{details.budget}</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center border border-gray-200">
                    <div className="text-lg mb-1">🗓️</div>
                    <div className="text-xs text-gray-500">Duration</div>
                    <div className="text-xs font-semibold text-gray-900 mt-0.5">{details.days.length} Days</div>
                </div>
            </div>

            {/* Interests */}
            {details.selectedInterests.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {details.selectedInterests.map(i => (
                        <span key={i} className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200">
                            {i}
                        </span>
                    ))}
                </div>
            )}

            {/* Itinerary preview */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 space-y-3 max-h-80 overflow-y-auto">
                {details.days.map(day => (
                    <div key={day.dayNum}>
                        <p className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-1">
                            Day {day.dayNum}: {day.title}
                        </p>
                        {day.slots.map((slot, si) => (
                            <p key={si} className="text-xs text-gray-600 mb-0.5">
                                <span className="font-medium text-gray-700">{slot.time}: </span>
                                {slot.text.substring(0, 100)}{slot.text.length > 100 ? '…' : ''}
                            </p>
                        ))}
                    </div>
                ))}
            </div>

            {/* Special requests preview */}
            {details.customRequests && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                    <p className="text-xs font-semibold text-amber-800 mb-1">Special Requests:</p>
                    <p className="text-xs text-amber-700">{details.customRequests}</p>
                </div>
            )}

            {/* Actions */}
            <div className="space-y-3">
                <button
                    onClick={onConfirm}
                    className="w-full flex items-center justify-center gap-3 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl text-base shadow-lg transition-all"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send to WhatsApp → Get My Quote
                </button>
                <button
                    onClick={onEdit}
                    className="w-full py-3 border border-gray-300 text-gray-700 font-medium rounded-xl text-sm hover:bg-gray-50 transition-all"
                >
                    ← Edit My Itinerary
                </button>
            </div>

            <p className="text-center text-xs text-gray-400">
                Your details will be sent to our travel experts via WhatsApp. We typically respond within 30 minutes.
            </p>
        </div>
    );
}

/* ── QuickBookForm ──────────────────────────────── */
function QuickBookForm({
    stateName,
    itinerary,
    whatsappNumber,
    onBuildFirst,
}: {
    stateName: string;
    itinerary: StateItinerary | null;
    whatsappNumber: string;
    onBuildFirst: () => void;
}) {
    const [name, setName] = useState('');
    const [dates, setDates] = useState('');
    const [people, setPeople] = useState('2');
    const [message, setMessage] = useState('');

    const handleQuickBook = () => {
        const duration = itinerary ? `${itinerary.duration}-day ` : '';
        const text = [
            `🌿 *Quick Booking Enquiry — ${stateName}*`,
            '',
            name ? `👤 Name: ${name}` : '',
            dates ? `📅 Preferred Dates: ${dates}` : '',
            `👥 Group Size: ${people} people`,
            '',
            `I'm interested in the ${duration}${stateName} itinerary.`,
            message ? `\n📝 Message: ${message}` : '',
            '',
            'Please share details, pricing, and availability. 🙏',
        ].filter(Boolean).join('\n');

        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="space-y-6">
            <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Book {stateName} on WhatsApp</h2>
                <p className="text-gray-500 text-sm mt-1">Fill in your details and our team will craft a custom plan for you</p>
            </div>

            {/* Tip to build first */}
            {itinerary && (
                <div
                    onClick={onBuildFirst}
                    className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4 cursor-pointer hover:bg-emerald-100 transition-all"
                >
                    <span className="text-2xl">📝</span>
                    <div>
                        <p className="text-sm font-semibold text-emerald-800">Build a detailed itinerary first →</p>
                        <p className="text-xs text-emerald-600">Customise the {itinerary.duration}-day plan with your dates, group size and interests, then send it straight to WhatsApp</p>
                    </div>
                </div>
            )}

            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Your Name (optional)</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>
                <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Preferred Travel Dates</label>
                    <input
                        type="text"
                        value={dates}
                        onChange={e => setDates(e.target.value)}
                        placeholder="e.g. Dec 20–27, 2025 or Flexible"
                        className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>
                <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Number of People</label>
                    <input
                        type="number"
                        min={1}
                        max={50}
                        value={people}
                        onChange={e => setPeople(e.target.value)}
                        className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>
                <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Message (optional)</label>
                    <textarea
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Any specific requirements, preferences, or questions..."
                        rows={3}
                        className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                    />
                </div>
            </div>

            <button
                onClick={handleQuickBook}
                className="w-full flex items-center justify-center gap-3 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl text-base shadow-lg transition-all"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send Enquiry on WhatsApp
            </button>

            <p className="text-center text-xs text-gray-400">
                Opens WhatsApp with your message pre-filled. We reply within 30 minutes during business hours.
            </p>
        </div>
    );
}
