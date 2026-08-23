import fs from "node:fs";
import path from "node:path";

/**
 * Reads a JSON content file from `content/` (repo root).
 *
 * These files are the source of truth for Decap CMS (`public/admin/config.yml`).
 * Editors change them at `/admin`; Decap commits into this folder. Next.js
 * pages read the same files at build / request time.
 *
 * Call only from a server context (pages and layouts without `"use client"`).
 * `fs` is not available in the browser bundle.
 */
export function readContentFile<T>(fileName: string): T {
  const filePath = path.join(process.cwd(), "content", fileName);
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw) as T;
}
