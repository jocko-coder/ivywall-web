export interface Facility {
  id: string;
  name: string;
  description: string;
  hours: string;
  icon: "pool" | "spa" | "gym" | "kids" | "wifi" | "mice" | "lounge";
}

export const facilities: Facility[] = [
  {
    id: "fac-pool",
    name: "Swimming Pool",
    description: "Free-form pool at the centre of the resort — shaded daybeds, sun loungers, and direct access from Premier rooms.",
    hours: "6:00am – 10:00pm",
    icon: "pool",
  },
  {
    id: "fac-beach",
    name: "Beach Access & Seaside Garden",
    description: "Direct access to Panglao's white-sand beach via a quiet seaside garden — palms, banig benches, and morning yoga.",
    hours: "Sunrise – sunset",
    icon: "spa",
  },
  {
    id: "fac-gym",
    name: "Fitness Centre",
    description: "Cardio + strength equipment for guests, with sunrise views and complimentary towels and water.",
    hours: "5:30am – 10:00pm",
    icon: "gym",
  },
  {
    id: "fac-kids",
    name: "Children's Playground",
    description: "Shaded play structure with a small lawn — perfect for golden-hour wind-downs and family afternoons.",
    hours: "All day",
    icon: "kids",
  },
  {
    id: "fac-wifi",
    name: "Resort-Wide Free Wi-Fi",
    description: "Complimentary Wi-Fi throughout the property — strong enough for video calls and streaming.",
    hours: "24/7",
    icon: "wifi",
  },
  {
    id: "fac-mice",
    name: "Meetings & Events",
    description: "Three flexible meeting rooms, a business centre, and palm-shaded outdoor venues for weddings and team-building.",
    hours: "By arrangement",
    icon: "mice",
  },
];
