import LocationDot from "../svg/location-dot";
import SchoolSvg from "../svg/school";

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
      description: "",
    },
    {
      school: "Université de mathématiques et d'informatique",
      location: "Poitiers",
      endYear: 2020,
      startYear: 2017,
      cursusLabel: "Licence",
      cursus: "Parcours mathématiques et informatique",
      honours: "passable",
      description: "",
    },
  ];

  return (
    <ol className="relative border-l border-gray-200 ">
      {FORMATIONS.map((formation, index) => {
        return (
          <li
            className={`mb-10 ml-8  ${
              FORMATIONS.length - 1 === index ? "h-64" : "h-40"
            }`}
          >
            <div className="absolute -left-1.5 mt-5 h-3 w-3 rounded-full border border-white bg-gray-200 "></div>
            <time className="absolute -left-9 mb-3 mt-4 -rotate-90 text-sm font-medium text-gray-200">
              {formation.endYear}
            </time>
            <span className="mt-4 flex items-center gap-3 text-2xl font-semibold text-blue-400">
              {formation.school}
            </span>
            <p className="mt-0.5 gap-3 text-xl text-gray-400">
              {formation.cursusLabel} {formation.cursus} avec mention{" "}
              <span className="font-bold">{formation.honours}</span>
            </p>
            <span className="mt-4 flex items-center gap-3 text-lg font-semibold text-gray-400">
              <LocationDot svgClass="w-4 fill-gray-400" /> {formation.location}
            </span>
            <p className="mb-14 mt-3 text-base font-normal text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium eius similique animi quasi laborum, accusantium sint,
              impedit eveniet quaerat ea cumque, reiciendis alias a est quod
              nostrum porro? Voluptate, tempora.
            </p>
            {FORMATIONS.length - 1 === index && (
              <div>
                {" "}
                <time className="absolute -left-8 mb-1 -rotate-90 text-xs font-medium text-gray-200">
                  {formation.startYear}
                </time>
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 "></div>
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
