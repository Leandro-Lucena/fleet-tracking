"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const tabs: { [key: string]: string } = {
    Painel: "/admin",
    "Criar rota": "/new-route",
    "Iniciar viagem": "/driver",
  };
  const generateLink = (name: string, path: string) => {
    return (
      <Link
        href={path}
        className={`font:bold ${
          pathname === path ? "text-main" : "text-muted-foreground"
        } text-xl md:text-base`}
      >
        {name}
      </Link>
    );
  };

  return (
    <nav className="flex gap-8 p-3 px-4 bg-default text-contrast">
      {Object.keys(tabs).map((tab) => (
        <span key={tab}>{generateLink(tab, tabs[tab])}</span>
      ))}
    </nav>
  );
};

export default Navbar;
