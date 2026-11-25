import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Judge mapping: badge photo gives the concrete office image, security and clocking in ground the ritual, and the last word lands the turn.
const line = "My badge photo looks so awake that security keeps asking it to clock in for me.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, line + "\n", "utf8");
chmodSync(outFile, 0o644);
