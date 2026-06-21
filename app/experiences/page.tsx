import type { Metadata } from "next";
import { ExternalLink, Clock } from "lucide-react";
import SectionDivider from "@/components/ui/SectionDivider";
import IllustrationSpot from "@/components/ui/IllustrationSpot";
import Button from "@/components/ui/Button";
import ExperiencesBento from "@/components/sections/ExperiencesBento";
import { pageMeta } from "@/lib/seo/meta";

export const metadata: Metadata = pageMeta({
  title: "Experiences · Explore Bohol · The Ivywall Resort-Panglao",
  description:
    "Curated Bohol adventures — Balicasag dolphin watching, Chocolate Hills, Tarsier Sanctuary, Loboc River cruise, Hinagdanan Cave, and Panglao wall diving.",
  path: "/experiences",
});

export default function ExperiencesPage() {
  return (
    <>
      <ExperiencesBento link="https://ivywall-app.vercel.app/" />
      <div className="container-x -mt-6 pb-16">
        <a href="https://ivywall-app.vercel.app/" target="_blank" rel="noreferrer">
          <Button variant="primary" trailingIcon={<ExternalLink className="h-3.5 w-3.5" />}>
            Open the tour guide (Guest App)
          </Button>
        </a>
        <p className="mt-8 text-[11px] leading-relaxed text-clay/70">
          Photos courtesy of Wikimedia Commons contributors under CC BY-SA 3.0 / 4.0 licences. Edited versions, if any, are released under the same licence.
        </p>
      </div>
    </>
  );
}
