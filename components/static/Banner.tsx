"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "@/components/animated/google-gemini-effect";
import { Gradient } from "@/components/static/Gradient";

export function Banner() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      className="sm:h-[400vh] w-full dark:border dark:border-white/[0.1] rounded-md sm:pt-40"
      ref={ref}
    >
      <div className="flex justify-center">
        <Gradient />
        <div className="flex flex-col justify-center items-center sm:hidden h-[50vh]">
          <h1 className="text-3xl text-center mb-4">Find Your Community on Grid Connect</h1>
          <p className="light:text-neutral-800 dark:text-neutral-500">From gaming, to music, to learning, there&apos;s a place for you.</p>
        </div>
      </div>

      <GoogleGeminiEffect
        className="max-sm:hidden"
        title="Find Your Community on Grid Connect"
        description="From gaming, to music, to learning, there's a place for you."
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}
