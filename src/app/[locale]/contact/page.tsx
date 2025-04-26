import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  return {
    title: t("Metadata.title"),
    description: t("Metadata.description"),
  };
}
const Contact = () => {
  return <div>contact page</div>;
};

export default Contact;
