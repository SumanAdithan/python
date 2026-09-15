export const appName = 'My App';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

// Only set when building the static GitHub Pages export (STATIC_EXPORT=true).
// Next.js applies this automatically to routing/assets, but a few manually-built
// URL strings (markdown copy links, OG image URLs) need it prepended by hand.
export const basePath = process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true' ? '/python' : '';

export const gitConfig = {
  user: 'SumanAdithan',
  repo: 'python',
  branch: 'main',
};
