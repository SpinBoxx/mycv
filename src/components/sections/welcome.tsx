import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import GrabThis from "../animations/grab-this";
import My3dRoom from "../spline/myroom";
import Typed from "../typedJs/typed-js";

export default function Welcome() {
  const [isClickedGrabThisPopUp, setIsClickedGrabThisPopUp] = useState(false);
  const handleChangeIsClickedGrabThisPopUp = () => {
    setIsClickedGrabThisPopUp(true);
    localStorage.setItem("isClickedGrabThisPopUp", "1");
  };

  useEffect(() => {
    setTimeout(() => {
      setIsClickedGrabThisPopUp(() => {
        console.log(localStorage.getItem("isClickedGrabThisPopUp"));

        return localStorage.getItem("isClickedGrabThisPopUp") === "0"
          ? false
          : true;
      });
    }, 100);
  }, []);

  return (
    <section id="welcome" className="h-full w-full">
      <div
        id="welcomeHeader"
        className="relative flex w-fit items-center gap-5 text-4xl font-bold"
      >
        <Typed
          sentences={["Bonjour,", "Bienvenu dans mon univers ヾ(⌐■_■)ノ♪"]}
          backSpeed={50}
          typeSpeed={60}
        />
      </div>
      <div
        id="welcomeRoom"
        className="relative mt-10 h-full hover:cursor-grab active:cursor-grabbing"
        onMouseDown={handleChangeIsClickedGrabThisPopUp}
      >
        {!isClickedGrabThisPopUp && (
          <div className="absolute bottom-0 left-0 right-0 top-0 z-10 mx-auto my-auto h-fit w-fit break-words rounded-full bg-slate-900 px-5 py-1">
            <GrabThis />
          </div>
        )}

        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={1} />
            <spotLight
              intensity={1.5}
              angle={1.3}
              penumbra={1}
              position={[9, 15, 10]}
              castShadow
            />
            <My3dRoom />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
