import LegalPage from "@/components/legal/LegalPage";
import { pageMeta } from "@/lib/seo/meta";

export const metadata = pageMeta({
  title: "Privacy Policy · The Ivywall Resort-Panglao",
  description:
    "How Best Western Plus The Ivywall Resort-Panglao collects, uses, and protects your personal data, in line with the Philippine Data Privacy Act and international standards.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="22 June 2026"
      intro="Best Western Plus The Ivywall Resort-Panglao (“the Resort”, “we”, “us”) respects your privacy. This policy explains what personal data we collect, why, how we protect it, and the rights you have — consistent with the Philippine Data Privacy Act of 2012 (RA 10173) and, for international guests, the GDPR."
    >
      <h2>1. Who we are</h2>
      <p>
        The data controller is Best Western Plus The Ivywall Resort-Panglao, P-5 Danao, Panglao,
        Bohol 6340, Philippines. For any privacy request, contact our Data Protection Officer at{" "}
        <a href="mailto:resa@bwplusivywall-panglao.com">resa@bwplusivywall-panglao.com</a> or
        +63 (038) 412 1128.
      </p>

      <h2>2. What we collect</h2>
      <ul>
        <li><strong>Booking details:</strong> name, email, mobile number, country of residence, stay dates, room and rate selection, add-ons, special requests, and estimated arrival time.</li>
        <li><strong>Payment information:</strong> processed by our payment provider; we do not store full card numbers on our systems.</li>
        <li><strong>Technical data:</strong> IP address, device/browser type, and pages viewed, collected through cookies and similar technologies (see our <a href="/cookies">Cookie Policy</a>).</li>
        <li><strong>Communications:</strong> messages you send us by form, email, chat, or phone.</li>
      </ul>

      <h2>3. How we use your data</h2>
      <ul>
        <li>To process and manage your reservation and stay.</li>
        <li>To send booking confirmations and pre-arrival information.</li>
        <li>To respond to enquiries and provide guest service.</li>
        <li>To operate, secure, and improve our website and measure traffic (only with your consent for non-essential cookies).</li>
        <li>To comply with legal, tax, and regulatory obligations.</li>
        <li>With your consent, to send offers and trip-preparation tips — you can opt out anytime.</li>
      </ul>

      <h2>4. Legal bases</h2>
      <p>
        We rely on the performance of your booking contract, your consent (e.g. marketing and
        analytics cookies), our legitimate interests in running and securing the Resort, and
        compliance with law.
      </p>

      <h2>5. Sharing</h2>
      <p>
        We share data only as needed with: our reservation system (Oracle OPERA), our payment
        gateway, IT and hosting providers, and authorities where required by law. We do not sell
        your personal data.
      </p>

      <h2>6. Retention</h2>
      <p>
        We keep booking and transaction records for as long as required for service, accounting,
        and legal obligations, then securely delete or anonymise them.
      </p>

      <h2>7. Your rights</h2>
      <p>
        You may request access, correction, deletion, objection, restriction, or portability of your
        data, and withdraw consent at any time. Email{" "}
        <a href="mailto:resa@bwplusivywall-panglao.com">resa@bwplusivywall-panglao.com</a>. You may
        also complain to the National Privacy Commission (Philippines) or your local data-protection
        authority.
      </p>

      <h2>8. Security</h2>
      <p>
        We use encryption in transit, access controls, and reputable processors. No method is 100%
        secure, but we take reasonable steps to protect your data.
      </p>

      <h2>9. Children</h2>
      <p>The website is intended for adults making travel arrangements; we do not knowingly collect data from children without parental consent.</p>

      <h2>10. Changes</h2>
      <p>We may update this policy; the “last updated” date above reflects the latest version.</p>
    </LegalPage>
  );
}
