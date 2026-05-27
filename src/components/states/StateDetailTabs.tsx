'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface StateDetailTabsProps {
    slug: string;
    stateName: string;
    itinerary: unknown;
}

export default function StateDetailTabs({ slug, stateName }: StateDetailTabsProps) {
    const [iframeHeight, setIframeHeight] = useState(800);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const handler = (e: MessageEvent) => {
            if (e.data?.type === 'guide-height' && typeof e.data.height === 'number') {
                setIframeHeight(Math.max(600, e.data.height + 40));
            }
        };
        window.addEventListener('message', handler);
        return () => window.removeEventListener('message', handler);
    }, []);

    return (
        <div className="w-full">
            <iframe
                ref={iframeRef}
                src={`/api/state-guide/${slug}`}
                title={`${stateName} Travel Guide`}
                className="w-full border-0"
                style={{ height: `${iframeHeight}px` }}
                onLoad={() => {
                    try {
                        const doc = iframeRef.current?.contentDocument;
                        if (doc) setIframeHeight(Math.max(600, doc.body.scrollHeight + 40));
                    } catch { /* cross-origin */ }
                }}
            />
            <div className="bg-gray-50 border-t border-gray-200 py-8 px-4">
                <div className="max-w-md mx-auto text-center">
                    <p className="text-gray-600 mb-4">Ready to explore {stateName}?</p>
                    <Link
                        href={`/contact?state=${slug}`}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-xl text-base transition-all"
                    >
                        Book Your Trip
                    </Link>
                </div>
            </div>
        </div>
    );
}
