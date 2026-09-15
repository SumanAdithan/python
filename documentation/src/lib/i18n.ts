import { defineI18n } from 'fumadocs-core/i18n';

export const i18n = defineI18n({
  defaultLanguage: 'en',
  languages: ['en', 'tanglish'],
  // English stays at clean `/docs/...` urls, Tanglish is prefixed with `/tanglish/...`
  hideLocale: 'default-locale',
});
