import "./globals.css";
import Script from "next/script";
import type { Metadata, Viewport } from "next";
import { Young_Serif, Hanken_Grotesk, Pinyon_Script } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import IvyAgent from "@/components/fx/IvyAgent";
import CookieConsent from "@/components/fx/CookieConsent";
import { Analytics } from "@vercel/analytics/react";
import SmoothScroll from "@/components/fx/SmoothScroll";
import CustomCursor from "@/components/fx/CustomCursor";
import ScrollProgressBar from "@/components/fx/ScrollProgressBar";
import Providers from "./providers";
import { pageMeta } from "@/lib/seo/meta";
import { lodgingJsonLd } from "@/lib/seo/jsonld";

const display = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Handwritten accent for the hero's gold "a Boholano welcome." line.
const script = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  ...pageMeta({
    title: "Best Western Plus The Ivywall Resort-Panglao · Bohol",
    description:
      "The first international-chain resort in Bohol. 80 rooms in native Filipino detail on Alona Beach, Panglao. Book direct on the official site for the best rate.",
    path: "/",
  }),
};

export const viewport: Viewport = {
  themeColor: "#F5700A",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${script.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd()) }}
        />
        {/* Preload the hero video's first frame (used by the intro + hero). */}
        <link rel="preload" as="image" href="/clips/ourstory_poster.jpg" fetchPriority="high" />
        {/* iw-instant: render-blocking guard so the redesign paints first — hides the
            original chrome/sections before first paint; iw-redesign.js rebuilds them. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{var p=location.pathname;if(p.length>1&&p.slice(-1)==="/")p=p.slice(0,-1);var d=document.documentElement,c="header[data-nav]{display:none!important}";if(p!==""&&p!=="/"&&p!=="/index.html"){d.className+=" iw-int";var m=p.match(/^\\/(rooms(\\/(superior|deluxe|premier|family))?|dining|experiences|facilities|mice|offers|gallery|about|contact|faq)$/);if(m)d.setAttribute("data-iwxp",p.slice(1).replace(/\\//g,"-"));c+=\'html.iw-int footer[class*="bg-coral-deep"]{display:none!important}html[data-iwxp] main>:not([data-iwx]){display:none!important}html.iw-int,html.iw-int body{background:#faf9f6}html[data-iwxp="rooms"],html[data-iwxp="rooms"] body{background:#0c1116}\';}var s=document.createElement("style");s.id="iw-instant-css";s.textContent=c;(document.head||d).appendChild(s);}catch(e){}})();',
          }}
        />
      </head>
      <body>
        <Script src="/iw-redesign.js?v=9" strategy="beforeInteractive" />
        <Providers>
          <CustomCursor />
          <ScrollProgressBar />
          <SmoothScroll />
          <Header />
          <main>{children}</main>
          <Footer />
          <IvyAgent />
          <CookieConsent />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
