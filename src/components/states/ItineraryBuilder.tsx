'use client';

import { useState } from 'react';
import type { StateItinerary } from '@/lib/data/itineraries';

interface ItineraryBuilderProps {
    itinerary: StateItinerary;
    onBookItinerary: (details: BookingDetails) => void;
}

export interface BookingDetails {
    stateName: string;
    startDate: string;
    endDate: string;
    groupSize: number;
    budget: string;
    selectedInterests: string[];
    customRequests: string;
    days: { dayNum: number; title: string; slots: { time: string; text: string }[] }[];
}

export default function ItineraryBuilder({ itinerary, onBookItinerary }: ItineraryBuilderProps) {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [groupSize, setGroupSize] = useState(2);
    const [budget, setBudget] = useState('Standard');
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const [customRequests, setCustomRequests] = useState('');

    const toggleInterest = (label: string) => {
        setSelectedInterests(prev =>
            prev.includes(label) ? prev.filter(i => i !== label) : [...prev, label]
        );
    };

    const handleBook = () => {
        onBookItinerary({
            stateName: itinerary.stateName,
            startDate,
            endDate,
            groupSize,
            budget,
            selectedInterests,
            customRequests,
            days: itinerary.days,
        });
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">

            {/* Header */}
            <div className="text-center">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-3">
                    Customise Your Trip
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Build Your {itinerary.stateName} Itinerary
                </h2>
                <p className="text-gray-500 text-sm max-w-lg mx-auto">
                    Personalise the {itinerary.duration}-day sample itinerary below, then send it straight to our WhatsApp to get a custom quote.
                </p>
            </div>

            {/* Trip Details Form */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-base font-semibold text-gray-800 mb-4">Trip Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Travel Start Date</label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={e => setStartDate(e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Travel End Date</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={e => setEndDate(e.target.value)}
                            min={startDate || new Date().toISOString().split('T')[0]}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Group Size</label>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setGroupSize(Math.max(1, groupSize - 1))}
                                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 font-bold text-lg"
                            >−</button>
                            <span className="text-gray-900 font-semibold w-8 text-center">{groupSize}</span>
                            <button
                                onClick={() => setGroupSize(Math.min(30, groupSize + 1))}
                                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 font-bold text-lg"
                            >+</button>
                            <span className="text-xs text-gray-500">{groupSize === 1 ? 'person' : 'people'}</span>
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Budget Preference</label>
                        <div className="flex gap-2 flex-wrap">
                            {['Economic', 'Standard', 'Luxury'].map(b => (
                                <button
                                    key={b}
                                    onClick={() => setBudget(b)}
                                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${budget === b
                                        ? 'bg-emerald-700 text-white border-transparent'
                                        : 'bg-white text-gray-600 border-gray-300 hover:border-emerald-400'
                                        }`}
                                >
                                    {b === 'Economic' ? '💰 Economic' : b === 'Standard' ? '✨ Standard' : '👑 Luxury'}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Interest Focus */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-base font-semibold text-gray-800 mb-1">Trip Focus</h3>
                <p className="text-xs text-gray-500 mb-4">Select what matters most to you (optional — choose one or more):</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {itinerary.interests.map(interest => {
                        const isSelected = selectedInterests.includes(interest.label);
                        return (
                            <button
                                key={interest.label}
                                onClick={() => toggleInterest(interest.label)}
                                className={`p-3 rounded-xl border text-left transition-all ${isSelected
                                    ? 'bg-emerald-50 border-emerald-400 ring-1 ring-emerald-400'
                                    : 'bg-white border-gray-200 hover:border-emerald-300'
                                    }`}
                            >
                                <div className="text-xl mb-1">{interest.icon}</div>
                                <div className={`text-xs font-semibold mb-0.5 ${isSelected ? 'text-emerald-800' : 'text-gray-800'}`}>
                                    {interest.label}
                                </div>
                                <div className="text-xs text-gray-500 leading-tight">{interest.description}</div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Permit note if applicable */}
            {itinerary.permitNote && (
                <div className="flex gap-3 bg-amber-50 border border-amber-300 rounded-xl p-4">
                    <span className="text-xl flex-shrink-0">📋</span>
                    <div>
                        <p className="text-xs font-semibold text-amber-800 mb-1">Permit Required</p>
                        <p className="text-xs text-amber-700">{itinerary.permitNote}</p>
                    </div>
                </div>
            )}

            {/* Sample Itinerary Timeline */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <span className="text-xs font-semibold tracking-widest uppercase text-emerald-700">Sample Itinerary</span>
                        <h3 className="text-lg font-bold text-gray-900">{itinerary.duration} Days in {itinerary.stateName}</h3>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Best: {itinerary.bestSeason}</span>
                </div>

                <div className="space-y-0 relative">
                    {itinerary.days.map((day, idx) => (
                        <div key={day.dayNum} className="flex gap-4 relative">
                            {/* Vertical line */}
                            {idx < itinerary.days.length - 1 && (
                                <div className="absolute left-5 top-10 bottom-0 w-px bg-gray-200" />
                            )}
                            {/* Day circle */}
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-semibold z-10">
                                D{day.dayNum}
                            </div>
                            {/* Content */}
                            <div className="flex-1 pb-6">
                                <div className="flex items-center gap-2 mb-2 pt-2">
                                    <span className="text-xs font-medium tracking-wide uppercase text-emerald-700">Day {day.dayNum}</span>
                                    <span className="text-sm font-semibold text-gray-900">{day.title}</span>
                                </div>
                                <div className="space-y-2">
                                    {day.slots.map((slot, si) => (
                                        <div key={si} className="flex gap-3">
                                            <span className="text-xs font-semibold text-amber-600 min-w-[70px] pt-0.5 uppercase tracking-wide">
                                                {slot.time}
                                            </span>
                                            <p className="text-xs text-gray-600 leading-relaxed">{slot.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mt-2">
                    <p className="text-xs font-semibold text-emerald-800 mb-1">Trip Summary</p>
                    <p className="text-xs text-emerald-900 leading-relaxed">{itinerary.summary}</p>
                </div>
            </div>

            {/* Special Requests */}
            <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Special Requests / Notes <span className="text-xs text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea
                    value={customRequests}
                    onChange={e => setCustomRequests(e.target.value)}
                    placeholder="E.g. We need a vegetarian meal plan, we have a senior citizen in the group, we want a luxury homestay in Tawang..."
                    rows={3}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                />
            </div>

            {/* Book Button */}
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center pt-2">
                <button
                    onClick={handleBook}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl text-base shadow-lg hover:shadow-xl transition-all"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Book This Itinerary on WhatsApp
                </button>
                <p className="text-xs text-gray-400 text-center sm:text-left">
                    We&apos;ll reply within 30 minutes to confirm your trip
                </p>
            </div>

        </div>
    );
}
