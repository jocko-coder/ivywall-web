import type { Metadata } from "next";
import { SITE_URL } from "./jsonld";

const SITE_NAME = "Best Western Plus The Ivywall Resort-Panglao";

export function pageMeta({
  title,
  description,
  path = "/",
  image = "/og/home.jpg",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        en: url,
        tl: url + "?lang=tl",
        "zh-CN": url + "?lang=zh-CN",
        "zh-HK": url + "?lang=zh-HK",
        ja: url + "?lang=ja",
        ko: url + "?lang=ko",
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_PH",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}
