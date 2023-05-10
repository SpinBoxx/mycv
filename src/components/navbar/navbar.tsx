// import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
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
      <div className="relative flex flex-row justify-between">
        <div className="">
          <MimoLogo svgClass="h-24 !fill-gray-300"></MimoLogo>
        </div>
        <div
          id="menu"
          className="z-40 flex items-center gap-5 rounded-xl bg-black px-2 py-2"
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
    </section>
  );
}
