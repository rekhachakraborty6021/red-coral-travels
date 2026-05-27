import { Tour } from '@/types';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://www.redcoraltravels.com';

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

export function generateOrganizationJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'TravelAgency',
        name: 'Red Coral Travels',
        description: 'Expert-curated travel experiences across Northeast India - Assam, Meghalaya, Arunachal Pradesh, Nagaland, Manipur, Mizoram, Tripura, and Sikkim.',
        url: BASE_URL,
        logo: `${BASE_URL}/logo-icon.png`,
        image: `${BASE_URL}/og-image.jpg`,
        areaServed: [
            'Assam', 'Meghalaya', 'Arunachal Pradesh', 'Nagaland',
            'Manipur', 'Mizoram', 'Tripura', 'Sikkim',
        ],
        address: {
            '@type': 'PostalAddress',
            addressRegion: 'Northeast India',
            addressCountry: 'IN',
        },
    };
}

export function generateStateJsonLd(params: {
    name: string;
    description: string;
    slug: string;
    image: string;
    highlights: string[];
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'TouristDestination',
        name: params.name,
        description: params.description,
        url: `${BASE_URL}/state/${params.slug}`,
        image: `${BASE_URL}${params.image}`,
        touristType: params.highlights,
        containedInPlace: {
            '@type': 'Country',
            name: 'India',
        },
    };
}

export function generateDestinationJsonLd(params: {
    name: string;
    description: string;
    slug: string;
    location: string;
}) {
    return {
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
        },
    };
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
