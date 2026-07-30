import type { Metadata } from "next";
import "@fontsource/anton/400.css";
import "@fontsource/karla/400.css";
import "@fontsource/karla/600.css";
import "@fontsource/karla/700.css";
import "./globals.css";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://yari.wtf"),
  title: {
    default: "YARI.WTF — Producer",
    template: "%s | YARI.WTF",
  },
  description:
    "Original beats, candid process, and production built around the artist.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "YARI.WTF",
    title: "YARI.WTF — Beats with fingerprints on them",
    description:
      "Original production, candid process, and a direct line to build your next record with Yari.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "YARI.WTF — Beats with fingerprints on them",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YARI.WTF — Beats with fingerprints on them",
    description:
      "Original production, candid process, and a direct line to build your next record with Yari.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
