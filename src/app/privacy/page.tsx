import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy — The Experiment",
  description: "How The Experiment handles the details you send us.",
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-paper text-ink">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <p className="mono text-[10px] tracking-[0.28em] text-hot-deep uppercase">Legal</p>
        <h1 className="display mt-4 text-5xl md:text-7xl">Privacy</h1>
        <div className="mt-10 space-y-6 text-lg leading-8 text-mute">
          <p>
            We do not sell your information. Audit requests (URL, traffic, email,
            bottleneck) are used to reply to you and to decide if we are the right
            lab. That is it.
          </p>
          <p>
            This site does not run advertising pixels. If we add analytics later, it
            will be first-party and documented here — not slipped in as consent theatre.
          </p>
          <p>
            Questions:{" "}
            <a className="text-hot-deep underline" href="mailto:lab@theexperiment.studio">
              lab@theexperiment.studio
            </a>
          </p>
        </div>
        <Link href="/" className="mono mt-12 inline-block text-xs tracking-[0.2em] uppercase text-ink hover:text-hot-deep">
          ← Back to the lab
        </Link>
      </div>
    </main>
  );
}
