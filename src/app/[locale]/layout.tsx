import { NextIntlClientProvider, hasLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};
// add dynamic metadata page title with SSG
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ params: { locale } }));
}
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  // 
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: t("Metadata.title"),
    description: t("Metadata.description"),
  };
}
// export const metadata: Metadata = {
//   title: "next-intl",
//   description: "Next.js internationalization example",
// };

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
