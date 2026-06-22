import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/jsonld";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Keep the checkout funnel + API out of the index (thin/transient pages).
        disallow: [
          "/api/",
          "/book/results",
          "/book/room",
          "/book/addons",
          "/book/details",
          "/book/payment",
          "/book/confirmation",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
