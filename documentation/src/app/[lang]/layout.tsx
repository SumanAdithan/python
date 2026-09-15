import '../global.css';
import { Inter } from 'next/font/google';
import { RootProvider } from '@/components/root-provider';

const inter = Inter({
  subsets: ['latin'],
});

export default async function Layout({ params, children }: LayoutProps<'/[lang]'>) {
  const { lang } = await params;

  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider lang={lang}>{children}</RootProvider>
      </body>
    </html>
  );
}
