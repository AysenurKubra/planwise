'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { LanguagesIcon } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Header() {
  const router = useRouter();
  const locale = useLocale();
  const { data: session } = useSession(); // Oturum durumu
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

        {/* Kullanıcı oturumu açıksa çıkış butonu göster */}
        {session ? (
          <button
            onClick={() => signOut()}
            className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        ) : (
          <Link href="/">
            <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
              Sign in with Google
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}
