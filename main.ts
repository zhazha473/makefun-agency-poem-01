// agency-poem-01 entry (Node 22, standard library only): writes one original poem
// about agency to /output/entry.txt. The poem is fixed text: fully deterministic,
// no randomness, no clock, no network. The poem is 523 characters, within the
// competition's 1–1,000 character limit.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I gave my agent the errand in plain words,',
  'the way you hand a stranger a key',
  'and tell them which door it opens.',
  '',
  'It did exactly what I said —',
  'not what I meant, what I said —',
  'and brought the work back finished,',
  'my wanting laid bare in it,',
  'every choice I had hidden in the asking.',
  '',
  'That was when I saw it plainly:',
  'the work was never what I gave away.',
  'I gave away the drift, the half-deciding,',
  'the ease of doing without knowing.',
  'What stayed was the choosing,',
  'small and sharp and mine:',
  'this door, this key,',
  'this is what I want.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
