'use client';

import { useEffect } from 'react';
import { basePath } from '@/lib/shared';

// Only ever reached in the static export (GitHub Pages) build. In normal
// dev/server mode, proxy.ts rewrites "/" to "/en" before this page is ever
// matched — static export can't run that rewrite, since there's no server.
export default function RootRedirectPage() {
  const target = `${basePath}/en`;

  useEffect(() => {
    window.location.replace(target);
  }, [target]);

  return (
    <html lang="en">
      <body>
        <p>
          Redirecting to <a href={target}>the docs</a>...
        </p>
      </body>
    </html>
  );
}
