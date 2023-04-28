import Navbar from "@/components/navbar/navbar";
import Experiences from "@/components/sections/formations";
import LeftBar from "@/components/sections/left-bar";
import VantaSection from "@/components/sections/vanta";
import "@splidejs/splide/css";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three"; // Importing THREE.js
import CELLS from "vanta/dist/vanta.cells.min";
import About from "../components/sections/about";

export default function Test() {
  const VANTA_DIV = useRef(null);
  const [currentMenu, setCurrentMenu] = useState(0);

  useEffect(() => {
    CELLS({
      THREE: THREE,
      el: VANTA_DIV.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      color1: 0x1b1b59,
      color2: 0x373737,
      size: 5.0,
      speed: 0.5,
    });
    const RIGHT_BAR = document.getElementById("homeCvSectionRightbar");
    if (window.innerHeight >= 750) {
      if (RIGHT_BAR)
        RIGHT_BAR.style.height = (window.innerHeight - 200).toString() + "px";
    }

    window.addEventListener("resize", function () {
      if (RIGHT_BAR != null) {
        RIGHT_BAR.style.height = (window.innerHeight - 200).toString() + "px";
      }
    });
    setTimeout(() => {
      document
        .getElementById("homeVantaSectionContent")
        ?.classList.remove("invisible");
      document
        .getElementById("homeVantaSectionContent")
        ?.classList.remove("opacity-0");
      document
        .getElementById("homeVantaSectionContent")
        ?.classList.add("opacity-100");
      document.getElementById("homeCvSection")?.classList.remove("invisible");
    }, 100);
  }, []);

  const getSectionByCurrentMenu = () => {
    switch (currentMenu) {
      case 0:
        return <About></About>;
      case 1:
        return <h1>A propos</h1>;
      case 2:
        return <h1>Expérience</h1>;
      case 3:
        return <Experiences></Experiences>;
      case 4:
        return <h1>Contact</h1>;
    }
  };

  function translateY() {
    document
      .getElementById("homeVantaSection")
      ?.classList.add("-translate-y-full");
  }

  return (
    <div id="home" className="h-[900px] overflow-y-hidden pb-36">
      <section
        id="homeVantaSection"
        ref={VANTA_DIV}
        className="absolute z-50 h-screen w-screen flex-1  transition duration-[1200ms]"
      >
        <div
          id="homeVantaSectionContent"
          className="container z-20 mx-auto my-auto flex h-full w-full flex-col items-center justify-center px-10 py-20 opacity-0 transition duration-[1200ms] md:flex-row"
        >
          <VantaSection translateVantaSection={translateY} />
        </div>
      </section>

      <section id="homeCvSection" className="invisible mt-40 gap-10 px-32">
        <section id="homeCvSectionNavbar">
          <Navbar
            currentMenu={currentMenu}
            setCurrentMenu={setCurrentMenu}
          ></Navbar>
        </section>
        <section id="homeCvSectionLeftbar">
          <LeftBar></LeftBar>
        </section>
        <section
          id="homeCvSectionRightbar"
          className="ml-auto w-[calc(100%-450px)] grow overflow-y-scroll rounded-xl bg-[#111010] px-12 py-12"
        >
          {getSectionByCurrentMenu()}
        </section>
      </section>
    </div>
  );
}
