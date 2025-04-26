"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LocaleSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const switchLocale = (newLocale: "en" | "es" | "ko") => {
    // first check current locale with pathname
    // remove current locale from pathname or redirect to root
    const currentPath = pathname.replace(`/${locale}`, "") || "/";
    // then replace it with new locale with newPath
    const newPath = `/${newLocale}${currentPath}`;
    router.replace(newPath);
  };

  return (
    <div>
      <Select
        defaultValue={locale}
        onValueChange={(value) => {
          switchLocale(value as "en" | "es" | "ko");
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Languages" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Choose your language</SelectLabel>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Spanish</SelectItem>
            <SelectItem value="ko">Korean</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LocaleSwitcher;
