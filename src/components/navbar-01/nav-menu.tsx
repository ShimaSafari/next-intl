import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { useTranslations } from "next-intl";

export const NavMenu = (props: NavigationMenuProps) => {
  const t = useTranslations("Menu");
  return (
    <NavigationMenu className="hidden md:block" {...props}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/">{t("home")}</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/about">{t("about")}</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/contact">
            {t("contact")}
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/contact">{t("blog")}</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
