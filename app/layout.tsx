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
    default: "YARI.WTF | Atlanta Music Producer, Beats & FL Studio Lessons",
    template: "%s | YARI.WTF",
  },
  description:
    "YARI.WTF is an Atlanta-based music producer, beat maker, and FL Studio teacher offering beats, custom production, and remote sessions.",
  keywords: [
    "Atlanta music producer",
    "Atlanta beat maker",
    "FL Studio lessons",
    "music production lessons",
    "custom beat production",
  ],
  alternates: {
    canonical: "https://yari.wtf",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "YARI.WTF",
    title: "YARI.WTF | Atlanta Music Producer, Beats & FL Studio Lessons",
    description:
      "Atlanta-based music production, beats, custom sessions, and FL Studio lessons from YARI.WTF.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "YARI.WTF Atlanta music producer and beat maker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YARI.WTF | Atlanta Music Producer, Beats & FL Studio Lessons",
    description:
      "Atlanta-based music production, beats, custom sessions, and FL Studio lessons from YARI.WTF.",
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
