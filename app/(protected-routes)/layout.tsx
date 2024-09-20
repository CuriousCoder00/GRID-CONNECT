"use client";
import React from "react";

import {
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { SidebarNavs } from "@/components/Custom/Sidebar";
import { Icon } from "@/components/Custom/Icon";

export default function ProtectedRoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    {
      label: "feed",
      href: "/feed",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "/profile",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "/settings",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  return (
    <div className="flex flex-col h-screen w-full dark:bg-black bg-white">
      <div className="flex items-center h-16">
        <div className="max-md:container max-md:pl-16 flex w-full md:pr-12 items-center justify-between">
          <Icon />
          <div className="rounded-full w-10 h-10 bg-slate-700"></div>
        </div>
      </div>
      <div className="flex max-md:flex-col w-full h-full">
        <SidebarNavs />
        <div className="flex h-full w-full">{children}</div>
      </div>
    </div>
  );
}
