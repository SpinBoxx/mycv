import Navbar from "@/components/navbar/navbar";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experiences from "@/components/sections/experiences";
import Formations from "@/components/sections/formations";
import LeftBar from "@/components/sections/left-bar";
// import VantaSection from "@/components/sections/vanta";
import Welcome from "@/components/sections/welcome";
import "animate.css";
import React, { useEffect, useState } from "react";
// import * as THREE from "three"; // Importing THREE.js
// import CELLS from "vanta/dist/vanta.cells.min";

// function handleSubmit(e) {
//   e.preventDefault();
//   const postData = async () => {
//     const response = await fetch("/api/contact", {
//       method: "POST",
//     });
//     return response.json();
//   };
//   postData().then((data) => {
//     alert(data.message);
//   });
// }

export default function Test() {
  // const VANTA_DIV = useRef(null);

  const [currentMenu, setCurrentMenu] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem("isClickedGrabThisPopUp")) {
      console.log("ok");
      localStorage.setItem("isClickedGrabThisPopUp", "0");
    }

    // CELLS({
    //   THREE: THREE,
    //   el: VANTA_DIV.current,
    //   mouseControls: true,
    //   touchControls: true,
    //   gyroControls: false,
    //   minHeight: 200.0,
    //   minWidth: 200.0,
    //   scale: 1.0,
    //   color1: 0x1b1b59,
    //   color2: 0x373737,
    //   size: 5.0,
    //   speed: 0.5,
    // });

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
        return <Welcome />;
      case 1:
        return <About />;
      case 2:
        return <Experiences />;
      case 3:
        return <Formations />;
      case 4:
        return <Contact />;
    }
  };

  // function translateY() {
  //   document
  //     .getElementById("homeVantaSection")
  //     ?.classList.add("-translate-y-full");
  // }

  return (
    <div id="home" className="pb-14 xl:h-[900px]">
      {/* <section
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
      </section> */}

      <section id="homeCvSection" className="invisible">
        <section id="homeCvSectionNavbar">
          <Navbar
            currentMenu={currentMenu}
            setCurrentMenu={setCurrentMenu}
          ></Navbar>
        </section>
        <section
          id="homeCvSectionBody"
          className="flex flex-col px-5 sm:mt-4 lg:px-32 xl:mt-24 xl:flex-row"
        >
          <section
            id="homeCvSectionBodyLeftbar"
            className={currentMenu == 0 ? "mt-32 xl:mt-0" : "hidden xl:block"}
          >
            <LeftBar></LeftBar>
          </section>
          <section
            id="homeCvSectionBodyRightbar"
            className={`mx-auto ${
              currentMenu == 0 ? "mt-10" : "mt-28"
            }  w-full rounded-xl bg-[#111010] px-5 py-5 xl:mr-0 xl:mt-0 xl:h-auto xl:max-h-[calc(100vh-200px)] xl:w-[calc(100%-450px)] xl:overflow-y-auto xl:px-12 xl:py-12`}
          >
            {getSectionByCurrentMenu()}
          </section>
        </section>
      </section>
    </div>
  );
}
