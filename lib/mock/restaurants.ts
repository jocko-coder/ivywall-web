import type { Restaurant } from "../types";

// Three venues: Alon All Day Dining, Teraza Rooftop Deck, and Agos Pool Bar.
export const restaurants: Restaurant[] = [
  {
    id: "rest-alon",
    slug: "alon-all-day-dining",
    name: "Alon All Day Dining",
    tagline: "Memorable mornings, slow-paced suppers, honest Filipino flavours.",
    cuisine: "Filipino · International",
    hours: "6:00am – 10:30pm · Daily",
    setting: "Garden-side, indoor & alfresco",
    signature: [
      "Signature seafood paella",
      "Bohol-style chicken adobo with garlic rice",
      "Kinilaw na tanigue · calamansi & coconut",
      "Halo-halo with ube ice cream",
    ],
    gradient: "from-palm via-palm-deep to-ink",
    photo: "/photos/BWPlus_Ivywall_07_Restaurant.jpg",
    signaturePhoto: "/photos/BWPlus_Ivywall_21_Boodle_Platter.jpg",
  },
  {
    id: "rest-teraza",
    slug: "teraza-rooftop-deck",
    name: "Teraza Rooftop Deck",
    tagline: "Sunset cocktails crafted with local ingredients. Dining under the stars.",
    cuisine: "Cocktails · Tapas · Modern Filipino",
    hours: "4:00pm – 11:00pm · Daily",
    setting: "Rooftop · open-air · sea-facing",
    signature: [
      "Calamansi mojito with Tanduay rum",
      "Bohol honey-glazed grilled prawns",
      "Lechon belly sliders with mango achara",
      "Latik-toasted coconut chocolate tart",
    ],
    gradient: "from-coral via-coral-deep to-ink",
    photo: "/photos/BWPlus_Ivywall_09_Rooftop_Bar_Night.jpg",
    signaturePhoto: "/photos/BWPlus_Ivywall_22_Banana_Cocktail.jpg",
  },
  {
    id: "rest-agos",
    slug: "agos-pool-bar",
    name: "Agos Pool Bar",
    tagline: "Cold drinks, warm sun, and the sound of the pool all afternoon.",
    cuisine: "Bar Bites · Refreshments",
    hours: "10:00am – 6:00pm · Daily",
    setting: "Poolside · open-air",
    signature: [
      "Buko pandan shake · fresh coconut",
      "Salpicao slider bites",
      "Mango Float with Bohol honey",
      "Local craft beer selection",
    ],
    gradient: "from-amber-soft via-amber to-terracotta",
    photo: "/photos/BWPlus_Ivywall_15_Agos_Pool_Bar.jpg",
    signaturePhoto: undefined,
  },
];
