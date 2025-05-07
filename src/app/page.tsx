'use client';

import { useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const t = useTranslations('auth');

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [status, router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <button
        onClick={() => signIn('google')}
        className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        {t('googleSignIn')}
      </button>
    </main>
  );
}
