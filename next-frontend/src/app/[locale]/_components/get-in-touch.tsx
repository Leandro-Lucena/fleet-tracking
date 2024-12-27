import Image from "next/image";

const GetInTouch = () => {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/leandro-ribeiro-lucena/"
        target="_blank"
        className="border shadow rounded hover:scale-110 transition-all"
      >
        <Image src="/linkedin.svg" width={25} height={25} alt="Linkedin" />
      </a>
      <a
        href="https://github.com/Leandro-Lucena"
        target="_blank"
        className="border shadow rounded hover:scale-110 transition-all"
      >
        <Image src="/github.svg" width={25} height={25} alt="Github" />
      </a>
    </>
  );
};

export default GetInTouch;
