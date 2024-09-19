import React, { useState } from "react";

type bgProps = {
  children?: React.ReactNode;
};

export function GridBackground({ children }: bgProps) {

  return (
    <div className="md:h-[60rem] h-screen dark:bg-slate-950 w-full dark:bg-grid-white/[0.3] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
      <div className="absolute dark:bg-slate-950 pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 md:mt-12 max-md:mt-64">
        {children}
      </div>
      <div className="absolute top-0 bg-gradient-to-b dark:to-slate-950 from-transparent to-slate-100 md:h-[50rem] h-full w-full bg-clip-border"/>
      <div className="absolute bottom-0 bg-white max-md:hidden dark:bg-slate-950 h-[20rem] w-full bg-clip-border"/>
    </div>
  );
}
