import CardExperience from "../cards/experience-card";

export default function Experiences() {
  const EXPERIENCES = [
    {
      enterprise: "Néo-soft",
      enterpriseUrl: "https://www.neosoft.fr/",
      mission: "Ingénieur développeur web pour la Banque Postale",
      location: "Nantes",
      endYear: "",
      startYear: "2022",
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
      endYear: "2022",
      startYear: "2021",
      paragraphs: [
        "Lors de cette mission, j'ai eu l'occasion de développer ma 1ere application web avec ASP.NET. Dans un contexte où je partais from scratch au niveau des connaissances du framework et où, j'évoluais dans le secteur bancaire, j'ai su relever le défi avec succès. J'ai pu développer en moins d'un an, tout en continuant mon rythme scolaire, une application proche du métier, avec qui j'ai pu faire de multiples réunions pour comprendre leurs besoins. J'en ai fait une application réactive et moderne. J'ai pu cocher toutes les demandes du cahier des charges, tout en optimisant mon application en créant, par exemple, un orm personnalisé de type générique pour toutes mes entités du projet. ",
        "Avec responsable, nous appliquions des méthodes agiles pour manager ce projet. Je faisais un compte rendu chaque semaine pour lui montrer mes avancements. J'avais également des plus grosses charges de travail lors de mes vacances scolaires pour me challenger et développer sous des contraintes ce qui me plaisait fortement.",
      ],
    },
  ];

  return (
    <section id="formations" className="pb-5">
      <div id="about-header" className="relative flex w-fit items-center gap-5">
        <p className="custom-underline text-h1">Experiences</p>
        <span className="hidden xl:relative xl:top-1.5 xl:block xl:h-1 xl:w-20 xl:rounded-full xl:bg-effect-blue"></span>
      </div>
      <ol className="">
        {EXPERIENCES.map((experience, index) => {
          return (
            <CardExperience
              key={index}
              title={experience.enterprise}
              experienceNumber={EXPERIENCES.length - index}
              subtitle={experience.mission}
              titleUrl={experience.enterpriseUrl}
              location={experience.location}
              paragraphs={experience.paragraphs}
              startYear={experience.startYear}
              endYear={experience.endYear}
            />
          );
        })}
      </ol>
    </section>
  );
}
