"use client";

import { usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import Image from "next/image";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const basePath = pathname.startsWith("/") ? pathname : `/${pathname}`;
    const newUrl = `/${newLocale}${basePath}`;
    window.location.href = newUrl;
  };

  return (
    <div className="flex gap-1 items-center z-1050">
      <button
        onClick={() => switchLocale("en")}
        className={`p-1 rounded ${
          locale === "en" ? "bg-main text-white" : "bg-gray-200"
        }`}
      >
        <Image
          src="/flags/us.png"
          width={30}
          height={30}
          alt="English"
          className="object-fill h-[21px]"
        />
      </button>
      <button
        onClick={() => switchLocale("br")}
        className={`p-1 rounded ${
          locale === "br" ? "bg-main text-white" : "bg-gray-200"
        }`}
      >
        <Image src="/flags/br.png" width={30} height={28} alt="Português" />
      </button>
      <button
        onClick={() => switchLocale("es")}
        className={`p-1 rounded ${
          locale === "es" ? "bg-main text-white" : "bg-gray-200"
        }`}
      >
        <Image src="/flags/es.png" width={30} height={28} alt="Español" />
      </button>
    </div>
  );
}
