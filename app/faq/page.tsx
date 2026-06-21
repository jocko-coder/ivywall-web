"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionDivider from "@/components/ui/SectionDivider";
import CtaFooter from "@/components/sections/CtaFooter";

const FAQS = [
  {
    category: "Getting Here",
    items: [
      {
        q: "How do I get to The Ivywall from the airport?",
        a: "The resort is just 3.4 km from Bohol-Panglao International Airport (BPIA) — about 8–12 minutes by car. We offer a complimentary airport transfer with select packages, or you can arrange one through our concierge at resa@bwplusivywall-panglao.com. Taxis and ride-hailing apps are also available at the airport.",
      },
      {
        q: "How do I get to Bohol from Manila or Cebu?",
        a: "From Manila: fly direct to Bohol-Panglao International Airport (BPIA) — flights take about 1 hour 20 minutes. From Cebu: fly to BPIA (25 minutes) or take a fast ferry from Cebu City port to Tagbilaran (about 2 hours), then a 30-minute drive to the resort.",
      },
      {
        q: "Do you have parking?",
        a: "Yes, complimentary valet parking is available for all in-house guests. Self-parking is also available on property.",
      },
    ],
  },
  {
    category: "Check-In & Check-Out",
    items: [
      {
        q: "What are check-in and check-out times?",
        a: "Standard check-in is at 2:00 PM and check-out is at 12:00 PM (noon). Early check-in and late check-out are subject to availability — contact us in advance and we will do our best to accommodate.",
      },
      {
        q: "Can I check in early or check out late?",
        a: "We are happy to try. Please email resa@bwplusivywall-panglao.com or call +63 917 166 2184 at least 24 hours before arrival. Our 'Touchdown · Free Transfer' package includes a guaranteed late checkout.",
      },
    ],
  },
  {
    category: "Rooms & Amenities",
    items: [
      {
        q: "Is breakfast included?",
        a: "Complimentary breakfast is included with select rate plans. Our 'Breakfast On Us' package includes daily breakfast at Alon All Day Dining for all guests. Check your rate details at booking — if in doubt, contact us and we will confirm.",
      },
      {
        q: "Is Wi-Fi free?",
        a: "Yes — resort-wide high-speed Wi-Fi is complimentary for all in-house guests, in rooms and all public areas.",
      },
      {
        q: "Do the rooms have air conditioning, smart TV, and a safe?",
        a: "All rooms include air conditioning, a smart TV with cable channels, and an in-room electronic safe. Deluxe, Premier, and Family rooms also include a mini-bar and bathrobes and slippers.",
      },
      {
        q: "Is the resort wheelchair accessible?",
        a: "Yes. The Ivywall has wheelchair-accessible rooms, step-free entry, elevator access, accessible restrooms, ramps, and designated parking. Please let us know your requirements at booking so we can prepare accordingly.",
      },
      {
        q: "Is the resort smoke-free?",
        a: "Yes — The Ivywall is a 100% smoke-free resort. Designated outdoor areas are available.",
      },
    ],
  },
  {
    category: "Dining",
    items: [
      {
        q: "How many restaurants does the resort have?",
        a: "Three venues: Alon All Day Dining (6:00 AM – 10:30 PM), Teraza Rooftop Deck (4:00 PM – 11:00 PM), and Agos Pool Bar (10:00 AM – 6:00 PM). Room service is also available.",
      },
      {
        q: "Can dietary requirements be accommodated?",
        a: "Yes. Our kitchen can accommodate vegetarian, vegan, gluten-free, and allergen-specific requests. Please inform us in advance so our team can prepare — contact resa@bwplusivywall-panglao.com or let your server know on arrival.",
      },
      {
        q: "Do I need to reserve a table at Teraza?",
        a: "For larger groups or special occasions (anniversaries, honeymoon dinners), we recommend reserving in advance. Contact our concierge and we will arrange it.",
      },
    ],
  },
  {
    category: "Activities & Experiences",
    items: [
      {
        q: "Can I book island tours through the resort?",
        a: "Yes — our tour desk and concierge can arrange all major Bohol experiences: Balicasag dolphin watching, Chocolate Hills, Tarsier Sanctuary, Loboc River Cruise, Hinagdanan Cave, and Panglao wall diving. Tours can be added at booking or requested on arrival.",
      },
      {
        q: "Is the resort on the beach?",
        a: "Yes. The Ivywall has direct access to Alona Beach, one of the most celebrated shores in Bohol. Our seaside garden leads directly to the sand.",
      },
      {
        q: "Is there a spa?",
        a: "Yes — Fiora Spa is on property, offering massage and wellness treatments. Contact our front desk or concierge to book a session during your stay.",
      },
      {
        q: "Is the pool open to non-guests?",
        a: "The free-form pool is exclusively for in-house guests. Pool hours are 6:00 AM to 10:00 PM daily.",
      },
    ],
  },
  {
    category: "Bookings & Policies",
    items: [
      {
        q: "What is your cancellation policy?",
        a: "Most standard rates offer free cancellation up to 48 hours before arrival. Package rates may have different terms. Your specific policy is shown at the time of booking — look for the rate conditions before confirming. For questions, contact resa@bwplusivywall-panglao.com.",
      },
      {
        q: "Why should I book direct instead of an OTA?",
        a: "Booking direct gives you our best available rate, guaranteed. You also get direct access to our team for upgrades, early check-in requests, and special arrangements — things that are hard to arrange through a third-party platform.",
      },
      {
        q: "Do you accept credit cards?",
        a: "Yes — we accept major credit cards (Visa, Mastercard, JCB). For specific payment enquiries, contact our reservations team.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-clay/10 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
      >
        <span className="text-[15px] font-semibold text-ink">{q}</span>
        <ChevronDown
          className={`mt-0.5 h-4 w-4 shrink-0 text-navy transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[14.5px] leading-relaxed text-clay">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  return (
    <div>
      <div className="container-x pt-10 pb-16 md:pt-14">
        <div className="max-w-2xl">
          <SectionDivider label="FAQ" className="max-w-[100px]" />
          <h1 className="mt-3 font-display text-4xl text-ink leading-tight md:text-5xl">
            Answers before you arrive.
          </h1>
          <p className="mt-3 text-[15px] text-clay">
            Everything you need to know about staying at The Ivywall — from getting here to checking out.
            Can't find your answer?{" "}
            <a href="/contact" className="font-semibold text-navy hover:underline">Contact us directly</a>.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-[240px_1fr]">
          {/* Sticky category nav — desktop */}
          <nav className="hidden self-start md:sticky md:top-28 md:block">
            <ul className="space-y-1 text-[13px]">
              {FAQS.map((cat) => (
                <li key={cat.category}>
                  <a
                    href={`#${cat.category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                    className="block rounded-xl px-3 py-2 text-clay transition hover:bg-pearl-warm hover:text-navy"
                  >
                    {cat.category}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* FAQ accordion */}
          <div className="space-y-10">
            {FAQS.map((cat) => (
              <section
                key={cat.category}
                id={cat.category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}
              >
                <h2 className="mb-1 font-display text-[13px] uppercase tracking-[0.22em] text-navy">
                  {cat.category}
                </h2>
                <div className="rounded-3xl border border-clay/10 bg-pearl px-6 shadow-soft">
                  {cat.items.map((item) => (
                    <FaqItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <CtaFooter />
    </div>
  );
}
