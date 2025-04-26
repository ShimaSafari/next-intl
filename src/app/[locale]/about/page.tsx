import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  return {
    title: t("Metadata.title"),
    description: t("Metadata.description"),
  };
}

const About = () => {
  const t = useTranslations("AboutPage");
  return (
    <div>
      <p>about page</p>
    </div>
  );
};

export default About;
