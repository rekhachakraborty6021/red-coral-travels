import type { Metadata, Viewport } from 'next';
import Image from 'next/image';
import { inter } from '@/lib/fonts';
import { Analytics } from '@vercel/analytics/react';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import { Toaster } from 'sonner';
import { generateOrganizationJsonLd, generateWebSiteJsonLd } from '@/lib/seo/jsonld';
import Providers from '@/components/providers/Providers';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://www.redcoraltravels.com'),
  title: {
    default: 'Red Coral Travels - Northeast India Travel & Tour Packages',
    template: '%s | Red Coral Travels',
  },
  description: 'Expert-curated tours across Northeast India - Assam, Meghalaya, Arunachal Pradesh, Nagaland, Manipur, Mizoram, Tripura & Sikkim. Book wildlife safaris, treks, festivals & cultural tours.',
  keywords: [
    'Northeast India travel', 'Northeast India tours', 'Northeast India tour packages',
    'travel to Northeast India', 'Assam tours', 'Meghalaya tours', 'Arunachal Pradesh tours',
    'Nagaland tours', 'Manipur tours', 'Mizoram tours', 'Tripura tours', 'Sikkim tours',
    'seven sisters India travel', 'Northeast India holiday packages', 'travel agency Northeast India',
    'Kaziranga safari', 'Hornbill Festival tour', 'Living Root Bridges trek',
    'Tawang Monastery tour', 'adventure tours Northeast India',
  ],
  authors: [{ name: 'Red Coral Travels' }],
  creator: 'Red Coral Travels',
  publisher: 'Red Coral Travels',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Red Coral Travels',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Red Coral Travels',
    title: 'Red Coral Travels - Northeast India Travel & Tour Packages',
    description: 'Expert-curated tours across Northeast India. Wildlife safaris, treks, festivals & cultural experiences.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Red Coral Travels - Northeast India Travel' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Red Coral Travels - Northeast India Travel & Tour Packages',
    description: 'Expert-curated tours across Northeast India. Wildlife safaris, treks, festivals & cultural experiences.',
    images: ['/og-image.jpg'],
    creator: '@redcoraltravels',
  },
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: '#1B5E6B',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationJsonLd()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteJsonLd()) }} />
        <Providers>
          <div className="flex flex-col min-h-screen relative">
            {/* Watermark */}
            <div className="pointer-events-none fixed bottom-6 right-6 z-10 select-none" aria-hidden="true">
              <Image src="/watermark.png" alt="" width={120} height={120} className="opacity-[0.07]" />
            </div>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <WhatsAppFloat />
          <Toaster
            position="top-center"
            richColors
            toastOptions={{
              style: { background: '#F2D7EE', color: '#0E103D', border: '1px solid #D3BCC0' },
            }}
          />
          <Analytics />
          {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
        </Providers>
      </body>
    </html>
  );
}
