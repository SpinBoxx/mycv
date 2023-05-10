import DoingCard from "@/components/cards/doing-card";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";
import Image from "next/image";
import { useEffect } from "react";

export default function About() {
  const ME = {
    aboutMe:
      "Développeur de passion 👨‍💻 et doté de solides bases en conception et développement sur les technos récentes. J'ai également une passion pour le tennis de table 🏓 ou j'évolue en régional 1 ce qui me permet d'apporter une grande discipline et un esprit de compétition dans mon travail 🧠. Je prends aussi le temps d'aller à la salle de sport tous les matins 🌄 avant le travail 🏋️‍♂️.",
    whatImDoing: [
      {
        speciality: "Développement web",
        description:
          "Développement de site web dynamique en utilisant des technologies comme NextJS, VueJs, .Net, Symfony. Je suis également force de proposition car j'ai des expériences conséquentes en création de projet from scratch.",
      },
      {
        speciality: "Conception et architecture de projet",
        description:
          "Grâce à ma formation, je suis capable de choisir les meilleures technologies en fonction de votre projet ainsi qu'à l'optimiser en fonction de la charge d'utilisation. Vous aurez un site web qui vous correspondra à 100%.",
      },
      {
        speciality: "UI/UX Design",
        description:
          "Je suis capable de conceptualiser vos maquettes en utilisant l'outil Figma tout en respectant les règles de l'UI/UX design. Cet outil vous permettra de visualiser toutes les interactions de votre futur site web sans code.",
      },
      {
        speciality: "Intégration DevOps",
        description:
          "En fonction du contexte du projet, je suis capable de gérer la mise en production en utilisant un site de déploiement comme Vercel comme je suis aussi capable de déployer votre projet grâce à une chaine CI/CD interne avec vos registres et votre outil de gestion de release.",
      },
    ],
  };

  useEffect(() => {
    const SPLIDE = new Splide(".splide", {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: 3,
      autoScroll: {
        speed: 0.3,
      },
    });
    SPLIDE.mount({ AutoScroll });
  }, []);

  return (
    <section id="about" className="h-auto w-full">
      <div id="aboutHeader" className="relative flex w-fit items-center gap-5">
        <p className="text-4xl font-bold">A propos</p>
        <span className="absolute -right-48 top-6 h-1 w-40 rounded-full bg-effect-blue"></span>
      </div>
      <div id="aboutMe" className="mt-7">
        <p className="text-md indent-2 font-normal text-stone-300">
          {ME.aboutMe}
        </p>
      </div>
      <div id="aboutIDoing">
        <div
          id="aboutIDoingHeader"
          className="relative mt-10 flex w-fit items-center gap-5"
        >
          <span className="text-4xl font-bold">Ce que je fais</span>
          <span className="absolute -right-48 top-6 h-1 w-40 rounded-full bg-effect-blue"></span>
        </div>
        <div
          id="aboutIDoingContent"
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
      </div>
      <div id="aboutMyCustomers">
        <div
          id="aboutMyCustomersHeader"
          className="relative mt-10 flex w-fit items-center gap-5"
        >
          <span className="text-4xl font-bold">J&apos;ai travaillé pour</span>
          <span className="absolute -right-48 top-6 h-1 w-40 rounded-full bg-effect-blue"></span>
        </div>
        <div
          id="aboutMyCustomersCarroussel"
          className="mt-7 flex gap-10 overflow-x-hidden rounded-xl bg-[rgb(28,29,28)] px-5 py-6"
        >
          <div className="splide flex">
            <div className="splide__track" id="splide-track">
              <div className="splide__list flex items-center gap-10">
                <Image
                  src="/my-customers/lbp_clair.png"
                  width={"1000"}
                  height={"1000"}
                  alt="BPCE-logo"
                  className="splide__slide my-auto h-24 w-1/5 rounded-none fill-white object-contain py-1 duration-500"
                ></Image>
                <Image
                  src="/my-customers/BPCE_logo_white.png"
                  width={"1000"}
                  height={"1000"}
                  alt="BPCE-logo"
                  className="splide__slide my-auto h-24 w-1/5 rounded-none fill-white object-contain py-1 duration-500"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
