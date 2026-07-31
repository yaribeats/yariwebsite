import type { Metadata } from "next";
import "@fontsource/anton/400.css";
import "@fontsource/karla/400.css";
import "@fontsource/karla/600.css";
import "@fontsource/karla/700.css";
import "./globals.css";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { Cart } from "./components/cart";
import { CalendarWidget } from "./components/calendar-widget";

export const metadata: Metadata = {
  metadataBase: new URL("https://yari.wtf"),
  title: {
    default: "YARI.WTF — Beats and production",
    template: "%s | YARI.WTF",
  },
  description:
    "Hear YARI.WTF beats, watch the process, and book production built around the artist.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "YARI.WTF",
    title: "YARI.WTF — Beats and production",
    description:
      "Hear YARI.WTF beats, watch the process, and book production built around the artist.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "YARI.WTF — Beats and production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YARI.WTF — Beats and production",
    description:
      "Hear YARI.WTF beats, watch the process, and book production built around the artist.",
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
        <Cart />
        <CalendarWidget />
        <SiteFooter />
      </body>
    </html>
  );
}
