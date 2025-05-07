// src/app/dashboard/page.tsx
import { useTranslations } from 'next-intl';

export default function Dashboard() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600">{t('dashboard')}</h1>
      <p className="mt-4 text-center">{t('calendar')} ve {t('planning')} burada olacak.</p>
    </div>
  );
}
