import type { Metadata } from "next";
import Link from "next/link";
import { getPrivacyContent } from "@/lib/privacy";

export function generateMetadata(): Metadata {
  const content = getPrivacyContent();
  return {
    title: content.seo.title,
    description: content.seo.description,
    openGraph: {
      title: content.seo.title,
      description: content.seo.ogDescription,
    },
  };
}

export default function PrivacyPage() {
  const content = getPrivacyContent();

  return (
    <main id="main-content" className="min-h-screen bg-paper text-ink">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <p className="mono text-[10px] tracking-[0.28em] text-hot-deep uppercase">{content.eyebrow}</p>
        <h1 className="display mt-4 text-5xl md:text-7xl">{content.title}</h1>
        <div className="mt-10 space-y-6 text-lg leading-8 text-mute">
          {content.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p>
            Questions:{" "}
            <a className="text-hot-deep underline" href={`mailto:${content.email}`}>
              {content.email}
            </a>
          </p>
        </div>
        <Link
          href={content.backHref}
          className="mono mt-12 inline-block text-xs tracking-[0.2em] uppercase text-ink hover:text-hot-deep"
        >
          {content.backLabel}
        </Link>
      </div>
    </main>
  );
}
