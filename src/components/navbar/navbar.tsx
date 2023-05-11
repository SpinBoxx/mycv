// import { useEffect, useState } from "react";
import { Dispatch, SetStateAction, useState } from "react";
import AddressBook from "../svg/address-book";
import AddressCard from "../svg/address-card";
import HomeSvg from "../svg/home";
import Memo from "../svg/memo";
import MimoLogo from "../svg/mimoLogo";
import UserGraduate from "../svg/user-graduate";

interface Props {
  currentMenu: number;
  setCurrentMenu: Dispatch<SetStateAction<number>>;
}

export default function Navbar({ currentMenu, setCurrentMenu }: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const MENU_ARRAY = [
    {
      nom: "Accueil",
    },
    {
      nom: "A propos",
    },
    {
      nom: "Expériences",
    },
    {
      nom: "Formations",
    },
    {
      nom: "Contact",
    },
  ];

  const setIconByMenu = (menu: string) => {
    switch (menu) {
      case "Accueil":
        return <HomeSvg svgClass="h-5 fill-gray-300"></HomeSvg>;
      case "A propos":
        return <AddressCard svgClass="h-5 fill-gray-300"></AddressCard>;
      case "Expériences":
        return <Memo svgClass="h-5 fill-gray-300"></Memo>;
      case "Formations":
        return <UserGraduate svgClass="h-5 fill-gray-300"></UserGraduate>;
      case "Contact":
        return <AddressBook svgClass="h-5 fill-gray-300"></AddressBook>;
    }
  };

  return (
    <section id="navbar" className="">
      <div
        id="navbarDesktop"
        className="relative hidden xl:block xl:flex-row xl:justify-between"
      >
        <div className="px-3 py-5">
          <MimoLogo additionnalClass="h-10 w-12 !fill-gray-300"></MimoLogo>
        </div>
        <div
          id="navbarDesktopMenu"
          className="z-40  bg-black px-2 py-2 xl:flex xl:items-center xl:gap-5 xl:rounded-xl"
        >
          {MENU_ARRAY.map((menu, index) => {
            return (
              <div
                onClick={() => setCurrentMenu(index)}
                key={index}
                className={`flex items-center gap-3 rounded-md ${
                  currentMenu === index ? "bg-effect-blue" : "bg-gray-800"
                }  px-6 py-2.5 hover-effect-blue hover:cursor-pointer`}
              >
                {setIconByMenu(menu.nom)}
                <span className="text-sm text-gray-300">{menu.nom}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div
        id="navbarMobile"
        className="sticky z-40 flex h-full w-full flex-col bg-slate-900 px-2 py-2 xl:hidden"
      >
        <div
          id="navbarMobileHeader"
          className="flex items-center justify-between"
        >
          <div className="px-3 py-5">
            <MimoLogo additionnalClass="h-10 w-12 !fill-gray-300"></MimoLogo>
          </div>
          <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {!isMobileMenuOpen ? (
              <svg
                className="h-9 w-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="h-9 w-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>
        {isMobileMenuOpen && (
          <div id="navbarMobileBody" className="h-screen">
            <nav className="flex flex-col" aria-label="Global">
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-gray-800 px-3 py-2 text-sm font-medium text-white"
                aria-current="page"
              >
                {" "}
                Dashboard{" "}
              </a>

              <a
                href="#"
                className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {" "}
                Team{" "}
              </a>

              <a
                href="#"
                className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {" "}
                Projects{" "}
              </a>

              <a
                href="#"
                className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {" "}
                Calendar{" "}
              </a>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
}
