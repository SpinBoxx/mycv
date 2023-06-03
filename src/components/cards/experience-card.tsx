import { Tooltip } from "flowbite-react";
import LocationDot from "../svg/location-dot";

interface Props {
  title: string;
  experienceNumber?: number;
  subtitle: string;
  titleUrl: string;
  location: string;
  paragraphs: string[];
  startYear: string;
  endYear?: string;
}

export default function CardExperience({
  title,
  experienceNumber,
  titleUrl,
  subtitle,
  location,
  paragraphs,
  startYear,
  endYear,
}: Props) {
  return (
    <li
      className={`relative mt-6 cursor-default overflow-hidden rounded-xl border border-[rgb(56,58,56)] pb-14 pl-[4.5rem] pr-10 pt-5 hover:shadow-lg hover:shadow-zinc-800 md:px-20`}
    >
      <div
        className={`${
          endYear === "" ? "hidden" : ""
        } dot absolute left-10 z-10 mt-5 h-3 w-3 rounded-full bg-[rgb(56,58,56)]`}
      ></div>
      <div className="line absolute left-[45px] mt-5 h-[calc(100%-5rem)] w-0.5 rounded-full bg-[rgb(56,58,56)]"></div>
      <time className="absolute left-3 mb-3 mt-4 -rotate-90 text-xs font-normal text-[rgb(137,143,137)]">
        {endYear}
      </time>
      <div className="flex items-center gap-3 text-2xl font-semibold text-blue-400">
        {titleUrl ? (
          <Tooltip
            content="Cliquer pour voir le site web"
            placement="top"
            style="light"
            className="absolute"
          >
            <a href={titleUrl} target="_blank">
              {title}{" "}
              <span className="text-sm text-zinc-400">
                {experienceNumber && "#" + experienceNumber}
              </span>
            </a>
          </Tooltip>
        ) : (
          title
        )}
      </div>
      <p className="mt-0.5 gap-3 text-xl text-white">{subtitle}</p>
      <span className="mt-1 flex items-center gap-2 text-lg font-semibold text-gray-400">
        <LocationDot svgClass="w-3 fill-gray-400" /> {location}
      </span>
      <div className="mt-5 space-y-3 indent-2">
        {paragraphs &&
          paragraphs.map((paragraph, index) => {
            return (
              <p key={index} className="text-paragraph">
                {paragraph}
              </p>
            );
          })}
      </div>
      <div className="dot absolute bottom-10 left-10 z-10 h-3 w-3 rounded-full bg-[rgb(56,58,56)]"></div>
      <time className="absolute bottom-6 left-3 mb-3 mt-4 -rotate-90 text-xs font-normal text-[rgb(137,143,137)]">
        {startYear}
      </time>
    </li>
  );
}
