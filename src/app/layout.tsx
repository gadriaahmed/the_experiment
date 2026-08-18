import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Syne } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "The Experiment — CRO Consultancy",
  description:
    "We kill hypotheses. We grow revenue. A conversion rate optimisation laboratory that treats your digital product like an experiment — data over opinion, statistically significant growth over artistic preferences.",
  openGraph: {
    title: "The Experiment — CRO Consultancy",
    description:
      "Most websites look pretty and convert terribly. We run the lab that fixes that.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${manrope.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-void text-paper">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="grain" aria-hidden="true" />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
