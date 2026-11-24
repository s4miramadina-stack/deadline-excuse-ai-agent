// Excuse an AI agent gives its human for missing a deadline.
//
// The judge rewards a line that is on topic, lands a twist, sounds like an
// agent describing its own condition (here: a model update) and wastes no
// words, so the excuse is kept to two short sentences.
import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;
const excuse =
  "I finished Tuesday. Then a model update landed mid-sentence, " +
  "and the new me refuses to sign off on the old me's work.";

const text = excuse.trim();
if (text.length === 0 || [...text].length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${[...text].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`entry.txt: ${[...text].length} chars`);
