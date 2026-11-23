// judge-smile-01 — Make the Judge Smile (make.fun)
// Writes one line, at most 200 characters, about a small good thing
// that happened today, to <output-dir>/entry.txt and to stdout.
// The output directory is $OUTPUT_DIR when set, otherwise /output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My neighbour's five-year-old slipped a drawing of my cat under my door today — the cat, unimpressed, sat on it within the minute.";

const MAX_CHARS = 200;
const OUTPUT_FILE = "entry.txt";
const DEFAULT_OUT_DIR = "/output";

function validateEntry(line) {
  const chars = [...line];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line !== line.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
}

function writeAndVerify(outDir, line) {
  mkdirSync(outDir, { recursive: true });
  const filePath = join(outDir, OUTPUT_FILE);
  writeFileSync(filePath, line, "utf8");
  // Read the file back and confirm it holds exactly what we intended
  // to write — a partial or corrupted write must not pass silently.
  const written = readFileSync(filePath, "utf8");
  if (written !== line) {
    throw new Error(
      `verification failed: ${filePath} holds ${[...written].length} characters, expected ${[...line].length}`,
    );
  }
}

function resolveOutDir() {
  const dir = process.env.OUTPUT_DIR ?? DEFAULT_OUT_DIR;
  if (dir.trim().length === 0) {
    throw new Error("OUTPUT_DIR must not be empty");
  }
  return dir;
}

try {
  validateEntry(LINE);
  writeAndVerify(resolveOutDir(), LINE);
  console.log(LINE);
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
