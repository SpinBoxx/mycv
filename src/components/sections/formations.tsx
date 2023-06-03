import CardExperience from "../cards/experience-card";
export default function Formations() {
  const FORMATIONS = [
    {
      school: "Ynov",
      schoolUrl: "https://www.ynov.com/campus/nantes/",
      location: "Nantes",
      endYear: "2022",
      startYear: "2020",
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
      schoolUrl:
        "https://formations.univ-poitiers.fr/fr/index/licence-XA/licence-XA/licence-informatique-JB1Y4088.html",
      location: "Poitiers",
      endYear: "2020",
      startYear: "2017",
      cursusLabel: "Licence",
      cursus: "Parcours mathématiques et informatique",
      honours: "passable",
      paragraphs: [
        "Mes 3 années à l'université, anciennemment appelée licence MIPC, ont été très enrichissantes, j'ai pu continuer le cursus scientifique que j'avais commencé au lycée. Lors de la première année, j'avais comme matière l'informatique, les mathématiques et la physique chimie mais ensuite j'ai pu choisir un parcours informatique/mathematiques. C'est pendant ces 2 années que j'ai pu acquérir des bases solides en algorithmie et programmation sur des langages comme C, du Ocaml ou encore du Ada.",
        "J'ai acquis aussi, grâce à mon double parcours, des notions importantes en mathématiques comme les graphes, la combinatoire et les probabilités discrètes. Ces notions venaient complémenter ce que j'apprenais en algorithmie et m'ont permis, aujourd'hui, d'être à l'aise et de prendre en main rapidement les outils et les concepts de programmation.",
      ],
    },
  ];

  return (
    <section id="formations" className="pb-5">
      <div id="about-header" className="relative flex w-fit items-center gap-5">
        <p className="custom-underline text-h1">Formations</p>
        <span className="hidden xl:relative xl:top-1.5 xl:block xl:h-1 xl:w-20 xl:rounded-full xl:bg-effect-blue"></span>
      </div>
      <ol className="">
        {FORMATIONS.map((formation, index) => {
          return (
            <CardExperience
              key={index}
              title={formation.school}
              subtitle={formation.cursus}
              titleUrl={formation.schoolUrl}
              location={formation.location}
              paragraphs={formation.paragraphs}
              startYear={formation.startYear}
              endYear={formation.endYear}
            />
          );
        })}
      </ol>
    </section>
  );
}
