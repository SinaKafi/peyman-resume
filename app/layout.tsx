import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import { identity } from "@/content/portfolio";
import { MotionProvider } from "@/components/motion/motion-provider";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  style: ["normal"],
});

/**
 * Canonical origin of the deployed site.
 *
 * A GitHub Pages project site is served from a subpath, so the base path is
 * part of the URL and not merely an asset prefix — a canonical of "/" would
 * point search engines and social cards at the domain root instead of this
 * site. Set `NEXT_PUBLIC_SITE_URL` (repo variable `SITE_URL` in CI) when
 * moving to a custom domain.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://sinakafi.github.io/peyman-resume";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${identity.name} — ${identity.title}`,
    template: `%s — ${identity.name}`,
  },
  description:
    "Administrative and operations manager working across project control, procurement, organizational performance and process standardization. Tehran, Iran.",
  keywords: [
    "Administrative Manager",
    "Operations Manager",
    "Project Control",
    "Procurement Management",
    "Organizational Development",
    "Process Standardization",
    "Document Control",
    "Tehran",
  ],
  authors: [{ name: identity.name }],
  creator: identity.name,
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: `${siteUrl}/`,
    siteName: identity.name,
    title: `${identity.name} — ${identity.title}`,
    description:
      "Project control, procurement, organizational performance and process standardization across corporate and project environments.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${identity.name} — ${identity.title}`,
    description:
      "Project control, procurement, organizational performance and process standardization.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f4ee",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${newsreader.variable}`}
    >
      <body className="bg-paper text-ink antialiased">
        <a
          href="#overview"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        {/* No-JS release for the entrance primitives and the typed lines: the
            static export bakes `opacity: 0` into every block until its in-view
            animation runs, and the live typing layer starts empty. */}
        <noscript>
          <style>{`[data-enter]{opacity:1!important;transform:none!important}[data-type-live]{display:none!important}[data-type-fallback]{visibility:visible!important}`}</style>
        </noscript>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
