import { DynamicLink } from 'fumadocs-core/dynamic-link';
import { i18n } from '@/lib/i18n';

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">Python Learning Notes</h1>
      <p>
        Phase-by-phase Python notes for revision, with JS/TS comparisons.{' '}
        <DynamicLink href="/[lang]/docs" className="font-medium underline">
          Open the docs
        </DynamicLink>
        .
      </p>
    </div>
  );
}
