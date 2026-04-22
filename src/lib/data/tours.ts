import { Tour, TourFilters } from '@/types';
import { themes } from './themes';

export const tours: Tour[] = [
    {
        id: '1',
        slug: 'kaziranga-rhino-safari',
        title: 'Kaziranga Rhino Safari',
        shortDescription: 'Encounter the mighty one-horned rhinoceros in their natural habitat',
        longDescription: 'Experience the thrill of spotting endangered one-horned rhinos, wild elephants, and Bengal tigers in UNESCO World Heritage Kaziranga National Park.',
        price: 12999,
        duration: { days: 3, nights: 2 },

        state: 'assam',
        themes: ['wildlife', 'safari', 'nature', 'photography'],
        activities: ['jeep-safari', 'elephant-safari', 'bird-watching'],
        difficulty: 'easy',
        bestSeason: ['nov', 'dec', 'jan', 'feb', 'mar', 'apr'],

        attributes: {
            permitRequired: false,
            highAltitude: false,
            familyFriendly: true,
            offbeat: false,
            festivalBased: false,
            wheelchairAccessible: false,
        },

        destination: 'Kaziranga National Park, Assam',
        highlights: [
            'Jeep safari through Central Range (best for rhinos)',
            'Elephant-back safari at dawn',
            'Bird watching - over 480 species',
            'Visit to nearby tea estates',
        ],
        included: [
            'Accommodation in eco-lodge',
            'All meals (breakfast, lunch, dinner)',
            'Safari permits and entry fees',
            'Expert naturalist guide',
            'Transportation from Guwahati',
        ],
        excluded: [
            'Flight tickets to Guwahati',
            'Personal expenses',
            'Camera fees (if applicable)',
            'Tips for guides and staff',
        ],
        images: {
            main: '/images/tours/kaziranga-main.jpg',
            gallery: [
                '/images/tours/kaziranga-1.jpg',
                '/images/tours/kaziranga-2.jpg',
                '/images/tours/kaziranga-3.jpg',
            ],
        },
        maxGroupSize: 12,
        availableFrom: '2025-10-01',
        availableTo: '2026-04-30',
        detailsUrl: '/destinations/kaziranga-rhino-safari',
        featured: true,
    },

    {
        id: '2',
        slug: 'tawang-monastery-circuit',
        title: 'Tawang Monastery & Sela Pass',
        shortDescription: 'Journey to India\'s largest monastery through snow-capped passes',
        longDescription: 'Visit the majestic 400-year-old Tawang Monastery, cross the breathtaking Sela Pass at 13,700 ft, and experience Tibetan Buddhism in the Himalayas.',
        price: 24999,
        duration: { days: 6, nights: 5 },

        state: 'arunachal-pradesh',
        themes: ['buddhist', 'monastery', 'spiritual', 'snow', 'himalayas'],
        activities: ['monastery-visit', 'high-altitude', 'photography', 'cultural'],
        difficulty: 'moderate',
        bestSeason: ['mar', 'apr', 'may', 'sep', 'oct', 'nov'],

        attributes: {
            permitRequired: true,
            highAltitude: true,
            familyFriendly: true,
            offbeat: false,
            festivalBased: false,
            wheelchairAccessible: false,
        },

        destination: 'Tawang, Arunachal Pradesh',
        highlights: [
            'Tawang Monastery - 2nd largest in world',
            'Sela Pass at 13,700 ft with frozen lake',
            'Urgelling Monastery - birthplace of 6th Dalai Lama',
            'Madhuri Lake (Sangetsar Lake)',
            'War Memorial at Tawang',
        ],
        included: [
            'Inner Line Permit assistance',
            'Accommodation in Tawang and Dirang',
            'All meals',
            'SUV transportation from Guwahati',
            'Entry fees to all monasteries',
            'Experienced driver cum guide',
        ],
        excluded: [
            'Flight tickets',
            'Personal expenses',
            'Tips',
            'Any meals not mentioned',
        ],
        images: {
            main: '/images/tours/tawang-main.jpg',
            gallery: [
                '/images/tours/tawang-1.jpg',
                '/images/tours/tawang-2.jpg',
                '/images/tours/tawang-3.jpg',
            ],
        },
        maxGroupSize: 8,
        availableFrom: '2025-03-01',
        availableTo: '2025-11-30',
        detailsUrl: '/destinations/tawang-monastery',
        featured: true,
    },

    {
        id: '3',
        slug: 'dzukou-valley-trek',
        title: 'Dzukou Valley Trek',
        shortDescription: 'Trek through the Valley of Flowers of Northeast India',
        longDescription: 'Experience the emerald rolling hills and endemic Dzukou Lily in this pristine valley at the Nagaland-Manipur border.',
        price: 8999,
        duration: { days: 3, nights: 2 },

        state: 'nagaland',
        themes: ['trekking', 'nature', 'valley', 'flowers', 'camping'],
        activities: ['trekking', 'camping', 'photography', 'nature-walk'],
        difficulty: 'moderate',
        bestSeason: ['jun', 'jul', 'aug', 'sep'],

        attributes: {
            permitRequired: true,
            highAltitude: true,
            familyFriendly: false,
            offbeat: true,
            festivalBased: false,
            wheelchairAccessible: false,
        },

        destination: 'Dzukou Valley, Nagaland-Manipur Border',
        highlights: [
            'Trek through dwarf bamboo forests',
            'Camp in the valley under stars',
            'See endemic Dzukou Lily (June-July)',
            'Panoramic views of rolling hills',
            'Visit to traditional Naga villages',
        ],
        included: [
            'Camping equipment (tents, sleeping bags)',
            'All meals during trek',
            'Experienced trekking guide',
            'Porter services',
            'Permit fees',
            'Transportation from Kohima',
        ],
        excluded: [
            'Travel to Kohima',
            'Personal trekking gear',
            'Insurance',
            'Tips for guides and porters',
        ],
        images: {
            main: '/images/tours/dzukou-main.jpg',
            gallery: [
                '/images/tours/dzukou-1.jpg',
                '/images/tours/dzukou-2.jpg',
                '/images/tours/dzukou-3.jpg',
            ],
        },
        maxGroupSize: 10,
        availableFrom: '2025-06-01',
        availableTo: '2025-09-30',
        detailsUrl: '/destinations/dzukou-valley',
        featured: true,
    },

    {
        id: '4',
        slug: 'living-root-bridges-trek',
        title: 'Living Root Bridges Trek',
        shortDescription: 'Trek to the iconic Double Decker Root Bridge through rainforest',
        longDescription: 'Descend 3,500 steps through dense tropical forest to reach the bio-engineering marvel of Khasi tribe - the living root bridges.',
        price: 9999,
        duration: { days: 4, nights: 3 },

        state: 'meghalaya',
        themes: ['trekking', 'nature', 'tribal', 'unique', 'bio-engineering'],
        activities: ['trekking', 'village-stay', 'photography', 'swimming'],
        difficulty: 'challenging',
        bestSeason: ['oct', 'nov', 'dec', 'jan', 'feb', 'mar'],

        attributes: {
            permitRequired: false,
            highAltitude: false,
            familyFriendly: false,
            offbeat: true,
            festivalBased: false,
            wheelchairAccessible: false,
        },

        destination: 'Nongriat Village, Meghalaya',
        highlights: [
            'Double Decker Living Root Bridge',
            'Natural swimming pool under bridge',
            '3,500+ stone steps descent',
            'Overnight in Khasi village',
            'Rainbow Falls trek',
        ],
        included: [
            'Village homestay accommodation',
            'Local meals (Khasi cuisine)',
            'Trekking guide',
            'Entry fees',
            'Transportation from Shillong',
        ],
        excluded: [
            'Travel to Shillong',
            'Personal trekking gear',
            'Bottled water',
            'Tips',
        ],
        images: {
            main: '/images/tours/root-bridge-main.jpg',
            gallery: [
                '/images/tours/root-bridge-1.jpg',
                '/images/tours/root-bridge-2.jpg',
                '/images/tours/root-bridge-3.jpg',
            ],
        },
        maxGroupSize: 8,
        availableFrom: '2025-10-01',
        availableTo: '2026-03-31',
        detailsUrl: '/destinations/living-root-bridges',
        featured: true,
    },

    {
        id: '5',
        slug: 'hornbill-festival-nagaland',
        title: 'Hornbill Festival Experience',
        shortDescription: 'Witness the Festival of Festivals with 16 Naga tribes',
        longDescription: 'Immerse yourself in Naga warrior culture, traditional dances, indigenous games, and authentic tribal cuisine at Asia\'s most colorful festival.',
        price: 18999,
        duration: { days: 5, nights: 4 },

        state: 'nagaland',
        themes: ['festival', 'tribal', 'culture', 'traditional', 'unique'],
        activities: ['festival', 'cultural-show', 'village-visit', 'handicraft-shopping'],
        difficulty: 'easy',
        bestSeason: ['dec'],

        attributes: {
            permitRequired: true,
            highAltitude: false,
            familyFriendly: true,
            offbeat: false,
            festivalBased: true,
            wheelchairAccessible: false,
        },

        destination: 'Kisama Heritage Village, Kohima, Nagaland',
        highlights: [
            'All 16 Naga tribes under one roof',
            'Traditional warrior dances and songs',
            'Naga wrestling and archery competitions',
            'Authentic tribal cuisine stalls',
            'Handicraft exhibition and market',
            'Rock concerts and cultural nights',
            'Visit to Mon village (Konyak headhunters)',
        ],
        included: [
            'Accommodation in Kohima',
            'Daily breakfast',
            'Festival entry passes (all days)',
            'ILP assistance',
            'Transportation to festival ground',
            'Day trip to Mon village',
        ],
        excluded: [
            'Airfare',
            'Lunch and dinner',
            'Shopping expenses',
            'Tips',
        ],
        images: {
            main: '/images/tours/hornbill-main.jpg',
            gallery: [
                '/images/tours/hornbill-1.jpg',
                '/images/tours/hornbill-2.jpg',
                '/images/tours/hornbill-3.jpg',
            ],
        },
        maxGroupSize: 15,
        availableFrom: '2025-12-01',
        availableTo: '2025-12-10',
        detailsUrl: '/destinations/hornbill-festival',
        featured: true,
    },

    {
        id: '6',
        slug: 'kamakhya-shakti-peeth-circuit',
        title: 'Kamakhya Shakti Peeth Pilgrimage',
        shortDescription: 'Sacred journey to the Tantric center of India',
        longDescription: 'Visit the most powerful Shakti Peeth, experience Tantric rituals, and explore the spiritual heart of Assam.',
        price: 7999,
        duration: { days: 3, nights: 2 },

        state: 'assam',
        themes: ['spiritual', 'pilgrimage', 'temple', 'shakti', 'hindu'],
        activities: ['temple-visit', 'ritual-participation', 'spiritual', 'cultural'],
        difficulty: 'easy',
        bestSeason: ['oct', 'nov', 'dec', 'jan', 'feb', 'mar', 'apr'],

        attributes: {
            permitRequired: false,
            highAltitude: false,
            familyFriendly: true,
            offbeat: false,
            festivalBased: false,
            wheelchairAccessible: false,
        },

        destination: 'Guwahati & Hajo, Assam',
        highlights: [
            'Kamakhya Temple (main Shakti Peeth)',
            'Navagraha Temple (Nine Planets)',
            'Umananda Temple (river island)',
            'Hajo - Hindu, Buddhist, Muslim convergence',
            'Brahmaputra evening aarti',
        ],
        included: [
            'Hotel accommodation in Guwahati',
            'All meals',
            'Temple entry and VIP darshan',
            'River ferry to Umananda',
            'Experienced spiritual guide',
            'Transportation',
        ],
        excluded: [
            'Travel to Guwahati',
            'Personal offerings at temples',
            'Tips',
        ],
        images: {
            main: '/images/tours/kamakhya-main.jpg',
            gallery: [
                '/images/tours/kamakhya-1.jpg',
                '/images/tours/kamakhya-2.jpg',
                '/images/tours/kamakhya-3.jpg',
            ],
        },
        maxGroupSize: 20,
        availableFrom: '2025-10-01',
        availableTo: '2026-04-30',
        detailsUrl: '/destinations/kamakhya-shakti-peeth',
        featured: true,
    },

    {
        id: '7',
        slug: 'majuli-island-cultural-tour',
        title: 'Majuli Island Cultural Immersion',
        shortDescription: 'Explore the world\'s largest river island and Vaishnavite culture',
        longDescription: 'Discover ancient Satras (monasteries), traditional mask-making, pottery villages, and unique tribal culture on the mighty Brahmaputra.',
        price: 10999,
        duration: { days: 4, nights: 3 },

        state: 'assam',
        themes: ['heritage', 'culture', 'spiritual', 'tribal', 'unique'],
        activities: ['cultural', 'village-visit', 'boat-ride', 'handicraft'],
        difficulty: 'easy',
        bestSeason: ['oct', 'nov', 'dec', 'jan', 'feb', 'mar'],

        attributes: {
            permitRequired: false,
            highAltitude: false,
            familyFriendly: true,
            offbeat: true,
            festivalBased: false,
            wheelchairAccessible: false,
        },

        destination: 'Majuli Island, Assam',
        highlights: [
            'Visit ancient Satras (Auniati, Kamalabari)',
            'Witness traditional mask-making',
            'Explore Mishing tribal villages',
            'Pottery village of Salmora',
            'Sunset boat ride on Brahmaputra',
        ],
        included: [
            'Accommodation in heritage guesthouse',
            'All meals',
            'Ferry tickets to/from island',
            'Bicycle rental for island exploration',
            'Cultural guide',
            'Transportation from Jorhat',
        ],
        excluded: [
            'Travel to Jorhat',
            'Personal expenses',
            'Handicraft purchases',
            'Tips',
        ],
        images: {
            main: '/images/tours/majuli-main.jpg',
            gallery: [
                '/images/tours/majuli-1.jpg',
                '/images/tours/majuli-2.jpg',
                '/images/tours/majuli-3.jpg',
            ],
        },
        maxGroupSize: 12,
        availableFrom: '2025-10-01',
        availableTo: '2026-03-31',
        detailsUrl: '/destinations/majuli-island',
        featured: true,
    },

    {
        id: '8',
        slug: 'ziro-music-festival',
        title: 'Ziro Music Festival & Apatani Culture',
        shortDescription: 'India\'s best outdoor music festival in a pristine valley',
        longDescription: 'Experience independent music in the stunning Ziro Valley while exploring unique Apatani tribal culture and rice field landscapes.',
        price: 16999,
        duration: { days: 5, nights: 4 },

        state: 'arunachal-pradesh',
        themes: ['festival', 'tribal', 'culture', 'music', 'nature'],
        activities: ['festival', 'village-visit', 'trekking', 'photography'],
        difficulty: 'easy',
        bestSeason: ['sep'],

        attributes: {
            permitRequired: true,
            highAltitude: false,
            familyFriendly: true,
            offbeat: true,
            festivalBased: true,
            wheelchairAccessible: false,
        },

        destination: 'Ziro Valley, Arunachal Pradesh',
        highlights: [
            'Ziro Music Festival (4 days)',
            'Apatani tribal villages',
            'Traditional nose plugs and facial tattoos',
            'Paddy-cum-fish farming fields',
            'Talley Valley Wildlife Sanctuary',
        ],
        included: [
            'Festival passes (all days)',
            'Camping accommodation at festival',
            'Breakfast and dinner',
            'Inner Line Permit assistance',
            'Village tours with guide',
            'Transportation from Itanagar',
        ],
        excluded: [
            'Airfare',
            'Lunch',
            'Personal expenses',
            'Tips',
        ],
        images: {
            main: '/images/tours/ziro-main.jpg',
            gallery: [
                '/images/tours/ziro-1.jpg',
                '/images/tours/ziro-2.jpg',
                '/images/tours/ziro-3.jpg',
            ],
        },
        maxGroupSize: 20,
        availableFrom: '2025-09-20',
        availableTo: '2025-09-30',
        detailsUrl: '/destinations/ziro-music-festival',
        featured: true,
    },

    {
        id: '9',
        slug: 'loktak-lake-floating-park',
        title: 'Loktak Lake & Keibul Lamjao',
        shortDescription: 'Visit the world\'s only floating national park',
        longDescription: 'Explore the unique floating islands (phumdis) of Loktak Lake and spot the endangered Sangai deer in Keibul Lamjao National Park.',
        price: 11999,
        duration: { days: 4, nights: 3 },

        state: 'manipur',
        themes: ['waterfalls', 'wildlife', 'nature', 'unique', 'photography'],
        activities: ['boat-ride', 'wildlife-spotting', 'photography', 'cultural'],
        difficulty: 'easy',
        bestSeason: ['oct', 'nov', 'dec', 'jan', 'feb', 'mar'],

        attributes: {
            permitRequired: true,
            highAltitude: false,
            familyFriendly: true,
            offbeat: true,
            festivalBased: false,
            wheelchairAccessible: false,
        },

        destination: 'Loktak Lake, Manipur',
        highlights: [
            'Keibul Lamjao - world\'s only floating national park',
            'Spot endangered Sangai deer',
            'Sendra Island viewpoint',
            'Floating phumdis exploration',
            'Visit to Ima Keithel (women\'s market)',
        ],
        included: [
            'Accommodation in Imphal',
            'All meals',
            'Boat rides on Loktak Lake',
            'Park entry fees',
            'ILP assistance',
            'Transportation',
        ],
        excluded: [
            'Airfare to Imphal',
            'Personal expenses',
            'Shopping',
            'Tips',
        ],
        images: {
            main: '/images/tours/loktak-main.jpg',
            gallery: [
                '/images/tours/loktak-1.jpg',
                '/images/tours/loktak-2.jpg',
                '/images/tours/loktak-3.jpg',
            ],
        },
        maxGroupSize: 12,
        availableFrom: '2025-10-01',
        availableTo: '2026-03-31',
        detailsUrl: '/destinations/loktak-lake',
        featured: true,
    },

    {
        id: '10',
        slug: 'nohkalikai-caves-meghalaya',
        title: 'Nohkalikai Falls & Cave Exploration',
        shortDescription: 'Marvel at India\'s tallest plunge waterfall and mysterious caves',
        longDescription: 'Visit the stunning Nohkalikai Falls, explore Mawsmai and Arwah caves, and experience the wettest place on Earth - Cherrapunji.',
        price: 9499,
        duration: { days: 3, nights: 2 },

        state: 'meghalaya',
        themes: ['waterfalls', 'nature', 'adventure', 'photography', 'unique'],
        activities: ['waterfall-visit', 'cave-exploration', 'photography', 'trekking'],
        difficulty: 'moderate',
        bestSeason: ['oct', 'nov', 'dec', 'jan', 'feb', 'mar'],

        attributes: {
            permitRequired: false,
            highAltitude: false,
            familyFriendly: true,
            offbeat: false,
            festivalBased: false,
            wheelchairAccessible: false,
        },

        destination: 'Cherrapunji, Meghalaya',
        highlights: [
            'Nohkalikai Falls - India\'s tallest plunge waterfall',
            'Mawsmai Cave exploration',
            'Seven Sisters Falls viewpoint',
            'Arwah Cave with fossils',
            'Eco Park with valley views',
        ],
        included: [
            'Accommodation in Cherrapunji',
            'All meals',
            'Cave entry fees',
            'Transportation from Shillong',
            'Guide for cave exploration',
        ],
        excluded: [
            'Travel to Shillong',
            'Personal expenses',
            'Photography fees',
            'Tips',
        ],
        images: {
            main: '/images/tours/nohkalikai-main.jpg',
            gallery: [
                '/images/tours/nohkalikai-1.jpg',
                '/images/tours/nohkalikai-2.jpg',
                '/images/tours/nohkalikai-3.jpg',
            ],
        },
        maxGroupSize: 15,
        availableFrom: '2025-10-01',
        availableTo: '2026-03-31',
        detailsUrl: '/destinations/nohkalikai-falls',
        featured: true,
    },
];

