// One Line, One Laugh — a single self-contained one-liner.
// The line is written verbatim to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output) and chmodded 0644 so the grader can read it.
import { writeFileSync, mkdirSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked an AI to write my wedding vows. It proposed to my fiancée first.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, LINE, "utf8");
chmodSync(entryPath, 0o644);
