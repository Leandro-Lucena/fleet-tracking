"use client";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Languages } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";

const Navbar = () => {
  const locale = useLocale();
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const tabs: { [key: string]: string } = {
    [t("panel")]: "/admin",
    [t("create_route")]: "/new-route",
    [t("start_route")]: "/driver",
  };
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };
  const generateLink = (name: string, path: string) => {
    return (
      <Link
        href={path}
        className={`font-semibold text-lg ${
          pathname === `/${locale}${path}`
            ? "text-main border-b-2 pb-3"
            : "text-muted-foreground"
        }`}
      >
        {name}
      </Link>
    );
  };

  return (
    <nav className="relative flex w-full md:gap-8 gap-4 p-3 px-4 bg-default text-contrast shadow-xl justify-center">
      <Link href="/" className="absolute left-2 top-2">
        <span className="flex flex-baseline gap-2">
          <Image src="/logo.png" alt="Logo" width={45} height={10} />
          <span className="text-white font-thin text-2xl mt-auto md:block hidden">
            Fleet Tracking
          </span>
        </span>
      </Link>
      {Object.keys(tabs).map((tab) => (
        <span key={tab}>{generateLink(tab, tabs[tab])}</span>
      ))}
      <Languages
        className="cursor-pointer absolute right-3 top-4"
        onClick={toggleLanguageMenu}
        size={24}
      />
      {showLanguageMenu && (
        <div className="absolute md:right-11 right-2 md:top-3 top-14 z-10">
          <LanguageSwitcher />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
