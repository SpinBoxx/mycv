import CakeCandles from "@/components/svg/cake-candles";
import GithubSvg from "@/components/svg/github";
import LinkedinSvg from "@/components/svg/linkedin";
import LocationDot from "@/components/svg/location-dot";
import SquareEnvelope from "@/components/svg/square-envelope";
import Image from "next/image";
import CvBase64 from "../../../../public/cv.json";

export default function LeftBar() {
  return (
    <section id="leftBar" className="fixed w-[350px] flex-none grow-0">
      <div className="relative flex flex-col items-center rounded-xl bg-[#111010] p-6">
        <div className="xl:h-36"></div>
        <div className="absolute -top-10 flex w-60 items-center justify-center rounded-3xl bg-blue-500 p-3">
          <Image
            src={"/cafe_triste.jpg"}
            width={1000}
            height={1000}
            alt="avatar"
            className=" w-[19rem] rotate-12 rounded-3xl duration-500 hover:rotate-0"
          ></Image>
        </div>

        <div className="mt-14 w-fit rounded-md bg-[rgb(28,29,28)] px-4 py-1.5 text-center hover:cursor-default">
          <span className="text-sm font-medium text-zinc-400">
            Développeur full-stack
          </span>
        </div>
        <div className="mt-10 flex gap-5">
          <LinkedinSvg svgClass="fill-zinc-600 h-10 hover:scale-110 hover:duration-300 hover:cursor-pointer"></LinkedinSvg>
          <GithubSvg svgClass="fill-zinc-600 h-10 hover:scale-110 hover:duration-300 hover:cursor-pointer"></GithubSvg>
          <SquareEnvelope svgClass="fill-zinc-600 h-10 hover:scale-110 hover:duration-300 hover:cursor-pointer"></SquareEnvelope>
        </div>
        <div className="mt-6 w-full space-y-2 divide-y divide-slate-700 rounded-xl bg-[rgb(28,29,28)] p-5">
          <div className="flex gap-3">
            <div className="w-fit rounded-lg bg-black p-3 hover:cursor-pointer hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-500">
              <LocationDot svgClass="h-5 fill-blue-300"></LocationDot>
            </div>
            <div>
              <p className="text-sm text-zinc-400">Emplacement</p>
              <span className="font-medium">France, Nantes, 44000</span>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <div className="group w-fit rounded-lg bg-black p-3 hover:cursor-pointer hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-500">
              <CakeCandles svgClass="h-5 fill-emerald-300 group-hover:fill-white"></CakeCandles>
            </div>
            <div>
              <p className="text-sm text-zinc-400">Âge</p>
              <span className="font-medium">23 ans</span>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <a href={CvBase64.cv} download="CV_Quentin_MIMAULT.pdf">
            <button className="rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-8 py-3 duration-300 hover:scale-105">
              Télécharger mon CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
