'use client';

import { useEffect, type ReactNode } from 'react';
import { useParams } from 'next/navigation';
import { RootProvider as FumaRootProvider } from 'fumadocs-ui/provider/next';
import { i18nProvider } from 'fumadocs-ui/i18n';
import { translations } from '@/lib/layout.shared';
import { i18n } from '@/lib/i18n';
import StaticSearchDialog from './search-dialog';

export function RootProvider({ children }: { children: ReactNode }) {
  // Reading `lang` via the hook (rather than a prop from [lang]/layout.tsx)
  // means this component's own identity doesn't depend on the segment value —
  // switching locale re-renders it in place instead of remounting it.
  const params = useParams<{ lang?: string }>();
  const lang = params.lang ?? i18n.defaultLanguage;

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <FumaRootProvider
      search={{ SearchDialog: StaticSearchDialog }}
      // No custom onLocaleChange: now that the theme script lives in the
      // stable root layout (never remounted by a [lang] change), Fumadocs'
      // own default handler (a plain client-side router.push) is safe to use
      // instead of the full-reload workaround this used to need.
      i18n={i18nProvider(translations, lang)}
    >
      {children}
    </FumaRootProvider>
  );
}
