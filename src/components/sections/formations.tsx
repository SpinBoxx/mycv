import { db } from "@/database/database";
import LocationDot from "../svg/location-dot";

let contact: {
  name: string;
};

// async function getContact() {
//   const _contact = await db
//     .selectFrom("contact")
//     .selectAll()
//     .executeTakeFirstOrThrow();
//   contact = _contact;
// }

export default function Formations() {
  const FORMATIONS = [
    {
      school: "Ynov",
      location: "Nantes",
      endYear: 2022,
      startYear: 2020,
      cursusLabel: "Mastère",
      cursus: "Expert développeur web",
      honours: "bien",
      paragraphs: [
        "J'ai pu effectuer lors de ces 2 années, beaucoup de projets en équipe sur des technologies innovantes (React, Vue, Adonis) en étant développeur front comme développeur back. Au total c'est plus de 13 projets tout aussi complexe les uns que les autres qui m'ont permis de monter en compétences sur les technologies Js.",
        "J'ai pu également beaucoup apprendre sur les concepts d'architectures logicielles ce qui me permet aujourd'hui de pouvoir suggérer telle ou telle architecture en fonction du contexte. J'ai aussi pu me former sur la gestion de projet en étant moi-même chef de projet d'une équipe de 7 personnes pendant 2 ans. Notre but était de développer, réaliser de la communication autour d'une idée de site internet.",
      ],
    },
    {
      school: "Université de mathématiques et d'informatique",
      location: "Poitiers",
      endYear: 2020,
      startYear: 2017,
      cursusLabel: "Licence",
      cursus: "Parcours mathématiques et informatique",
      honours: "passable",
      paragraphs: [
        "Mes 3 années à l'université ont été très enrichissantes, j'ai pu continuer le cursus scientifique que j'avais commencé au lycée. Lors de la première année, j'avais comme matière l'informatique, les mathématiques et la physique chimie mais ensuite j'ai pu choisir un parcours informatique/mathematiques. C'est pendant ces 2 années que j'ai pu acquérir des bases solides en algorithmie et programmation sur des langages comme C, du Ocaml ou encore du Ada.",
        ,
        "J'ai acquis aussi, grâce à mon double parcours, des notions importantes en mathématiques comme les graphes, la combinatoire et les probabilités discrètes. Ces notions venaient complémenter ce que j'apprenais en algorithmie et m'ont permis, aujourd'hui, d'être à l'aise et de prendre en main rapidement les outils et les concepts de programmation.",
      ],
    },
  ];

  return (
    <section id="formations">
      <div id="about-header" className="relative flex w-fit items-center gap-5">
        <p className="text-4xl font-bold">Formations {contact.name}</p>
        <span className="absolute -right-48 top-6 h-1 w-40 rounded-full bg-effect-blue"></span>
      </div>
      <ol className="">
        {FORMATIONS.map((formation, index) => {
          return (
            <li
              className={`relative mt-6 cursor-default overflow-hidden rounded-xl border border-[rgb(56,58,56)] p-5 pl-20 hover:shadow-lg hover:shadow-zinc-800`}
              key={index}
            >
              <div className="dot  absolute left-10 z-10 mt-5 h-3 w-3 rounded-full  bg-[rgb(56,58,56)]"></div>
              <div className="line absolute left-[45px] mt-5 h-[calc(100%-5rem)] w-0.5 rounded-full bg-[rgb(56,58,56)]"></div>
              <time className="absolute left-3 mb-3 mt-4 -rotate-90 text-xs font-normal text-[rgb(137,143,137)]">
                {formation.endYear}
              </time>
              <span className="flex items-center gap-3 text-2xl font-semibold text-blue-400">
                {formation.school}
              </span>
              <p className="mt-0.5 gap-3 text-xl text-white">
                {formation.cursusLabel} {formation.cursus} avec mention{" "}
                <span className="font-bold">{formation.honours}</span>
              </p>
              <span className="mt-4 flex items-center gap-3 text-lg font-semibold text-gray-400">
                <LocationDot svgClass="w-4 fill-gray-400" />{" "}
                {formation.location}
              </span>
              <div className="mt-3 space-y-3 indent-2 text-sm font-normal text-gray-400">
                {formation.paragraphs &&
                  formation.paragraphs.map((paragraph, index) => {
                    return (
                      <p
                        key={index}
                        className="first-letter:text-xl first-letter:font-medium"
                      >
                        {paragraph}
                      </p>
                    );
                  })}
              </div>
              <div className="dot absolute bottom-10 left-10 z-10 h-3 w-3 rounded-full bg-[rgb(56,58,56)]"></div>
              <time className="absolute bottom-6 left-3 mb-3 mt-4 -rotate-90 text-xs font-normal text-[rgb(137,143,137)]">
                {formation.startYear}
              </time>
              {/* {FORMATIONS.length - 1 === index && (
                <div>
                  {" "}
                  <time className="absolute -left-8 -mt-16 mb-1 -rotate-90 text-xs font-medium text-gray-200">
                    {formation.startYear}
                  </time>
                  <div className="absolute -left-1.5 -mt-16 h-3 w-3 rounded-full border border-white bg-gray-200 "></div>
                </div>
              )} */}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
