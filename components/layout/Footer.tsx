"use client";

/**
 * The live footer is rebuilt at runtime by public/iw-redesign.js:
 *   • interior pages → the editorial "#iwf" footer (brand · navigation · newsletter · giant THE IVYWALL wordmark)
 *   • homepage        → the "#iwend" footer
 *
 * The original React footer is intentionally NOT rendered, so the old design
 * can never flash in (on first paint or during client-side navigation).
 */
export default function Footer() {
  return null;
}
