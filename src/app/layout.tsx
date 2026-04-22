import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import { Toaster } from 'sonner';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'Jajabor - Discover Your Next Adventure',
    template: '%s | Jajabor',
  },
  description: 'Curated travel experiences across India and the world. Book amazing tours, adventure trips, and holiday packages with expert guides and best prices.',
  keywords: ['travel agency', 'tours', 'holiday packages', 'adventure trips', 'India tours', 'international tours', 'travel booking'],
  authors: [{ name: 'Jajabor' }],
  creator: 'Jajabor',
  publisher: 'Jajabor',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Jajabor',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Jajabor',
    title: 'Jajabor - Discover Your Next Adventure',
    description: 'Curated travel experiences across India and the world',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jajabor - Travel Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jajabor - Discover Your Next Adventure',
    description: 'Curated travel experiences across India and the world',
    images: ['/og-image.jpg'],
    creator: '@wanderways',
  },
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
  themeColor: '#7D70BA',
};

import Providers from '@/components/providers/Providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <WhatsAppFloat />
          <Toaster
            position="top-center"
            richColors
            toastOptions={{
              style: {
                background: '#F2D7EE',
                color: '#0E103D',
                border: '1px solid #D3BCC0',
              },
            }}
          />
          <Analytics />
          {process.env.NEXT_PUBLIC_GA_ID && (
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
          )}
        </Providers>
      </body>
    </html>
  );
}
