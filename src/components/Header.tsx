'use client';

import {useRouter} from 'next/navigation';
import {useLocale} from 'next-intl';
import {LanguagesIcon} from 'lucide-react';

export default function Header() {
  const router = useRouter();
  const locale = useLocale();

  const setLocale = async (newLocale: string) => {
    // Dil cookie’sini ayarla
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/`;

    // Sayfayı yenile
    router.refresh();
  };

  return (
    <header className="w-full p-4 border-b shadow-sm flex items-center justify-between">
      <div className="text-xl font-semibold">🌐 Planwise</div>
      <div className="flex items-center gap-2">
        <LanguagesIcon className="w-5 h-5 text-gray-500" />
        {['en', 'tr'].map((lng) => (
          <button
            key={lng}
            onClick={() => setLocale(lng)}
            className={`px-3 py-1 rounded ${
              lng === locale ? 'bg-black text-white' : 'border'
            }`}
          >
            {lng.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  );
}
