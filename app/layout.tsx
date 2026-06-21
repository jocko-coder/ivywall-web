import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Young_Serif, Hanken_Grotesk, Pinyon_Script } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyBookBar from "@/components/layout/StickyBookBar";
import FloatingBookCTA from "@/components/layout/FloatingBookCTA";
import IvyAgent from "@/components/fx/IvyAgent";
import IvyMascotLoader from "@/components/fx/IvyMascotLoader";
import SmoothScroll from "@/components/fx/SmoothScroll";
import CinematicIntro from "@/components/fx/CinematicIntro";
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
  themeColor: "#C4540A",
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
        {/* Preload ALL hero carousel photos so the crossfade never lands
            on a not-yet-decoded image (which used to leak the dark
            section bg through, looking like the hero "glitched out"). */}
        <link rel="preload" as="image" href="/photos/BWPlus_Ivywall_17_Facade_Teraza.jpg" fetchPriority="high" />
        <link rel="preload" as="image" href="/photos/BWPlus_Ivywall_01_Aerial_Beach.jpg" fetchPriority="high" />
        <link rel="preload" as="image" href="/photos/BWPlus_Ivywall_12_Morning_Teraza.jpg" />
        <link rel="preload" as="image" href="/photos/BWPlus_Ivywall_09_Rooftop_Bar_Night.jpg" />
      </head>
      <body>
        <Providers>
          <CustomCursor />
          <ScrollProgressBar />
          <SmoothScroll />
          <CinematicIntro />
          <Header />
          <main>{children}</main>
          <Footer />
          <StickyBookBar />
          <FloatingBookCTA />
          <IvyAgent />
          <IvyMascotLoader />
        </Providers>
      </body>
    </html>
  );
}
