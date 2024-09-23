"use client";
import React from "react";
import {
  Sidebar
} from "./_components/Sidebar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex max-h-[90vh] w-full h-full overflow-hidden">
      <div className="flex flex-col gap-2 sm:border-r-2 dark:sm:border-r-slate-800 sm:border-r-slate-200">
        <Sidebar />
      </div>
      <div className="relative flex flex-col w-full overflow-y-auto gap-1 p-2 mt-5">
        {children}
      </div>
    </div>
  );
}

export default layout;
