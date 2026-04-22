export interface Tour {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    price: number;
    duration: {
        days: number;
        nights: number;
    };

    // UPDATED: Change from single category to state
    state: 'assam' | 'arunachal-pradesh' | 'meghalaya' | 'nagaland' | 'manipur' | 'mizoram' | 'tripura' | 'sikkim';

    // NEW: Multiple theme tags
    themes: string[]; // e.g., ['wildlife', 'safari', 'nature']

    // NEW: Specific activity tags
    activities: string[]; // e.g., ['trekking', 'camping', 'photography']

    // NEW: Difficulty and season
    difficulty: 'easy' | 'moderate' | 'challenging' | 'expert';
    bestSeason: string[]; // e.g., ['oct', 'nov', 'dec', 'jan', 'feb']

    // NEW: Special attributes
    attributes: {
        permitRequired: boolean;
        highAltitude: boolean;
        familyFriendly: boolean;
        offbeat: boolean;
        festivalBased: boolean;
        wheelchairAccessible: boolean;
    };

    destination: string;
    highlights: string[];
    included: string[];
    excluded: string[];
    images: {
        main: string;
        gallery: string[];
    };
    maxGroupSize: number;
    availableFrom: string; // ISO date
    availableTo: string;   // ISO date
    detailsUrl?: string;   // override for dedicated destination pages
    featured?: boolean;    // show in homepage featured section
}

export interface TourFilters {
    themes?: string[];
    state?: string;
    difficulty?: string;
    maxPrice?: number;
}

export interface Theme {
    id: string;
    slug: string;
    title: string;
    tagline: string;
    description: string;
    icon: string;
    image: string;
    color: string;
    tags: string[];
}
