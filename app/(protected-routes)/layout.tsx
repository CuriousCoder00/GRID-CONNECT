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
        <div className="flex h-full w-full">{children}</div>
      </div>
    </div>
  );
}
