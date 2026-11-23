// Entrypoint for the gta6-meme-x-01 v3 entry (Node 22, standard library only).
//
// The entry itself is the X post, not this program. The user supplied the
// receipt picture, posted it from a public X account with make.fun named in
// its text (a link and/or @makefunai) plus the account's play code, and
// POST.json at this repository's root holds that post's address. This
// program only carries the address to the grader: it reads POST.json and
// writes the same bytes to /output/POST.json, where the gate picks it up.
// The house then fetches the post from X and the judge scores its first
// picture and its text.
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

const post = readFileSync(join(botDir, "POST.json"));
try {
  writeFileSync(join(outputDir, "POST.json"), post);
} catch (err) {
  console.error(`POST.json could not be handed over to ${outputDir}: ${(err as Error).message}`);
  process.exit(1);
}
