import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/jsonld";
import { roomTypes } from "@/lib/mock/rooms";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "", "/rooms", "/dining", "/facilities", "/offers", "/mice",
    "/experiences", "/gallery", "/about", "/contact", "/faq", "/book",
    "/privacy", "/cookies", "/terms",
  ];
  const pages: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }));
  const rooms: MetadataRoute.Sitemap = roomTypes.map((r) => ({
    url: `${SITE_URL}/rooms/${r.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));
  return [...pages, ...rooms];
}
