import React from "react";
import type { Viewport } from "next";

import "@/styles/global.css";

import { UserProvider } from "@/contexts/user-context";
import { LocalizationProvider } from "@/components/core/localization-provider";
import { ThemeProvider } from "@/components/core/theme-provider/theme-provider";
import { fredoka, roboto } from "@/utils/fonts";
import initTranslations from "@/utils/i18n";
import TranslationsProvider from "@/contexts/translation.provider";
import NextTopLoader from "@/components/core/NextTopLoader";

export const viewport = {
  width: "device-width",
  initialScale: 1,
} satisfies Viewport;

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
}: LayoutProps) {
  console.log("locale --", locale);
  const { options } = await initTranslations(locale == "en" ? locale : "vn", [
    "translation",
  ]);

  return (
    <html lang={locale}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body suppressHydrationWarning={true} className={`${roboto} ${fredoka}`}>
        <NextTopLoader />
        <TranslationsProvider namespaces={options.ns} locale={locale}>
          <LocalizationProvider>
            <UserProvider>
              <ThemeProvider>{children}</ThemeProvider>
            </UserProvider>
          </LocalizationProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
