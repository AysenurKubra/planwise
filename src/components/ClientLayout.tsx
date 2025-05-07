// src/components/ClientLayout.tsx
'use client';

import { SessionProvider } from 'next-auth/react';
import { NextIntlClientProvider } from 'next-intl';
import React from 'react';

interface ClientLayoutProps {
  children: React.ReactNode;
  locale: string; // locale prop'u eklendi
}

export default function ClientLayout({ children, locale }: ClientLayoutProps) {
  return (
    <SessionProvider>
      <NextIntlClientProvider locale={locale}> {/* locale prop'u burada sağlanıyor */}
        {children}
      </NextIntlClientProvider>
    </SessionProvider>
  );
}
