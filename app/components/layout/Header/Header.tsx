"use client"
import Link from "next/link";
import Image from "next/image";
import whiteLogo from "../../../assets/logo_laranja_branco.svg";
import { usePathname } from "next/dist/client/components/navigation";

export default function Header() {
  const pathname = usePathname();

  // Função auxiliar para definir a cor
  const getLinkClass = (path: string) => {
    const isActive = pathname === path;

    // Se estiver ativo, usamos uma cor de destaque (ex: vermelho do seu logo)
    // Se não, usamos a cor padrão (slate-700)
    return isActive
      ? "text-(--primary-color) font-bold"
      : "text-slate-700 hover:text-(--primary-color)/50 transition-colors";
  };

  return (
    <header className="flex max-w-7xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
      {/* <h3 className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black text-slate-700 link-header"> */}
        <span className="mr-2 text-4xl">
          <Image
            src={whiteLogo}
            alt="Logo Laranja Azeda"
            width={80}
            height={80}
          />
        </span>
      {/* </h3> */}

      <div className="flex w-full flex-col items-center justify-between transition-all md:ml-24 md:flex-row md:items-start">
        <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
          <li className="md:mr-12">
            <Link href="/" className={`${getLinkClass("/")} link-header`}>
              Home
            </Link>
          </li>

          <li className="md:mr-12">
            <Link href="/trilogia" className={`${getLinkClass("/trilogia")} link-header`}>
              Trilogia
            </Link>
          </li>

          <li className="md:mr-12">
            <Link href="/contato" className={`${getLinkClass("/contato")} link-header`}>
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}