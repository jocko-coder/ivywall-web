import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-[70vh] flex-col items-center justify-center overflow-hidden">
      <img
        src="/photos/BWPlus_Ivywall_01_Aerial_Beach.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-palm-night/75 backdrop-blur-sm" />
      <div className="container-x text-center text-pearl">
        <div className="text-[11px] uppercase tracking-[0.28em] text-gold-glow">404 · lost on Panglao</div>
        <h1 className="mt-3 font-display text-5xl text-pearl md:text-6xl">This page drifted off the map.</h1>
        <p className="mx-auto mt-3 max-w-md text-[15px] text-pearl/75">
          Let's get you back to the resort.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/"><Button variant="amber">Back home</Button></Link>
          <Link href="/book"><Button variant="outline">Book a stay</Button></Link>
        </div>
      </div>
    </div>
  );
}
