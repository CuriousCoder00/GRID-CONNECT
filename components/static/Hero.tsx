"use client";

import Image from "next/image";

import React, { useState } from "react";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import { Gradient } from "./Gradient";
import { Icon } from "./Icon";

import { Meteors } from "@/components/animated/meteors";
import { BackgroundBeams } from "@/components/animated/background-beams";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { sampleArcs } from "@/data/sampleArcs";

const World = dynamic(() => import("@/components/animated/globe").then((m) => m.World), {
  ssr: false,
});

type Props = {};

export const Hero = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [hovered1, setHovered1] = useState<boolean>(false);
    
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="relative max-w-[1280px] md:px-10 mx-auto md:pt-24 pt-16">
        <Gradient />
        <div className="flex">
          <div className="relative ">
            <Image
              aria-hidden="true"
              className=""
              src="https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg"
              width="437"
              height="900"
              alt=""
            />
            <Gradient />
            <div className="mx-auto my-3 ">
              <span className="relative z-[11]">
                <svg
                  aria-hidden="true"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  version="1.1"
                  width="24"
                  data-view-component="true"
                  className=" dark:text-white"
                >
                  <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
                </svg>
                <span
                  className="absolute left-0 top-0 w-6 h-full shadow-xl shadow-cyan-400 "
                  style={{
                    backgroundColor: "var(--mktg-accent-primary)",
                    filter: "blur(17px)",
                  }}
                ></span>
              </span>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)",
                marginLeft: "11px",
              }}
              className=" max-md:w-[2px] w-[3px] h-[300px] max-md:h-[300px] max-sm:h-[300px] max-ssm:h-[900px] max-sssm:h-[1150px] line rounded-md"
            ></div>
          </div>
          <div className=" absolute pt-32 mt-28 max-md:px-4 ml-4 md:ml-12">
            <div className="relative md:top-20 mb-[24px]">
              <a
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                href=""
                className=" border-[1px] border-neutral-600 copilot rounded-full inline-block bg-slate-200 dark:bg-slate-900"
              >
                <div className="flex gap-2 items-center p-3 px-5">
                  <div className="rounded-full border dark:border-slate-200 border-slate-800 p-1 hover:bg-slate-400">
                    <Icon />
                  </div>
                  <div className="md:pr-5 pr-3 md:mr-2 md:pl-2">
                    <div className="font-medium dark:text-white text-[16px] max-md:text-[14px] leading-5">
                      Introducing Grid Connects
                    </div>
                    <div className="text-neutral-500 max-md:text-[14px] text-[16px]">
                      Experience the power of community with GridConnect
                    </div>
                  </div>
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`  dark:text-white transition ease-in duration-150 ${
                        hovered ? "translate-x-0 " : "-translate-x-1"
                      }`}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                      ></path>
                      <path
                        className={` dark:text-white transition ease-in duration-150 ${
                          hovered ? " opacity-100" : "opacity-0 "
                        }`}
                        stroke="currentColor"
                        d="M1.75 8H11"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
            <h1 className="md:mt-24 lg:mt-28 sm:mt-10 relative z-2 max-md:mb-5 text-[48px] md:text-[72px] max-sm:leading-[60px] max-md:leading-[80px] lg:text-[80px] font-semibold dark:text-white">
              {" "}
              Let&apos;s connect from&nbsp;here
            </h1>
            <p className="relative z-1 text-[24px] md:text-[28px]  lg:text-[32px] leading-[30px] md:leading-[36px] lg:leading-[44px] mb-5 md:mb-12 md:10/12  lg:w-9/12 text-[#7d8590]">
              Explore diverse communities tailored to variouswith GridConnect -
              A Community of your interests. Experience the power of community
              with GridConnect. Be a part of something bigger.
            </p>
            <div className="flex lg:w-11/12 md:space-x-5 max-md:flex-col">
              <form action="">
                <div className=" grid max-md:grid-rows-2 md:grid-cols-2 md:border md:rounded-lg md:shadow-xl md:border-blue-500 dark:border-[#ae88f9]">
                  <dl>
                    <dd>
                      <Input
                        className="h-12 dark:focus:outline-none max-md:rounded-md md:rounded-s-md right-0 w-full placeholder:text-[16px] pl-3 border border-blue-500 md:border-none"
                        placeholder="Email address"
                        type="email"
                        name="user_email"
                        id="user_email"
                        autoComplete="off"
                        spellCheck="false"
                      />
                    </dd>
                  </dl>
                  <button
                    type="button"
                    className="mb-10 md:mb-0 py-3 w-full text-[16px] max-md:rounded-md md:rounded-e-md bg-purple-800 hover:bg-purple-600 transition-colors delay-150 duration-150 ease-in-out text-white font-semibold"
                  >
                    Sign up for Grid Connect
                  </button>
                </div>
              </form>
              <span className="border-t-[1px] md:border-l-[1px] border-neutral-700 md:mx-10 mb-3 md:mb-0"></span>
              <Link
                onMouseEnter={() => setHovered1(true)}
                onMouseLeave={() => setHovered1(false)}
                href='/explore' scroll={false}
                className="flex items-center w-full md:w-auto justify-center text-[16px] py-3 px-5 max-md:mt-4 rounded-md border-[#ae88f9] border-[1.5px] dark:text-white"
              >
                Explore
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={` arrow-symbol-mktg dark:text-white ml-3 transition ease-in duration-150 ${
                    hovered1 ? "translate-x-0 " : "-translate-x-1"
                  }`}
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                  ></path>
                  <path
                    className={` dark:text-white transition ease-in duration-150 ${
                      hovered1 ? " opacity-100" : "opacity-0 "
                    }`}
                    stroke="currentColor"
                    d="M1.75 8H11"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="w-full flex justify-center">
              <Gradient />
            </div>
          </div>
        </div>
        <div className="container min-h-screen flex flex-row items-center justify-center py-20 h-screen md:h-auto relative w-full">
          <Gradient />
          <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="div"
            >
              <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
                Connect and interact with millions of people worldwide
              </h2>
            </motion.div>
            <div className="absolute w-full top-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
          <Meteors number={100} />
            <div className="absolute w-full -bottom-15 h-full md:h-full z-10">
              <World data={sampleArcs} globeConfig={globeConfig} />
            </div>
          </div>
          <Gradient />
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
};
