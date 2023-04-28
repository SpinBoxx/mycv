import GithubSvg from "@/components/svg/github";
import LinkedinSvg from "@/components/svg/linkedin";
import SquareEnvelope from "@/components/svg/square-envelope";

interface Props {
  translateVantaSection: Function;
}

export default function VantaSection({ translateVantaSection }: Props) {
  return (
    <div className="mb-16 flex flex-col items-center justify-center text-center lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-center lg:pr-24 lg:text-left">
      <h1 className="title-font mb-2 text-4xl font-extrabold text-blue-500 lg:text-5xl">
        Quentin MIMAULT
      </h1>
      <p className="mb-4 mt-6 text-xl font-normal leading-relaxed text-gray-400">
        Web Developer full-stack in Nantes
      </p>
      <button
        onClick={() => translateVantaSection()}
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
  );
}
