export interface State {
    id: string;
    slug: string;
    name: string;
    tagline: string;
    description: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    image: string;
    highlights: string[];
    bestTime: string[];
    permitRequired: boolean;
    primaryThemes: string[];
}

export const states: State[] = [
    {
        id: '1',
        slug: 'assam',
        name: 'Assam',
        tagline: 'Land of the Red River and Blue Hills',
        description: 'The Gateway to Northeast India, home to one-horned rhinos, ancient temples, and the mighty Brahmaputra.',
        coordinates: { lat: 26.14, lng: 91.77 },
        image: '/images/states/assam.jpg',
        highlights: [
            'Kaziranga National Park',
            'Kamakhya Temple',
            'Majuli Island',
            'Tea Gardens',
        ],
        bestTime: ['oct', 'nov', 'dec', 'jan', 'feb', 'mar', 'apr'],
        permitRequired: false,
        primaryThemes: ['wildlife', 'spiritual', 'heritage', 'nature'],
    },
    {
        id: '2',
        slug: 'arunachal-pradesh',
        name: 'Arunachal Pradesh',
        tagline: 'The Land of the Rising Sun',
        description: 'India\'s most mysterious state with snow-capped peaks, ancient monasteries, and pristine tribal cultures.',
        coordinates: { lat: 27.06, lng: 93.37 },
        image: '/images/states/arunachal.jpg',
        highlights: [
            'Tawang Monastery',
            'Sela Pass',
            'Ziro Valley',
            'Namdapha National Park',
        ],
        bestTime: ['mar', 'apr', 'may', 'sep', 'oct', 'nov'],
        permitRequired: true,
        primaryThemes: ['buddhist', 'trekking', 'tribal', 'offbeat'],
    },
    {
        id: '3',
        slug: 'meghalaya',
        name: 'Meghalaya',
        tagline: 'The Abode of Clouds',
        description: 'The wettest place on Earth featuring living root bridges, crystal-clear rivers, and mysterious caves.',
        coordinates: { lat: 25.47, lng: 91.36 },
        image: '/images/states/meghalaya.jpg',
        highlights: [
            'Living Root Bridges',
            'Nohkalikai Falls',
            'Mawlynnong Village',
            'Dawki River',
        ],
        bestTime: ['oct', 'nov', 'dec', 'jan', 'feb', 'mar'],
        permitRequired: false,
        primaryThemes: ['trekking', 'waterfalls', 'nature', 'offbeat'],
    },
    {
        id: '4',
        slug: 'nagaland',
        name: 'Nagaland',
        tagline: 'Land of Festivals',
        description: 'Home to fierce warrior tribes, the legendary Hornbill Festival, and pristine mountain landscapes.',
        coordinates: { lat: 26.15, lng: 94.56 },
        image: '/images/states/nagaland.jpg',
        highlights: [
            'Hornbill Festival',
            'Dzukou Valley',
            'Kohima War Cemetery',
            'Konyak Villages',
        ],
        bestTime: ['oct', 'nov', 'dec', 'jan', 'feb'],
        permitRequired: true,
        primaryThemes: ['tribal', 'trekking', 'heritage', 'festival'],
    },
    {
        id: '5',
        slug: 'manipur',
        name: 'Manipur',
        tagline: 'The Jewel of India',
        description: 'Land of floating islands, classical dance, and the world\'s only floating national park.',
        coordinates: { lat: 24.66, lng: 93.90 },
        image: '/images/states/manipur.jpg',
        highlights: [
            'Loktak Lake',
            'Keibul Lamjao National Park',
            'Ima Keithel Market',
            'Kangla Fort',
        ],
        bestTime: ['oct', 'nov', 'dec', 'jan', 'feb', 'mar'],
        permitRequired: true,
        primaryThemes: ['waterfalls', 'wildlife', 'heritage', 'nature'],
    },
    {
        id: '6',
        slug: 'mizoram',
        name: 'Mizoram',
        tagline: 'Land of the Blue Mountains',
        description: 'Rolling hills, bamboo forests, and warm Mizo hospitality in India\'s most peaceful state.',
        coordinates: { lat: 23.16, lng: 92.93 },
        image: '/images/states/mizoram.jpg',
        highlights: [
            'Phawngpui Peak',
            'Vantawng Falls',
            'Reiek Tlang',
            'Champhai',
        ],
        bestTime: ['oct', 'nov', 'dec', 'jan', 'feb', 'mar'],
        permitRequired: true,
        primaryThemes: ['trekking', 'nature', 'offbeat', 'tribal'],
    },
    {
        id: '7',
        slug: 'tripura',
        name: 'Tripura',
        tagline: 'Land of Diversity',
        description: 'Ancient palaces, rock-cut sculptures, and lush forests in India\'s third-smallest state.',
        coordinates: { lat: 23.94, lng: 91.98 },
        image: '/images/states/tripura.jpg',
        highlights: [
            'Ujjayanta Palace',
            'Unakoti Rock Carvings',
            'Neermahal Palace',
            'Sepahijala Wildlife Sanctuary',
        ],
        bestTime: ['oct', 'nov', 'dec', 'jan', 'feb', 'mar'],
        permitRequired: false,
        primaryThemes: ['heritage', 'spiritual', 'wildlife', 'nature'],
    },
    {
        id: '8',
        slug: 'sikkim',
        name: 'Sikkim',
        tagline: 'The Land of Mystic Splendour',
        description: 'Himalayan peaks, Buddhist monasteries, and India\'s cleanest state with stunning mountain vistas.',
        coordinates: { lat: 27.53, lng: 88.51 },
        image: '/images/states/sikkim.jpg',
        highlights: [
            'Kanchenjunga',
            'Rumtek Monastery',
            'Tsomgo Lake',
            'Yuksom',
        ],
        bestTime: ['mar', 'apr', 'may', 'sep', 'oct', 'nov'],
        permitRequired: true,
        primaryThemes: ['buddhist', 'trekking', 'nature', 'spiritual'],
    },
];

export function getStateBySlug(slug: string): State | undefined {
    return states.find(s => s.slug === slug);
}

export function getStates(): State[] {
    return states;
}
