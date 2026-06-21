export const SITE_URL = "https://bwplusivywall-panglao.com"; // canonical resort domain
export const APP_URL = "https://ivywall-app.vercel.app";

export function lodgingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Resort",
    name: "Best Western Plus The Ivywall Resort-Panglao",
    description:
      "The first international-chain resort in Bohol — 80 rooms in native Filipino detail on Panglao Island, with direct beach access, a free-form pool, and the Teraza Rooftop Deck.",
    url: SITE_URL,
    image: [`${SITE_URL}/og/home.jpg`],
    telephone: "+63 (038) 412 1128",
    priceRange: "₱₱₱",
    numberOfRooms: 80,
    address: {
      "@type": "PostalAddress",
      streetAddress: "P-5 Danao",
      addressLocality: "Panglao",
      addressRegion: "Bohol",
      postalCode: "6340",
      addressCountry: "PH",
    },
    geo: { "@type": "GeoCoordinates", latitude: 9.5566, longitude: 123.7560 },
    starRating: { "@type": "Rating", ratingValue: "4" },
    amenityFeature: [
      "Swimming pool",
      "Beach access",
      "Seaside garden",
      "Fitness centre",
      "Children's playground",
      "Two restaurants",
      "Three meeting rooms",
      "Business centre",
      "Free Wi-Fi",
    ],
    brand: { "@type": "Brand", name: "Best Western Plus" },
    sameAs: [APP_URL],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: 1240,
    },
  };
}

export function offerJsonLd(offerName: string, price: number) {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: offerName,
    priceCurrency: "PHP",
    price,
    availability: "https://schema.org/InStock",
    url: SITE_URL,
  };
}
