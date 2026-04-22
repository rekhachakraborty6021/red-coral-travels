'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import TourCard from '@/components/tours/TourCard';
import { getTours } from '@/lib/data/tours';
import { themes } from '@/lib/data/themes';
import { TourFilters } from '@/types';

const STATES = [
    { id: 'all', name: 'All States' },
    { id: 'assam', name: 'Assam' },
    { id: 'arunachal-pradesh', name: 'Arunachal Pradesh' },
    { id: 'meghalaya', name: 'Meghalaya' },
    { id: 'nagaland', name: 'Nagaland' },
    { id: 'manipur', name: 'Manipur' },
    { id: 'mizoram', name: 'Mizoram' },
    { id: 'tripura', name: 'Tripura' },
    { id: 'sikkim', name: 'Sikkim' },
];

const DIFFICULTY_LEVELS = [
    { id: 'all', name: 'All Levels' },
    { id: 'easy', name: 'Easy' },
    { id: 'moderate', name: 'Moderate' },
    { id: 'challenging', name: 'Challenging' },
    { id: 'expert', name: 'Expert' },
];

export default function ToursPage() {
    const searchParams = useSearchParams();
    const themeFromUrl = searchParams.get('theme');
    const stateFromUrl = searchParams.get('state');

    const [selectedThemes, setSelectedThemes] = useState<string[]>(
        themeFromUrl ? [themeFromUrl] : []
    );
    const [selectedState, setSelectedState] = useState(stateFromUrl || 'all');
    const [selectedDifficulty, setSelectedDifficulty] = useState('all');
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
    const [showFilters, setShowFilters] = useState(false);

    const allTours = getTours();

    // Apply filters
    const filteredTours = useMemo(() => {
        const filters: TourFilters = {
            themes: selectedThemes.length > 0 ? selectedThemes : undefined,
            state: selectedState !== 'all' ? selectedState : undefined,
            difficulty: selectedDifficulty !== 'all' ? selectedDifficulty : undefined,
            maxPrice: priceRange[1] < 50000 ? priceRange[1] : undefined,
        };

        return getTours(filters);
    }, [selectedThemes, selectedState, selectedDifficulty, priceRange]);

    const toggleTheme = (themeSlug: string) => {
        setSelectedThemes(prev =>
            prev.includes(themeSlug)
                ? prev.filter(t => t !== themeSlug)
                : [...prev, themeSlug]
        );
    };

    const clearAllFilters = () => {
        setSelectedThemes([]);
        setSelectedState('all');
        setSelectedDifficulty('all');
        setPriceRange([0, 50000]);
    };

    const hasActiveFilters = selectedThemes.length > 0 ||
        selectedState !== 'all' ||
        selectedDifficulty !== 'all' ||
        priceRange[1] < 50000;

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                        All Tours
                    </h1>
                    <p className="text-gray-600">
                        {filteredTours.length} {filteredTours.length === 1 ? 'tour' : 'tours'} found
                        {selectedThemes.length > 0 && (
                            <span className="ml-2">
                                in {selectedThemes.map(t =>
                                    themes.find(th => th.slug === t)?.title
                                ).join(', ')}
                            </span>
                        )}
                    </p>
                </div>

                {/* Mobile Filter Toggle */}
                <div className="lg:hidden mb-6">
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="w-full flex items-center justify-between px-4 py-3 
                     bg-white rounded-lg shadow-sm border border-gray-200"
                    >
                        <span className="font-medium text-gray-900">
                            {showFilters ? 'Hide Filters' : 'Show Filters'}
                            {hasActiveFilters && (
                                <span className="ml-2 px-2 py-0.5 bg-blue-600 text-white 
                               rounded-full text-xs">
                                    Active
                                </span>
                            )}
                        </span>
                        <svg
                            className={`w-5 h-5 transition-transform ${showFilters ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Filters Sidebar */}
                    <aside className={`
            lg:w-80 lg:flex-shrink-0
            ${showFilters ? 'block' : 'hidden lg:block'}
          `}>
                        <div className="bg-white rounded-xl shadow-sm p-6 sticky top-20 
                          space-y-6">

                            {/* Theme Filters (PRIMARY) */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">
                                    Experience Themes
                                </h3>
                                <div className="space-y-2">
                                    {themes.map((theme) => (
                                        <label
                                            key={theme.id}
                                            className="flex items-start gap-3 cursor-pointer 
                               hover:bg-gray-50 p-2 rounded-lg transition-colors"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedThemes.includes(theme.slug)}
                                                onChange={() => toggleTheme(theme.slug)}
                                                className="mt-1 w-5 h-5 text-blue-600 rounded 
                                 focus:ring-2 focus:ring-blue-500"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xl">{theme.icon}</span>
                                                    <span className="font-medium text-gray-900">
                                                        {theme.title}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-gray-600 mt-0.5">
                                                    {theme.tagline}
                                                </p>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="border-t pt-6">
                                {/* State Filter (SECONDARY) */}
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                                        State
                                    </label>
                                    <select
                                        value={selectedState}
                                        onChange={(e) => setSelectedState(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        {STATES.map((state) => (
                                            <option key={state.id} value={state.id}>
                                                {state.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Difficulty Filter */}
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                                        Difficulty Level
                                    </label>
                                    <select
                                        value={selectedDifficulty}
                                        onChange={(e) => setSelectedDifficulty(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        {DIFFICULTY_LEVELS.map((level) => (
                                            <option key={level.id} value={level.id}>
                                                {level.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Price Range */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                                        Price Range
                                    </label>
                                    <div className="space-y-3">
                                        <input
                                            type="range"
                                            min="0"
                                            max="50000"
                                            step="1000"
                                            value={priceRange[1]}
                                            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                            className="w-full"
                                        />
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>₹0</span>
                                            <span className="font-semibold text-gray-900">
                                                ₹{priceRange[1].toLocaleString('en-IN')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Clear Filters */}
                            {hasActiveFilters && (
                                <button
                                    onClick={clearAllFilters}
                                    className="w-full px-4 py-2 text-sm font-medium text-red-600 
                           hover:bg-red-50 rounded-lg transition-colors"
                                >
                                    Clear All Filters
                                </button>
                            )}
                        </div>
                    </aside>

                    {/* Tours Grid */}
                    <div className="flex-1">
                        {filteredTours.length === 0 ? (
                            <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                                <div className="text-6xl mb-4">🔍</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    No tours found
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Try adjusting your filters to see more results
                                </p>
                                <button
                                    onClick={clearAllFilters}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg 
                           font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 
                            xl:grid-cols-3 gap-6">
                                {filteredTours.map((tour) => (
                                    <TourCard key={tour.id} tour={tour} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
