import { getTranslations } from "next-intl/server";
import React from "react";
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "BlogPage" });
  return {
    title: t("Metadata.title"),
    description: t("Metadata.description"),
  };
}
const Blog = () => {
  return <div>blog page</div>;
};

export default Blog;
