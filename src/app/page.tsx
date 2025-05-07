import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('auth');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link href="/dashboard">
        <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
          {t('googleSignIn')}
        </button>
      </Link>
    </main>
  );
}
