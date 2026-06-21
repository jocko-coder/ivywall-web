"use client";

import { ReactNode } from "react";
import { I18nProvider } from "@/lib/i18n/I18nProvider";
import { CurrencyProvider } from "@/lib/store/currency";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <CurrencyProvider>{children}</CurrencyProvider>
    </I18nProvider>
  );
}
