import type { Metadata, Viewport } from "next";
import "@fontsource/anton/400.css";
import "@fontsource/karla/400.css";
import "@fontsource/karla/600.css";
import "@fontsource/karla/700.css";
import "./globals.css";
import { ActionDock } from "./components/action-dock";
import { MetaPixel } from "./components/meta-pixel";
import { PixelRouteTracker } from "./components/pixel-route-tracker";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { shopUrl, siteUrl, socialLinks } from "./site-data";

const defaultTitle = "Type Beats by Yari: Underground, Rage & Detroit Beats";
const defaultDescription =
  "Buy underground, rage, and Detroit type beats by Yari, an Atlanta producer. Playboi Carti, Ken Carson, OSAMASON, and Rio Da Yung OG type beats. Leases from $15.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | YARI.WTF",
  },
  description: defaultDescription,
  applicationName: "YARI.WTF",
  authors: [{ name: "Yari", url: siteUrl }],
  creator: "Yari",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    siteName: "YARI.WTF",
    locale: "en_US",
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "YARI.WTF type beats: underground, rage, and Detroit beats by Yari",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Person", "MusicGroup"],
      "@id": `${siteUrl}/#yari`,
      name: "Yari",
      alternateName: ["YARI.WTF", "yari.wtf", "prd.yari"],
      url: siteUrl,
      image: `${siteUrl}/images/yari-close.jpg`,
      description:
        "Atlanta music producer making underground, rage, Detroit, and melodic trap type beats, and producing songs for independent artists.",
      genre: ["Hip hop", "Trap", "Rage", "Detroit rap", "Underground rap"],
      address: { "@type": "PostalAddress", addressLocality: "Atlanta", addressRegion: "GA", addressCountry: "US" },
      sameAs: [...socialLinks.map((s) => s.href)],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "YARI.WTF",
      inLanguage: "en-US",
      publisher: { "@id": `${siteUrl}/#yari` },
    },
    {
      "@type": "OnlineStore",
      "@id": `${siteUrl}/#store`,
      name: "YARI.WTF Beat Store",
      url: shopUrl,
      founder: { "@id": `${siteUrl}/#yari` },
      description: "Beat leases and exclusives by Yari, sold through Traktrain.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="" />
        <MetaPixel />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <div id="main">{children}</div>
        <SiteFooter />
        <ActionDock />
        <PixelRouteTracker />
      </body>
    </html>
  );
}
