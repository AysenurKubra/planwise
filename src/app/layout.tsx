// src/app/layout.tsx
import './globals.css';
import Header from '@/components/Header';
import { getLocale } from 'next-intl/server';
import ClientWrapper from '@/components/ClientWrapper';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>
        <ClientWrapper locale={locale}>
          <Header />
          <main className="p-4">{children}</main>
        </ClientWrapper>
      </body>
    </html>
  );
}
