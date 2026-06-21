import type { Metadata } from "next";
import RoomsOTA from "@/components/sections/RoomsOTA";
import { pageMeta } from "@/lib/seo/meta";

export const metadata: Metadata = pageMeta({
  title: "Rooms & Suites · The Ivywall Resort-Panglao",
  description:
    "Four room categories — Superior, Deluxe with pool view, Premier with pool access, and the Family Room. Soft Boholano luxury throughout.",
  path: "/rooms",
});

export default function RoomsPage() {
  return <RoomsOTA />;
}
