'use client'

import { useRouter } from 'next/navigation'

export default function LanguageSwitcher() {
  const router = useRouter();

  return (
    <div className="flex justify-center space-x-4 p-4">
      {['en', 'tr'].map((lng) => (
        <button
          key={lng}
          className="p-2 bg-blue-600 text-white rounded"
          onClick={() => router.push(`/${lng}`)}
        >
          {lng === 'tr' ? 'Türkçe' : 'English'}
        </button>
      ))}
    </div>
  );
}
