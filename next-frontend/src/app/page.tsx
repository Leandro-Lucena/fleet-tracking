import Image from "next/image";
import Link from "next/link";
import GetInTouch from "./_components/get-in-touch";

export default function Home() {
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
        <div className="flex max-w-[650px] flex-col justify-center rounded-2xl bg-white bg-opacity-85 p-8 shadow-xl">
          <span className="flex justify-between">
            <h1 className="mb-6 text-3xl font-bold">Bem vindo!</h1>
            <span className="flex mb-auto gap-2">
              <GetInTouch />
            </span>
          </span>
          <p className="mb-8 text-muted-foreground text-justify">
            Este projeto demonstra um sistema moderno e robusto para
            gerenciamento e rastreamento de frotas veiculares. Desenvolvido com
            tecnologias de ponta, ele oferece uma experiência eficiente e
            escalável para criar rotas geográficas e monitorar, em tempo real,
            os veículos de uma frota particular se deslocando no mapa.
          </p>
          <span className="text-muted-foreground text-lg font-semibold mb-2">
            Tecnologias utilizadas:
          </span>
          <span className="flex flex-wrap gap-2 mb-8 justify-between border p-2 rounded shadow-lg">
            <Image
              src="/google-maps-api.png"
              alt="Google Maps API"
              width={100}
              height={1}
              className="object-contain bg-white rounded"
            />
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
              src="/kafka.png"
              alt="Kafka"
              width={90}
              height={10}
              className="object-contain rounded"
            />
          </span>
          <Link href="/admin" className="flex ms-auto">
            <button className="bg-main p-4 rounded text-xl font-semibold shadow-xl">
              Ir para o painel
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
