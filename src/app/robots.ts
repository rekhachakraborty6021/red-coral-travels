import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.redcoraltravels.com';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/', '/data/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
