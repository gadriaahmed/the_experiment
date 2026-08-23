import type { ReactNode } from "react";

/**
 * Renders `[[accented]]` markers from CMS copy as highlighted spans.
 * Editorial files keep a single string; the site maps markers to the hot accent.
 */
export function withAccent(text: string, className: string): ReactNode[] {
  return text.split(/\[\[(.+?)\]\]/g).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className={className}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

/** Same as `withAccent`, plus `\n` → `<br />`. */
export function withAccentLines(text: string, className: string): ReactNode {
  const lines = text.split("\n");
  return lines.map((line, i) => (
    <span key={i}>
      {i > 0 ? <br /> : null}
      {withAccent(line, className)}
    </span>
  ));
}


