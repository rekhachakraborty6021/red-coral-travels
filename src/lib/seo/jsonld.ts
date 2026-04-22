import { Tour } from '@/types';

export function generateTourJsonLd(tour: Tour) {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    return {
        '@context': 'https://schema.org',
        '@type': 'TouristTrip',
        name: tour.title,
        description: tour.longDescription,
        image: tour.images.main,
        url: `${baseUrl}/tours/${tour.slug}`,
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
            name: 'WanderWays',
            url: baseUrl,
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
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    return {
        '@context': 'https://schema.org',
        '@type': 'TravelAgency',
        name: 'WanderWays',
        description: 'Curated travel experiences across India and the world',
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        image: `${baseUrl}/og-image.jpg`,
        telephone: '+91-98765-43210',
        email: 'info@wanderways.com',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Mumbai',
            addressCountry: 'IN',
        },
        sameAs: [
            'https://facebook.com/wanderways',
            'https://twitter.com/wanderways',
            'https://instagram.com/wanderways',
        ],
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
