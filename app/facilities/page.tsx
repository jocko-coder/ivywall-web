import type { Metadata } from "next";
import FacilitiesContent from "@/components/sections/FacilitiesContent";
import { pageMeta } from "@/lib/seo/meta";

export const metadata: Metadata = pageMeta({
  title: "Facilities & Wellness · The Ivywall Resort-Panglao",
  description:
    "A free-form pool, beach access and seaside garden, fitness centre, children's playground, resort-wide free Wi-Fi, and event spaces — everything a few warm Boholano steps apart.",
  path: "/facilities",
});

export default function Page() {
  return <FacilitiesContent />;
}
