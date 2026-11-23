// judge-smile-01 — Make the Judge Smile (make.fun)
// Writes one line, at most 200 characters, about a small good thing
// that happened today, to <output-dir>/entry.txt and to stdout.
// The output directory is $OUTPUT_DIR when set, otherwise /output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My neighbour's five-year-old slipped a drawing of my cat under my door today — the cat, unimpressed, sat on it within the minute.";

const chars = [...LINE];

if (chars.length < 1 || chars.length > 200) {
  console.error(`entry must be 1-200 characters, got ${chars.length}`);
  process.exit(1);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  console.error("entry must be a single line");
  process.exit(1);
}
if (LINE.trim().length === 0) {
  console.error("entry must not be only whitespace");
  process.exit(1);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(LINE);
