"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { GridBackground } from "@/components/Landing/gridBackground";
import { Icon } from "./Custom/Icon";
import { IconBrandNextjs } from "@tabler/icons-react";
import { APP_NAME } from "@/lib/constants/TextConsts";
import Image from "next/image";
type Props = {};

export const Hero = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [hovered1, setHovered1] = useState<boolean>(false);
  const [hovered2, setHovered2] = useState<boolean>(false);

  return (
    <div className="w-full">
      <GridBackground>
        <div className="md:container h-screen flex justify-start items-center mx-auto flex-col">
          <Link
            onMouseEnter={() => setHovered1(true)}
            onMouseLeave={() => setHovered1(false)}
            href='/'
            target="_blank"
            className="flex items-center justify-center mb-12 px-4 py-2 border border-slate-500 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-950 gap-3 font-bold text-sm rounded-full dark:text-white text-slate-700 cursor-pointer"
          >
            <Icon size={25} animate={"bounce"} />
            Open Source
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
            className="div md:container"
          >
            <h1 className="font-bold text-slate-800 text-center md:text-pretty text-balance dark:text-white lg:text-7xl md:text-5xl sm:text-4xl text-4xl from-accent-foreground">
              Connect and interact with millions of people worldwide
            </h1>
            <p className="mt-10 text-center text-balance dark:text-slate-400 text-slate-600 md:text-xl text-md font-medium">
              Explore diverse communities tailored to various catagories with
              {APP_NAME} - A Community of your interests. Experience the power
              of community with {APP_NAME}. Be a part of something bigger.
            </p>
          </motion.div>
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
            className="div flex gap-4 justify-center items-center"
          >
            <Link
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              href="/explore"
              scroll={false}
              className="z-10 flex items-center justify-center mt-8 bg-slate-800 dark:bg-white px-8 py-2 font-bold text-sm rounded-md dark:text-slate-800 text-white"
            >
              Explore
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={` arrow-symbol-mktg dark:text-slate-700 text-white ml-3 transition ease-in duration-150 ${
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
                  className={` dark:text-slate-700 text-white transition ease-in duration-150 ${
                    hovered ? " opacity-100" : "opacity-0 "
                  }`}
                  stroke="currentColor"
                  d="M1.75 8H11"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
            </Link>
            <div className="h-10 mt-8 w-[2px] bg-slate-400" />
            <Link
              onMouseEnter={() => setHovered2(true)}
              onMouseLeave={() => setHovered2(false)}
              href="/auth/login"
              scroll={false}
              className="z-10 flex items-center justify-center mt-8 bg-slate-800 dark:bg-white px-8 py-2 font-bold text-sm rounded-md dark:text-slate-800 text-white"
            >
              Login
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={` arrow-symbol-mktg dark:text-slate-700 text-white ml-3 transition ease-in duration-150 ${
                  hovered2 ? "translate-x-0 " : "-translate-x-1"
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
                  className={` dark:text-slate-700 text-white transition ease-in duration-150 ${
                    hovered2 ? " opacity-100" : "opacity-0 "
                  }`}
                  stroke="currentColor"
                  d="M1.75 8H11"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
            </Link>
          </motion.div>
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
            className="mt-40 text-4xl font-semibold flex flex-col justify-center items-center max-md:hidden"
          >
            <h1>Powered By</h1>
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
              className="flex justify-center items-center gap-8 h-20 overflow-hidden"
            >
              <Image
                width={112}
                height={112}
                src="/nextjs.svg"
                alt="NextJS"
                className="w-28 h-28 dark:invert-0 invert text-white"
              />
              <Image
                width={112}
                height={112}
                src="/vercel.svg"
                alt="NextJS"
                className="w-28 h-28 dark:invert-0 invert text-white"
              />
              <div className="flex justify-center items-center gap-2">
                <Image
                  width={40}
                  height={40}
                  src="/shadcn-ui.svg"
                  alt="NextJS"
                  className="w-10 h-10 dark:invert text-white"
                />
                <span className="text-xl">ShadCN UI</span>
              </div>
            </motion.div>
          </motion.div>
          {/* <div className="container flex flex-row items-center justify-center py-20 w-full">
            
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
            </div> */}
          {/*  */}
          {/* </div>     */}
        </div>
      </GridBackground>
    </div>
  );
};
