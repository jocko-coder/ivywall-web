"use client";

import Script from "next/script";
import { useState } from "react";

/**
 * Loads the Ivy mascot engine + orchestration in order:
 * ivy-avatar.js → ivy-avatar3.js (chroma-key engine) → ivy-mascot.js (dock +
 * hero waver, yawn on Rooms). Chained via onLoad so IvyAvatar exists before the
 * mascot script runs. Additive DOM only — safe with the client router.
 *
 * MASCOT_V: cache-buster. These files live at stable /ivy/*.js URLs, so phones
 * and the CDN can serve a stale copy after a redeploy (this is why old cameos
 * lingered on mobile). BUMP THIS STRING whenever any /ivy/*.js changes — it
 * changes the URL and forces every client to re-fetch the new script.
 */
const MASCOT_V = "11";

export default function IvyMascotLoader() {
  const [a1, setA1] = useState(false);
  const [a3, setA3] = useState(false);
  const v = `?v=${MASCOT_V}`;
  return (
    <>
      <Script src={`/ivy/ivy-avatar.js${v}`} strategy="afterInteractive" onLoad={() => setA1(true)} />
      {a1 && <Script src={`/ivy/ivy-avatar3.js${v}`} strategy="afterInteractive" onLoad={() => setA3(true)} />}
      {a3 && <Script src={`/ivy/ivy-mascot.js${v}`} strategy="afterInteractive" />}
    </>
  );
}
