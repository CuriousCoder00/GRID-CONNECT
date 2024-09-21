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
    <div className="flex flex-col h-screen w-full dark:bg-black bg-white">
      <AppBar />
      <div className="flex max-md:flex-col w-full h-full">
        <div className="flex z-[100]">
          <SidebarNavigations />
        </div>
        <div className="p-2 md:p-10 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-black flex flex-col gap-2 flex-1 w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
