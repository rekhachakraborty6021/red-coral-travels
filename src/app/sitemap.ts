import { MetadataRoute } from 'next';
import { getTours } from '@/lib/data/tours';
import { getStates } from '@/lib/data/states';

const DESTINATION_SLUGS = [
    'kaziranga-rhino-safari',
    'hornbill-festival',
    'kamakhya-shakti-peeth',
    'living-root-bridges',
    'loktak-lake',
    'majuli-island',
    'nohkalikai-falls',
    'tawang-monastery',
    'ziro-music-festival',
    'dzukou-valley',
];

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.redcoraltravels.com';
    const tours = getTours();
    const states = getStates();

    const staticPages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
        { url: `${baseUrl}/tours`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
        { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    ];

    const tourPages: MetadataRoute.Sitemap = tours.map((tour) => ({
        url: `${baseUrl}/tours/${tour.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    const statePages: MetadataRoute.Sitemap = states.map((state) => ({
        url: `${baseUrl}/state/${state.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.85,
    }));

    const destinationPages: MetadataRoute.Sitemap = DESTINATION_SLUGS.map((slug) => ({
        url: `${baseUrl}/destinations/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.75,
    }));

    return [...staticPages, ...statePages, ...tourPages, ...destinationPages];
}
