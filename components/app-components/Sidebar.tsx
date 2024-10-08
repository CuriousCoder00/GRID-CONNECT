"use client";
import React, { useState } from "react";

import { IconBrandTabler, IconBuildingCommunity } from "@tabler/icons-react";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "@/components/ui/animated/sidebar";
import { LucideMessageSquareText, LucideSquareActivity } from "lucide-react";

const links = [
  {
    label: "Your Activities",
    href: "/activities",
    icon: (
      <LucideSquareActivity className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />
    ),
  },
  {
    label: "Communities",
    href: "/communities",
    icon: (
      <IconBuildingCommunity className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />
    ),
  },
  // {
  //   label: "Your Feed",
  //   href: "/feed",
  //   icon: (
  //     <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />
  //   ),
  // },
];

export const SidebarNavigations = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between bg-white dark:bg-black gap-10 h-full">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
      </SidebarBody>
    </Sidebar>
  );
};
