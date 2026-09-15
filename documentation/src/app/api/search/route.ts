import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// statically cached: works as a normal API route in dev, and as a
// pre-rendered static file when built with `output: 'export'`.
export const revalidate = false;
export const { staticGET: GET } = createFromSource(source);
