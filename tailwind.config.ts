import type { Config } from "tailwindcss";

/**
 * ORANGE VERSION palette:
 *  - Ivy Orange (#F5700A / #C4540A) — Ivy the starfish, CTAs, brand
 *  - Palm green (#4F7C5A / #2F5238) — ivy panels, nature sections
 *  - Gold/amber (#D4A24C / #F0C879) — premium accents, BW badge
 *  - Warm Beige (#FDF8F0) — base background (richer than pearl)
 *  - Ink (#0D1B2A) — deep navy for dark sections (pairs with orange)
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // BW Plus parent brand
        navy: {
          DEFAULT: "#0B2545",
          deep: "#06182E",
          ink: "#020A18",
          soft: "#1F3A66",
        },
        gold: {
          DEFAULT: "#D4A24C",
          deep: "#A87A2E",
          glow: "#F0C879",
          warm: "#F3DBA8",
          soft: "#FAEDD0",
        },
        // Ivy Orange — primary brand colour (replaces coral)
        coral: {
          DEFAULT: "#F5700A",
          deep: "#C4540A",
          soft: "#FDDDC0",
        },
        turquoise: {
          DEFAULT: "#1FA8B5",
          deep: "#0E6973",
          light: "#A4DDE3",
          pool: "#3FB6C2",
        },
        terracotta: {
          DEFAULT: "#BE5E43",
          deep: "#8E422E",
        },
        palm: {
          DEFAULT: "#C4540A",   // warm burnt orange (was green)
          deep: "#8B3D0A",      // deep amber-brown
          night: "#071528",     // deepest navy (dark sections, hero bg)
        },
        sand: {
          DEFAULT: "#F6F0E4",
          deep: "#EBE1C9",
        },
        // Warm beige replaces cool pearl
        pearl: {
          DEFAULT: "#FDF8F0",
          warm: "#FAF0DC",
          shell: "#F5E8CA",
        },
        ink: "#0D1B2A",
        clay: "#4A5568",
        amber: {
          DEFAULT: "#D4A24C",
          deep: "#A87A2E",
          glow: "#F0C879",
          warm: "#F3DBA8",
          soft: "#FAEDD0",
        },
        seaglass: {
          DEFAULT: "#3FB6C2",
          light: "#A4DDE3",
        },
        sunrise: {
          DEFAULT: "#F0C879",
        },
        rose: "#D89BAF",
      },
      fontFamily: {
        display: ["var(--font-display)", "Fraunces", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        smallCaps: "0.24em",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        organic: "32% 68% 70% 30% / 30% 30% 70% 70%",
      },
      boxShadow: {
        soft: "0 8px 24px -8px rgba(13, 27, 42, 0.18), 0 2px 6px -2px rgba(13, 27, 42, 0.06)",
        warm: "0 18px 36px -18px rgba(196, 84, 10, 0.40), 0 4px 12px -6px rgba(245, 112, 10, 0.22)",
        deep: "0 32px 48px -24px rgba(13, 27, 42, 0.45)",
        capiz: "0 1px 0 rgba(255,255,255,0.85) inset, 0 12px 30px -12px rgba(13, 27, 42, 0.22), 0 2px 6px rgba(13, 27, 42, 0.06)",
        glow: "0 0 30px rgba(245, 112, 10, 0.55)",
        glowAmber: "0 0 36px rgba(245, 112, 10, 0.85), 0 0 14px rgba(196, 84, 10, 0.45)",
        bezel: "0 1px 0 rgba(255,255,255,0.55) inset, 0 -1px 0 rgba(0,0,0,0.12) inset, 0 10px 24px -10px rgba(0,0,0,0.25)",
      },
      backgroundImage: {
        banig: "repeating-linear-gradient(45deg, rgba(245,112,10,0.22) 0 2px, transparent 2px 7px), repeating-linear-gradient(-45deg, rgba(196,84,10,0.22) 0 2px, transparent 2px 7px)",
        paper: "radial-gradient(circle at 20% 10%, rgba(245,112,10,0.10), transparent 60%), radial-gradient(circle at 80% 90%, rgba(212,162,76,0.10), transparent 60%)",
        midnight: "linear-gradient(180deg, #0D1B2A 0%, #071528 45%, #030D1A 100%)",
        sunrise: "linear-gradient(180deg, #F0C879 0%, #D4A24C 40%, #F5700A 100%)",
        palmdeep: "linear-gradient(180deg, #FDDDC0 0%, #F5700A 45%, #C4540A 100%)",
        palmsky: "linear-gradient(180deg, #FDDDC0 0%, #FAF0DC 55%, #FDF8F0 100%)",
      },
      keyframes: {
        bob: { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-3px)" } },
        glow: {
          "0%,100%": { filter: "drop-shadow(0 0 8px rgba(245,112,10,0.55))" },
          "50%": { filter: "drop-shadow(0 0 18px rgba(245,112,10,0.95))" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        kenburns: {
          "0%": { transform: "scale(1.04) translate(0,0)" },
          "100%": { transform: "scale(1.16) translate(-1.5%, -1%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        bob: "bob 4s ease-in-out infinite",
        glow: "glow 3.4s ease-in-out infinite",
        shimmer: "shimmer 2.6s ease-in-out infinite",
        fadeUp: "fadeUp .5s ease-out both",
        kenburns: "kenburns 22s ease-out both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
