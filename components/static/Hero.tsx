"use client";

import Image from "next/image";

import React, { useState } from "react";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import { Gradient } from "./Gradient";
import { Icon } from "./Icon";

import { BackgroundBeams } from "@/components/animated/background-beams";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

export const Hero = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-[1280px] md:px-10 mx-auto">
        <Gradient />
        <div className="flex min-h-screen justify-center items-center">
          <Gradient />
          <div className="container flex flex-col justify-center items-center h-full">
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
              <h1 className="font-bold text-slate-800 text-center text-pretty dark:text-white lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
                Connect and interact with millions of people worldwide
              </h1>
              <p className="mt-5 text-center text-slate-500 md:text-xl text-sm">
                Explore diverse communities tailored to variouswith GridConnect
                - A Community of your interests. Experience the power of
                community with GridConnect. Be a part of something bigger.
              </p>
            </motion.div>
            <Link
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              href="/explore"
              scroll={false}
              className="z-10 flex items-center justify-center mt-8 bg-blue-800 px-4 py-1 font-bold text-sm rounded-md text-white"
            >
              Explore
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={` arrow-symbol-mktg dark:text-white ml-3 transition ease-in duration-150 ${
                  hovered ? "translate-x-0 " : "-translate-x-1"
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
                    hovered ? " opacity-100" : "opacity-0 "
                  }`}
                  stroke="currentColor"
                  d="M1.75 8H11"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
            </Link>
            <div className="w-full flex justify-center">
              <Gradient />
            </div>
          </div>
          <BackgroundBeams />
        </div>
        <div className="container flex flex-row items-center justify-center py-20 w-full">
          <Gradient />
          <div className="max-w-7xl mx-auto w-full relative overflow-hidden px-4">
            <div className="flex">
              <div className="md:w-[40rem] flex flex-col gap-20 justify-center md:items-center h-full z-20 md:text-2xl sm:text-2xl text-xl items-start md:ml-14 mt-5 dark:text-neutral-400">
                <p>
                  Connect with like-minded people and expand your horizons.
                  Discover, share, and grow together in a global community.
                </p>
                <p>
                  Our platform is designed to bring people from all corners of
                  the world together. Whether you're looking to network, find
                  collaborators, or simply meet new friends, we've got you
                  covered.
                </p>
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </div>
  );
};
