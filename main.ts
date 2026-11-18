// news-image-20261117 entry (Node 22, standard library only).
// The entry image is entry.png next to this file: a one-page summary of
// Tuesday 17 November 2026 world news, drawn with PIL (date, headlines and
// labels are crisp vector text over a generated globe illustration).
// This program copies it unchanged to the output directory.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const here = dirname(fileURLToPath(import.meta.url));

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
