import React, { useState } from "react";

type bgProps = {
  children?: React.ReactNode;
};

export function GridBackground({ children }: bgProps) {

  return (
    <div className="h-[50rem] dark:bg-slate-950 w-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
      <div className="absolute dark:bg-slate-950 pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 mt-12">
        {children}
      </div>
      <div className="absolute top-0 bg-gradient-to-b dark:from-transparent dark:to-slate-950 from-transparent to-slate-100 h-full w-full bg-clip-border"/>
    </div>
  );
}
