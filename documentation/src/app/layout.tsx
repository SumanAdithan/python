import './global.css';
import { Inter } from 'next/font/google';
import { RootProvider } from '@/components/root-provider';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

// This is the TRUE root layout — it renders <html>/<body> for every route,
// including the [lang] tree, the root redirect page, and the 404 page.
// Keeping it above [lang] means switching locale only re-renders what's
// *below* this layout; this layout itself (and the theme no-flash <script>
// inside RootProvider) never remounts, which is what makes a smooth
// client-side locale switch possible instead of a forced full reload.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
