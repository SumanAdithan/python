import { defineI18n } from 'fumadocs-core/i18n';

// Fumadocs bakes `hideLocale` into every link it generates itself (sidebar,
// page.url, breadcrumbs) — not just the URL bar. 'default-locale' relies on
// proxy.ts to rewrite bare `/docs/...` back to `/en/docs/...` at request
// time, which only works when there's a server. The static export (GitHub
// Pages) has none, so it needs every link fully prefixed instead.
const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true';

export const i18n = defineI18n({
  defaultLanguage: 'en',
  languages: ['en', 'tanglish'],
  // Dev/server: English stays at clean `/docs/...` urls (proxy.ts fills in the prefix).
  // Static export: every url is fully prefixed, since nothing can fill it in later.
  hideLocale: isStaticExport ? 'never' : 'default-locale',
});
