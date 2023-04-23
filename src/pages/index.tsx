import DoingCard from "@/components/cards/doing-card";
import LeftBar from "@/components/left-bar";
import GithubSvg from "@/components/svg/github";
import LinkedinSvg from "@/components/svg/linkedin";
import SquareEnvelope from "@/components/svg/square-envelope";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import * as THREE from "three"; // Importing THREE.js
import CELLS from "vanta/dist/vanta.cells.min";
import logoBPCE from "../../public/BPCE_logo_white.png";
import logoLbp from "../../public/lbp_clair.png";

export default function Test() {
  const vantaDiv = useRef(null);

  useEffect(() => {
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

    const splide = new Splide(".splide", {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: 3,
      autoScroll: {
        speed: 0.2,
      },
    });

    splide.mount({ AutoScroll });

    if (window.innerHeight >= 750) {
      console.log("ok");
      const rightBar = document.getElementById("rightBar");
      rightBar?.classList.forEach((item) => {
        if (item.startsWith("h-")) {
          rightBar.classList.replace(
            item,
            "h-[" + (window.innerHeight - 120).toString() + "px]"
          );
          rightBar.style.height = (window.innerHeight - 200).toString() + "px";
        }
      });
    }

    const rightBar = document.getElementById("rightBar");
    window.addEventListener("resize", function () {
      if (rightBar != null) {
        rightBar.style.height = (window.innerHeight - 200).toString() + "px";
      }
    });
  }, []);

  function translateY() {
    document.getElementById("vantaSection")?.classList.add("-translate-y-full");
  }

  return (
    <div id="home" className="h-[749px ] overflow-y-hidden pb-36">
      <section
        id="vantaSection"
        ref={vantaDiv}
        className="absolute z-50 h-screen w-screen flex-1  transition duration-[1200ms]"
      >
        <div className="container z-20 mx-auto my-auto flex h-full w-full flex-col items-center justify-center px-10 py-20 md:flex-row">
          <div className="mb-16 flex flex-col items-center justify-center text-center lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-center lg:pr-24 lg:text-left">
            <h1 className="title-font mb-2 text-4xl font-extrabold text-blue-500 lg:text-5xl">
              Quentin MIMAULT
            </h1>
            <p className="mb-4 mt-6 text-xl font-normal leading-relaxed text-gray-400">
              Web Developer full-stack in Nantes
            </p>
            <button
              onClick={translateY}
              className="mt-6 rounded-xl border-2 border-blue-500 px-10 py-4 duration-300 hover:shadow-[0px_0px_15px_1px] hover:shadow-blue-500"
            >
              Découvrir mon CV
            </button>
            <div className="absolute bottom-24 flex gap-5">
              <LinkedinSvg svgClass="fill-gray-500 h-10 hover:scale-110 hover:duration-300 hover:cursor-pointer"></LinkedinSvg>
              <GithubSvg svgClass="fill-gray-500 h-10 hover:scale-110 hover:duration-300 hover:cursor-pointer"></GithubSvg>
              <SquareEnvelope svgClass="fill-gray-500 h-10 hover:scale-110 hover:duration-300 hover:cursor-pointer"></SquareEnvelope>
            </div>
          </div>
        </div>
      </section>
      <section id="cvSection" className="mt-40  gap-10 px-32">
        <LeftBar></LeftBar>
        <section
          id="rightBar"
          className="ml-auto block h-[630px] w-[calc(100%-450px)] grow overflow-y-scroll rounded-xl bg-[#111010] px-12 py-12"
        >
          <div className=" h-auto">
            <div
              id="about-header"
              className="relative flex w-fit items-center gap-5"
            >
              <p className="text-4xl font-bold">A propos</p>
              <span className="absolute -right-48 top-6 h-1 w-40 rounded-full bg-effect-blue"></span>
            </div>
            <div id="content" className="mt-7">
              <p className="text-md font-medium text-stone-500">
                I&apos;m Creative Director and UI/UX Designer from Sydney,
                Australia, working in web development and print media. I enjoy
                turning complex problems into simple, beautiful and intuitive
                designs. My aim is to bring across your message and identity in
                the most creative way. I created web design for many famous
                brand companies.
              </p>
            </div>
            <div
              id="doing-header"
              className="relative mt-10 flex w-fit items-center gap-5"
            >
              <span className="text-4xl font-bold">Ce que je fais</span>
              <span className="absolute -right-48 top-6 h-1 w-40 rounded-full bg-effect-blue"></span>
            </div>
            <div
              id="doing"
              className="mt-7 flex flex-wrap gap-y-10 xl:w-full xl:flex-col xl:gap-y-5 2xl:flex-row 2xl:gap-x-10 2xl:gap-y-10"
            >
              <DoingCard
                title="Développement web"
                description="Développement de site web dynamique en utilisant des technologies comme NextJS, VueJs, .Net, Symfony. Je suis également force de proposition car j'ai des expériences conséquentes en création de projet from scratch."
                colorNumber={1}
              ></DoingCard>
              <DoingCard
                title="UI/UX Design"
                description="Je suis capable de conceptualiser vos maquettes en utilisant l'outil Figma tout en respectant les règles de l'UI/UX design. Cet outil vous permettra de visualiser toutes les interactions de votre futur site web sans code."
                colorNumber={2}
              ></DoingCard>
              <DoingCard
                title="Conception et architecture de projet"
                description="Grâce à ma formation, je suis capable de choisir les meilleures technologies en fonction de votre projet ainsi qu'à l'optimiser en fonction de la charge d'utilisation. Vous aurez un site web qui vous correspondra à 100%."
                colorNumber={3}
              ></DoingCard>
              <DoingCard
                title="Intégration DevOps"
                description="En fonction du contexte du projet, je suis capable de gérer la mise en production en utilisant un site de déploiement comme Vercel comme je suis aussi capable de déployer votre projet grâce à une chaine CI/CD interne avec vos registres et votre outil de gestion de release."
                colorNumber={4}
              ></DoingCard>
            </div>
            <div
              id="client-header"
              className="relative mt-10 flex w-fit items-center gap-5"
            >
              <span className="text-4xl font-bold">
                J&apos;ai travaillé pour
              </span>
              <span className="absolute -right-48 top-6 h-1 w-40 rounded-full bg-effect-blue"></span>
            </div>
            <div className="mt-7 flex gap-10 overflow-x-hidden rounded-xl bg-[rgb(28,29,28)] px-5 py-6">
              <div className="splide flex">
                <div className="splide__track" id="splide-track">
                  <div className="splide__list flex items-center">
                    <Image
                      src={logoBPCE}
                      alt="BPCE-logo"
                      className="splide__slide my-auto h-24 w-1/5 rounded-none fill-white object-contain py-1 duration-500"
                    ></Image>
                    <Image
                      src={logoLbp}
                      alt="BPCE-logo"
                      className="splide__slide h-32 w-1/4 rounded-3xl fill-white object-contain py-5 duration-500"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
