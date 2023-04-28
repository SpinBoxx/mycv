import { useEffect, useState } from "react";
import AddressBook from "../svg/address-book";
import AddressCard from "../svg/address-card";
import HomeSvg from "../svg/home";
import Memo from "../svg/memo";
import MimoLogo from "../svg/mimoLogo";
import UserGraduate from "../svg/user-graduate";

export default function Navbar() {
  // useEffect(() => {
  //   function changeMenu(idMenu: number) {
  //     document.getElementById("rightBar")!.innerHTML = "OK";
  //   }
  //   changeMenu(3);
  // }, []);
  return (
    <section id="navbar" className="">
      <div className="flex justify-between px-20">
        <div className="fixed top-0">
          <MimoLogo svgClass="h-24 !fill-gray-300"></MimoLogo>
        </div>
        <div
          id="menu"
          className="fixed right-24 top-7 z-40 flex items-center gap-5 rounded-xl bg-black px-2 py-2"
        >
          <div className="flex items-center gap-3 rounded-md bg-gray-800 px-6 py-2.5 hover-effect-blue hover:cursor-pointer">
            <HomeSvg svgClass="h-5 fill-gray-300"></HomeSvg>
            <span className="text-sm text-gray-300">Accueil</span>
          </div>
          <div className="flex items-center gap-3 rounded-md bg-gray-800 px-6 py-2.5 hover-effect-blue hover:cursor-pointer">
            <AddressCard svgClass="h-5 fill-gray-300"></AddressCard>
            <span className="text-sm text-gray-300">A propos</span>
          </div>
          <div className="flex items-center gap-3 rounded-md bg-gray-800 px-6 py-2.5 hover-effect-blue hover:cursor-pointer">
            <Memo svgClass="h-5 fill-gray-300"></Memo>
            <span className="text-sm text-gray-300">Expérience</span>
          </div>
          <div className="flex items-center gap-3 rounded-md bg-gray-800 px-6 py-2.5 hover-effect-blue hover:cursor-pointer">
            <UserGraduate svgClass="h-5 fill-gray-300"></UserGraduate>
            <span className="text-sm text-gray-300">Formations</span>
          </div>
          <div className="flex items-center gap-3 rounded-md bg-gray-800 px-6 py-2.5 hover-effect-blue hover:cursor-pointer">
            <AddressBook svgClass="h-5 fill-gray-300"></AddressBook>
            <span className="text-sm text-gray-300">Contact</span>
          </div>
          <div>
            <span>Lightmode</span>
          </div>
        </div>
      </div>
    </section>
  );
}
