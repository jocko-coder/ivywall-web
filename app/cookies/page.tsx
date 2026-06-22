import LegalPage from "@/components/legal/LegalPage";
import { pageMeta } from "@/lib/seo/meta";

export const metadata = pageMeta({
  title: "Cookie Policy · The Ivywall Resort-Panglao",
  description:
    "What cookies Best Western Plus The Ivywall Resort-Panglao uses, why, and how you can control them.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="22 June 2026"
      intro="This policy explains how we use cookies and similar technologies on our website, and how you can control them. For how we handle personal data more broadly, see our Privacy Policy."
    >
      <h2>What cookies are</h2>
      <p>
        Cookies are small text files stored on your device that help a website function, remember
        your preferences, and understand how it is used.
      </p>

      <h2>Categories we use</h2>
      <h3>Essential (always on)</h3>
      <p>
        Needed for the site to work — e.g. remembering your in-progress booking (your dates, room,
        and guest details) and your language and currency choice. These do not require consent
        because the site cannot function without them.
      </p>
      <h3>Analytics (consent required)</h3>
      <p>
        Help us understand traffic and improve the experience (e.g. which pages are visited). These
        run only after you choose “Accept all.”
      </p>
      <h3>Marketing (consent required)</h3>
      <p>
        Used to measure and personalise offers. These run only with your consent and are off by
        default.
      </p>

      <h2>Managing your choices</h2>
      <p>
        When you first visit, our cookie banner lets you <strong>Accept all</strong> or keep{" "}
        <strong>Essential only</strong>. You can change your mind anytime by clearing this site’s
        data in your browser, which will bring the banner back. You can also block or delete cookies
        in your browser settings — note that disabling essential cookies may break booking.
      </p>

      <h2>Third parties</h2>
      <p>
        Some features rely on trusted third parties (our payment gateway, the embedded Ivy assistant,
        and — if enabled — privacy-friendly analytics). They may set their own cookies governed by
        their policies.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href="mailto:resa@bwplusivywall-panglao.com">resa@bwplusivywall-panglao.com</a>.
      </p>
    </LegalPage>
  );
}
