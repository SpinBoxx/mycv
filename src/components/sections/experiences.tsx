import { Tooltip } from "flowbite-react";
import LocationDot from "../svg/location-dot";

export default function Experiences() {
  const EXPERIENCES = [
    {
      enterprise: "Néo-soft",
      enterpriseUrl: "https://www.neosoft.fr/",
      mission: "Ingénieur développeur web pour la Banque Postale",
      location: "Nantes",
      endYear: "",
      startYear: 2022,
      paragraphs: [
        "Développeur au sein du LAB Innovation à Nantes du groupe la Banque Postale, ma première mission consistait à redévelopper une application interne PHP 5 en une application NextJS pour le front et Symfony pour le back. J'ai entièrement refondu l'interface du site en utilisant Figma et en respectant les règles UI du métier et les règles d'UX. Les communications entre le front et le back se faisaient par le biais d'une API REST. Enfin, j'ai également dû  intégrer mes 2 projets sur une chaine CI/CD Gitlab ainsi que sur Openshift qui permet de déployer des projets dans des containers.",
        "Ma deuxième mission est d'assister mon responsable sur ses autres projets transverses. Je participe aux différents POC et enfin, j'aide au pilotage et aux choix d'architectures des différents projets. ",
      ],
    },
    {
      enterprise: "Néo-soft",
      enterpriseUrl: "https://www.neosoft.fr/",
      mission: "Apprenti développeur d'application web C# pour BPCE-IT",
      location: "Nantes",
      endYear: 2022,
      startYear: 2021,
      paragraphs: [
        "Lors de cette mission, j'ai eu l'occasion de développer ma 1ere application web avec ASP.NET. Dans un contexte où je partais from scratch au niveau des connaissances du framework et où, j'évoluais dans le secteur bancaire, j'ai su relever le défi avec succès. J'ai pu développer en moins d'un an, tout en continuant mon rythme scolaire, une application proche du métier, avec qui j'ai pu faire de multiples réunions pour comprendre leurs besoins. J'en ai fait une application réactive et moderne. J'ai pu cocher toutes les demandes du cahier des charges, tout en optimisant mon application en créant, par exemple, un orm personnalisé de type générique pour toutes mes entités du projet. ",
        "Avec responsable, nous appliquions des méthodes agiles pour manager ce projet. Je faisais un compte rendu chaque semaine pour lui montrer mes avancements. J'avais également des plus grosses charges de travail lors de mes vacances scolaires pour me challenger et développer sous des contraintes ce qui me plaisait fortement.",
      ],
    },
  ];

  return (
    <section id="formations" className="h-full pb-5">
      <div id="about-header" className="relative flex w-fit items-center gap-5">
        <p className="text-4xl font-bold underline decoration-blue-500 underline-offset-8 xl:no-underline">
          Experiences
        </p>
        <span className="hidden xl:relative xl:top-1.5 xl:block xl:h-1 xl:w-20 xl:rounded-full xl:bg-effect-blue"></span>
      </div>
      <ol className="">
        {EXPERIENCES.map((experience, index) => {
          return (
            <li
              className={`relative mt-6 cursor-default overflow-hidden rounded-xl border border-[rgb(56,58,56)] pb-14 pl-20 pr-20 pt-5 hover:shadow-lg hover:shadow-zinc-800`}
              key={index}
            >
              <div
                className={`${
                  experience.endYear === "" ? "hidden" : ""
                } dot absolute left-10 z-10 mt-5 h-3 w-3 rounded-full bg-[rgb(56,58,56)]`}
              ></div>
              <div className="line absolute left-[45px] mt-5 h-[calc(100%-5rem)] w-0.5 rounded-full bg-[rgb(56,58,56)]"></div>
              <time className="absolute left-3 mb-3 mt-4 -rotate-90 text-xs font-normal text-[rgb(137,143,137)]">
                {experience.endYear}
              </time>
              <div className="flex items-center gap-3 text-2xl font-semibold text-blue-400">
                {experience.enterpriseUrl ? (
                  <Tooltip
                    content="Cliquer pour voir le site web"
                    placement="top"
                    style="light"
                    className="absolute"
                  >
                    <a href={experience.enterpriseUrl} target="_blank">
                      {experience.enterprise}
                    </a>
                  </Tooltip>
                ) : (
                  experience.enterprise
                )}
              </div>
              <p className="mt-0.5 gap-3 text-xl text-white">
                {experience.mission}
              </p>
              <span className="mt-1 flex items-center gap-2 text-lg font-semibold text-gray-400">
                <LocationDot svgClass="w-3 fill-gray-400" />{" "}
                {experience.location}
              </span>
              <div className="mt-5 space-y-3 indent-2 text-sm font-normal text-gray-400">
                {experience.paragraphs &&
                  experience.paragraphs.map((paragraph, index) => {
                    return (
                      <p key={index} className="">
                        {paragraph}
                      </p>
                    );
                  })}
              </div>
              <div className="dot absolute bottom-10 left-10 z-10 h-3 w-3 rounded-full bg-[rgb(56,58,56)]"></div>
              <time className="absolute bottom-6 left-3 mb-3 mt-4 -rotate-90 text-xs font-normal text-[rgb(137,143,137)]">
                {experience.startYear}
              </time>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
