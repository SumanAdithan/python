'use client';

import { useEffect, useState } from 'react';
import { basePath } from '@/lib/shared';
import { i18n } from '@/lib/i18n';

// On GitHub Pages there's no server to rewrite a bare `/docs/...` link into
// `/en/docs/...` (that only happens via proxy.ts in dev/server mode). This
// becomes the site's 404.html, so instead we catch it here: strip the
// basePath, check whether the path already starts with a known locale, and
// if not, redirect into the default one.
export default function NotFound() {
  const [target, setTarget] = useState<string | null>(null);

  useEffect(() => {
    const { pathname, search, hash } = window.location;
    const withoutBase =
      basePath && pathname.startsWith(basePath) ? pathname.slice(basePath.length) : pathname;
    const segments = withoutBase.split('/').filter(Boolean);

    if (segments.length > 0 && (i18n.languages as string[]).includes(segments[0])) {
      // Already has a valid locale prefix — this is a genuine 404, not a missing prefix.
      return;
    }

    const rest = withoutBase.startsWith('/') ? withoutBase : `/${withoutBase}`;
    const redirectTo = `${basePath}/${i18n.defaultLanguage}${rest}${search}${hash}`;
    setTarget(redirectTo);
    window.location.replace(redirectTo);
  }, []);

  return (
    <html lang="en">
      <body>
        <p>{target ? <a href={target}>Redirecting...</a> : 'Page not found.'}</p>
      </body>
    </html>
  );
}