export function getTours(filters?: TourFilters): Tour[] {
    let filtered = [...tours];

    // Filter by themes (OR logic - if tour has ANY of the selected themes)
    // filters.themes contains theme slugs (e.g. 'wildlife-safaris').
    // Tour themes are short keywords (e.g. 'wildlife', 'safari').
    // We look up each slug's tags in themes.ts and check for any overlap.
    if (filters?.themes && filters.themes.length > 0) {
        filtered = filtered.filter(tour =>
            filters.themes!.some(themeSlug => {
                const theme = themes.find(t => t.slug === themeSlug);
                if (!theme) return false;
                return theme.tags.some(tag => tour.themes.includes(tag));
            })
        );
    }

    // Filter by state (AND with other filters)
    if (filters?.state) {
        filtered = filtered.filter(t => t.state === filters.state);
    }

    // Filter by difficulty (AND with other filters)
    if (filters?.difficulty) {
        filtered = filtered.filter(t => t.difficulty === filters.difficulty);
    }

    // Filter by price (AND with other filters)
    if (filters?.maxPrice !== undefined && filters.maxPrice > 0) {
        filtered = filtered.filter(t => t.price <= filters.maxPrice!);
    }

    return filtered;
}

export function getTourBySlug(slug: string): Tour | undefined {
    return tours.find(t => t.slug === slug);
}
