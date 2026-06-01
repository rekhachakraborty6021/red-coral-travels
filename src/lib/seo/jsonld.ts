import { Tour } from '@/types';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://www.redcoraltravels.com';

export function generateOrganizationJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'TravelAgency',
        name: 'Red Coral Travels',
        alternateName: 'Red Coral Travels Northeast India',
        description: 'Expert-curated travel experiences across Northeast India - Assam, Meghalaya, Arunachal Pradesh, Nagaland, Manipur, Mizoram, Tripura, and Sikkim.',
        url: BASE_URL,
        logo: `${BASE_URL}/logo-icon.png`,
        image: `${BASE_URL}/og-image.jpg`,
        telephone: '+91-91015-56092',
        email: 'info@redcoraltravels.com',
        priceRange: '₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer',
        areaServed: [
            { '@type': 'State', name: 'Assam', containedInPlace: { '@type': 'Country', name: 'India' } },
            { '@type': 'State', name: 'Meghalaya', containedInPlace: { '@type': 'Country', name: 'India' } },
            { '@type': 'State', name: 'Arunachal Pradesh', containedInPlace: { '@type': 'Country', name: 'India' } },
            { '@type': 'State', name: 'Nagaland', containedInPlace: { '@type': 'Country', name: 'India' } },
            { '@type': 'State', name: 'Manipur', containedInPlace: { '@type': 'Country', name: 'India' } },
            { '@type': 'State', name: 'Mizoram', containedInPlace: { '@type': 'Country', name: 'India' } },
            { '@type': 'State', name: 'Tripura', containedInPlace: { '@type': 'Country', name: 'India' } },
            { '@type': 'State', name: 'Sikkim', containedInPlace: { '@type': 'Country', name: 'India' } },
        ],
        address: {
            '@type': 'PostalAddress',
            addressRegion: 'Assam',
            addressLocality: 'Guwahati',
            addressCountry: 'IN',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 26.1445,
            longitude: 91.7362,
        },
        sameAs: [
            'https://www.facebook.com/redcoraltravels',
            'https://www.instagram.com/redcoraltravels',
            'https://twitter.com/redcoraltravels',
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Northeast India Tour Packages',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Kaziranga Rhino Safari' } },
                { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Hornbill Festival Tour' } },
                { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Living Root Bridges Trek' } },
                { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Tawang Monastery Tour' } },
                { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Dzukou Valley Trek' } },
            ],
        },
    };
}

export function generateWebSiteJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Red Coral Travels',
        url: BASE_URL,
        description: 'Northeast India tour packages — Assam, Meghalaya, Arunachal Pradesh, Nagaland, Manipur, Mizoram, Tripura & Sikkim.',
        potentialAction: {
            '@type': 'SearchAction',
            target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/tours?q={search_term_string}` },
            'query-input': 'required name=search_term_string',
        },
        publisher: {
            '@type': 'TravelAgency',
            name: 'Red Coral Travels',
            url: BASE_URL,
        },
    };
}

export function generateFAQJsonLd() {
    const faqs = [
        {
            q: 'What is the best time to visit Northeast India?',
            a: 'October to April is the best time for most of Northeast India. Monsoon season (June-September) is ideal for Dzukou Valley and lush landscapes. December is best for the Hornbill Festival in Nagaland.',
        },
        {
            q: 'Do I need a permit to visit Northeast India?',
            a: 'Yes, several Northeast Indian states require an Inner Line Permit (ILP) — including Nagaland, Arunachal Pradesh, Manipur, and Mizoram. Red Coral Travels arranges all permits on your behalf.',
        },
        {
            q: 'How do I reach Northeast India?',
            a: 'Guwahati (Assam) is the main hub with direct flights from Delhi, Mumbai, Kolkata, and Bangalore. From Guwahati, we arrange road and air transfers to all other Northeast states.',
        },
        {
            q: 'What types of tours does Red Coral Travels offer?',
            a: 'We offer wildlife safaris (Kaziranga), trekking (Dzukou Valley, Living Root Bridges), cultural tours (Hornbill Festival, Majuli Island), pilgrimage tours (Kamakhya Temple), and state-wise tour packages across all 8 Northeast states.',
        },
        {
            q: 'Is Northeast India safe for tourists?',
            a: 'Yes, Northeast India is safe for tourists. The region is warm and welcoming, and our local guides ensure a safe and authentic experience throughout your journey.',
        },
        {
            q: 'What is included in Red Coral Travels tour packages?',
            a: 'Our packages include accommodation, meals as per itinerary, all transport, local guide, park entry fees, and permit assistance. International and domestic flights are not included unless specified.',
        },
    ];

    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
        })),
    };
}

export function generateTourJsonLd(tour: Tour) {
    return {
        '@context': 'https://schema.org',
        '@type': 'TouristTrip',
        name: tour.title,
        description: tour.longDescription,
        image: tour.images.main,
        url: `${BASE_URL}/tours/${tour.slug}`,
        offers: {
            '@type': 'Offer',
            price: tour.price,
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            validFrom: tour.availableFrom,
            validThrough: tour.availableTo,
        },
        provider: {
            '@type': 'TravelAgency',
            name: 'Red Coral Travels',
            url: BASE_URL,
            telephone: '+91-91015-56092',
        },
        itinerary: {
            '@type': 'ItemList',
            itemListElement: tour.highlights.map((highlight, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: highlight,
            })),
        },
        duration: `P${tour.duration.days}D`,
        touristType: tour.difficulty,
    };
}

export function generateStateJsonLd(params: {
    name: string;
    description: string;
    slug: string;
    image: string;
    highlights: string[];
}) {
    return [
        {
            '@context': 'https://schema.org',
            '@type': 'TouristDestination',
            name: `${params.name}, Northeast India`,
            description: params.description,
            url: `${BASE_URL}/state/${params.slug}`,
            image: `${BASE_URL}${params.image}`,
            touristType: params.highlights,
            containedInPlace: { '@type': 'Country', name: 'India' },
            hasMap: `https://www.google.com/maps/search/${encodeURIComponent(params.name + ' India')}`,
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
                { '@type': 'ListItem', position: 2, name: 'States', item: `${BASE_URL}/state` },
                { '@type': 'ListItem', position: 3, name: params.name, item: `${BASE_URL}/state/${params.slug}` },
            ],
        },
    ];
}

export function generateDestinationJsonLd(params: {
    name: string;
    description: string;
    slug: string;
    location: string;
}) {
    return [
        {
            '@context': 'https://schema.org',
            '@type': 'TouristAttraction',
            name: params.name,
            description: params.description,
            url: `${BASE_URL}/destinations/${params.slug}`,
            location: {
                '@type': 'Place',
                name: params.location,
                containedInPlace: { '@type': 'Country', name: 'India' },
            },
            provider: {
                '@type': 'TravelAgency',
                name: 'Red Coral Travels',
                url: BASE_URL,
                telephone: '+91-91015-56092',
            },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
                { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${BASE_URL}/destinations` },
                { '@type': 'ListItem', position: 3, name: params.name, item: `${BASE_URL}/destinations/${params.slug}` },
            ],
        },
    ];
}

export function generateBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}
