import React from "react";

const Banner = () => {
  return (
    <div className="h-[60vh] md:h-[70vh] max-sm:px-5 dark:bg-slate-950 w-full dark:bg-grid-white/[0.3] bg-grid-black/[0.2] flex flex-col items-center justify-center">
      <div className="absolute dark:bg-slate-950 pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20">
        <div className="flex flex-col md:items-center justify-center w-full h-full dark:text-white text-black">
          <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold">Unite with Passion.</h1>
          <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold">Connect with Purpose.</h1>
          <p className=" mt-4">
            From creators to innovators, there&apos;s a community waiting for
            you.
          </p>
        </div>
      </div>
      <div className="absolute top-0 bg-gradient-to-b dark:to-slate-950 from-transparent to-slate-100 md:h-[50rem] h-full w-full bg-clip-border" />
      <div className="absolute bottom-0 bg-white max-md:hidden dark:bg-slate-950 h-[20rem] w-full bg-clip-border" />
    </div>
  );
};

export default Banner;
