import LeftBar from "@/components/left-bar";
import GithubSvg from "@/components/svg/github";
import LinkedinSvg from "@/components/svg/linkedin";
import SquareEnvelope from "@/components/svg/square-envelope";

import Navbar from "@/components/navbar/navbar";
import "@splidejs/splide/css";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three"; // Importing THREE.js
import CELLS from "vanta/dist/vanta.cells.min";
import About from "./components/about";
import VantaSection from "./components/vanta";

export default function Test() {
  const vantaDiv = useRef(null);
  const [text, setText] = useState(0);
  function handleChange(id: number) {
    setText(id);
  }
  useEffect(() => {
    handleChange(4);

    CELLS({
      THREE: THREE,
      el: vantaDiv.current,
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

    if (window.innerHeight >= 750) {
      const rightBar = document.getElementById("homeCvSectionRightbar");
      rightBar?.classList.forEach((item) => {
        if (item.startsWith("h-")) {
          rightBar.style.height = (window.innerHeight - 200).toString() + "px";
        }
      });
    }
    const rightBar = document.getElementById("homeCvSectionRightbar");
    window.addEventListener("resize", function () {
      if (rightBar != null) {
        rightBar.style.height = (window.innerHeight - 200).toString() + "px";
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

  function translateY() {
    document
      .getElementById("homeVantaSection")
      ?.classList.add("-translate-y-full");
  }

  return (
    <div id="home" className="h-[900px] overflow-y-hidden pb-36">
      <section
        id="homeVantaSection"
        ref={vantaDiv}
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
          <Navbar></Navbar>
        </section>
        <section id="homeCvSectionLeftbar">
          <LeftBar></LeftBar>
        </section>
        <section
          id="homeCvSectionRightbar"
          className="ml-auto block h-[630px] w-[calc(100%-450px)] grow overflow-y-scroll rounded-xl bg-[#111010] px-12 py-12"
        >
          <About number={text}></About>
        </section>
      </section>
    </div>
  );
}
