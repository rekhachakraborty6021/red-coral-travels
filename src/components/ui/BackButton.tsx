'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-6 group transition-colors"
    >
      <span className="group-hover:-translate-x-1 transition-transform">←</span>
      Back
    </button>
  );
}
