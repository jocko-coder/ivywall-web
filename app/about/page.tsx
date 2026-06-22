import type { Metadata } from "next";
import AboutStory from "@/components/sections/AboutStory";
import LocationBand from "@/components/sections/LocationBand";
import { pageMeta } from "@/lib/seo/meta";

export const metadata: Metadata = pageMeta({
  title: "About · The Ivywall Resort-Panglao",
  description:
    "The first international-chain resort in Bohol — a four-star Best Western Plus on Alona Beach, Panglao, built in native Filipino detail with a Boholano soul.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div>
      <AboutStory />
      <LocationBand />
    </div>
  );
}
