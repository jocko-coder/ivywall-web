import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo/meta";

export const metadata: Metadata = pageMeta({
  title: "Reserve a Stay · The Ivywall Resort-Panglao",
  description:
    "Reserve your stay at Best Western Plus The Ivywall Resort-Panglao. Instant confirmation, free Wi-Fi for every guest, and a warm Boholano welcome on Alona Beach.",
  path: "/book",
});

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <div className="bg-sand min-h-screen pb-24">{children}</div>;
}
