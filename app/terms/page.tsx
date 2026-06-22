import LegalPage from "@/components/legal/LegalPage";
import { pageMeta } from "@/lib/seo/meta";

export const metadata = pageMeta({
  title: "Terms of Use & Booking · The Ivywall Resort-Panglao",
  description:
    "Terms governing use of the Best Western Plus The Ivywall Resort-Panglao website and direct bookings.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use & Booking"
      updated="22 June 2026"
      intro="These terms govern your use of this website and any direct booking you make through it with Best Western Plus The Ivywall Resort-Panglao. By using the site or booking, you agree to them."
    >
      <h2>1. Using the website</h2>
      <p>
        You may use this site for personal, lawful travel-planning and booking. Do not misuse it,
        attempt to disrupt it, or copy its content without permission. Content, branding, and imagery
        are owned by the Resort or its licensors.
      </p>

      <h2>2. Rates and availability</h2>
      <p>
        Rates and availability are shown in good faith and may change until a booking is confirmed.
        Prices are in Philippine Pesos unless another currency is shown; currency conversions are
        indicative. Obvious pricing errors do not bind the Resort.
      </p>

      <h2>3. Bookings and payment</h2>
      <p>
        A reservation is confirmed once you receive a confirmation with a reference code. Payment is
        handled by our secure payment provider. You are responsible for providing accurate guest and
        payment details.
      </p>

      <h2>4. Cancellation and modification</h2>
      <p>
        Cancellation, modification, and no-show terms depend on the rate you select and are shown at
        the time of booking. Some rates are non-refundable. Please review your rate’s policy before
        paying.
      </p>

      <h2>5. Check-in / check-out</h2>
      <p>
        Standard check-in is from 2:00 pm and check-out is until 12:00 nn. Valid government ID is
        required at check-in. Early check-in and late check-out are subject to availability and may
        incur a fee.
      </p>

      <h2>6. Guest conduct</h2>
      <p>
        Guests agree to follow Resort policies and Panglao’s local and environmental regulations.
        The Resort may refuse service or end a stay for unlawful or unsafe conduct.
      </p>

      <h2>7. Liability</h2>
      <p>
        To the extent permitted by law, the Resort is not liable for indirect or consequential loss,
        or for matters beyond our reasonable control (force majeure). Nothing here limits liability
        that cannot be limited by law.
      </p>

      <h2>8. Third-party links</h2>
      <p>
        The site links to third-party services (e.g. the Guest App and the Ivy assistant). We are
        not responsible for their content or policies.
      </p>

      <h2>9. Governing law</h2>
      <p>
        These terms are governed by the laws of the Republic of the Philippines, with venue in the
        courts of Bohol, without prejudice to mandatory consumer protections in your country of
        residence.
      </p>

      <h2>10. Contact</h2>
      <p>
        Best Western Plus The Ivywall Resort-Panglao · P-5 Danao, Panglao, Bohol 6340 ·{" "}
        <a href="mailto:resa@bwplusivywall-panglao.com">resa@bwplusivywall-panglao.com</a> ·
        +63 (038) 412 1128.
      </p>
    </LegalPage>
  );
}
