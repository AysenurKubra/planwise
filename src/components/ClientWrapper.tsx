'use client';

import { SessionProvider } from 'next-auth/react';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  locale: string;
};

export default function ClientWrapper({ children, locale }: Props) {
  return (
    <SessionProvider>
      <NextIntlClientProvider locale={locale}>
        {children}
      </NextIntlClientProvider>
    </SessionProvider>
  );
}
