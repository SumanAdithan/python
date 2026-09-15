'use client';

import type { ReactNode } from 'react';
import { RootProvider as FumaRootProvider } from 'fumadocs-ui/provider/next';
import { i18nProvider } from 'fumadocs-ui/i18n';
import { translations } from '@/lib/layout.shared';
import { basePath } from '@/lib/shared';
import StaticSearchDialog from './search-dialog';

export function RootProvider({ lang, children }: { lang: string; children: ReactNode }) {
  return (
    <FumaRootProvider
      search={{ SearchDialog: StaticSearchDialog }}
      i18n={{
        ...i18nProvider(translations, lang),
        // Switching locale changes the `lang` param on the ROOT layout (the one
        // rendering `<html>` + the theme no-flash `<script>`). A client-side
        // `router.push` re-renders that script on the client, which Next.js
        // rejects. Force a full page load instead so it's parsed fresh by the browser.
        onLocaleChange(locale) {
          const segments = window.location.pathname.split('/').filter(Boolean);
          if (segments.length === 0 || segments[0] !== lang) segments.unshift(locale);
          else segments[0] = locale;

          window.location.assign(`${basePath}/${segments.join('/')}${window.location.search}`);
        },
      }}
    >
      {children}
    </FumaRootProvider>
  );
}
