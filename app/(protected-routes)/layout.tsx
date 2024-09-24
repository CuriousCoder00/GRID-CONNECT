"use client";
import React from "react";
import { SidebarNavigations } from "@/components/app-components/Sidebar/Sidebar";

import { AppBar } from "@/components/app-components/Header/AppBar";

export default function ProtectedRoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col max-h-screen h-screen max-w-screen overflow-hidden dark:bg-black bg-white">
      <AppBar />
      <div className="flex max-md:flex-col w-full h-full">
        <div className="z-[200] flex justify-start items-start">
          <SidebarNavigations />
        </div>
        <div className="p-2 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-black flex flex-col gap-2 flex-1 w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
