import type { Metadata } from "next";
import Script from "next/script";
import { JetBrains_Mono, Manrope, Syne } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { getHomepageContent } from "@/lib/home";

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

const homepage = getHomepageContent();

export const metadata: Metadata = {
  title: homepage.seo.title,
  description: homepage.seo.description,
  openGraph: {
    title: homepage.seo.title,
    description: homepage.seo.ogDescription,
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
          {homepage.skipLink}
        </a>
        <div className="grain" aria-hidden="true" />
        <CustomCursor />
        {children}
        {/*
          Invite / password-reset / confirmation links from Netlify Identity
          land on the site root, not /admin/. Only /admin/index.html loads
          the Identity widget, so this same-origin redirect preserves the
          hash token without putting the widget on public pages.
        */}
        <Script id="netlify-identity-redirect" strategy="beforeInteractive">
          {`
            (function () {
              var hash = window.location.hash;
              if (/^#(invite_token|recovery_token|confirmation_token)=/.test(hash)) {
                window.location.replace("/admin/" + hash);
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
