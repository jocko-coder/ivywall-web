import type { Metadata } from "next";
import ExperiencesPageContent from "@/components/sections/ExperiencesPage";
import { pageMeta } from "@/lib/seo/meta";

export const metadata: Metadata = pageMeta({
  title: "Experiences · Explore Bohol · The Ivywall Resort-Panglao",
  description:
    "Curated Bohol adventures — Balicasag dolphin watching, Chocolate Hills, Tarsier Sanctuary, Loboc River cruise, Hinagdanan Cave, and Panglao wall diving.",
  path: "/experiences",
});

export default function Page() {
  return <ExperiencesPageContent />;
}
