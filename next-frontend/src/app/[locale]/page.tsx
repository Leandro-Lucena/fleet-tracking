import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import GetInTouch from "./_components/get-in-touch";
import { LanguageSwitcher } from "./_components/language-switcher";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background.mp4" type="video/mp4" />
        Seu navegador não suporta a reprodução de vídeo.
      </video>
      <main className="flex h-full flex-col gap-8 row-start-2 items-center justify-center text-primary">
        <div className="flex max-w-[650px] flex-col justify-center rounded-2xl bg-white bg-opacity-85 p-8 shadow-xl m-2">
          <span className="flex justify-between items-start mb-4">
            <span className="flex flex-baseline gap-2">
              <Image src="/logo.png" alt="Logo" width={55} height={10} />
              <span className="text-primary font-thin text-3xl mt-auto ">
                Fleet Tracking
              </span>
            </span>
            <LanguageSwitcher />
          </span>
          <h1 className="mb-2 text-3xl font-semibold">{t("welcome")}</h1>
          <p className="mb-8 text-muted-foreground text-justify">
            {t("description")}
          </p>
          <span className="flex flex-wrap gap-2 mb-8 ">
            <p className="text-muted-foreground font-semibold">
              {t("technologies")}
            </p>
            <Image
              src="/next.png"
              alt="Next.js"
              width={67}
              height={20}
              className="object-contain"
            />
            <Image
              src="/nest.png"
              alt="Nest.js"
              width={67}
              height={20}
              className="object-contain"
            />
            <Image
              src="/go.png"
              alt="Golang"
              width={43}
              height={20}
              className="object-contain"
            />
            <Image
              src="/mongo.png"
              alt="MongoDB"
              width={81}
              height={20}
              className="object-contain"
            />
            <Image
              src="/docker.png"
              alt="Docker"
              width={67}
              height={20}
              className="object-contain"
            />
            <Image
              src="/tailwind.png"
              alt="Tailwind CSS"
              width={99}
              height={20}
              className="object-contain"
            />
            <Image
              src="/google-maps-api.png"
              alt="Google Maps API"
              width={100}
              height={1}
              className="object-contain bg-white rounded"
            />
            <Image
              src="/kafka.png"
              alt="Kafka"
              width={90}
              height={10}
              className="object-contain rounded"
            />
          </span>
          <span className="flex justify-between">
            <span className="flex mt-auto gap-2">
              <GetInTouch />
            </span>
            <Link
              href="/admin"
              className="flex ms-auto hover:scale-95 transition-all"
            >
              <button className="bg-main p-4 rounded text-contrast text-xl font-semibold shadow-xl">
                {t("btn_go_to_panel")}
              </button>
            </Link>
          </span>
        </div>
      </main>
    </div>
  );
}
