"use client";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

import { IconBrandTabler } from "@tabler/icons-react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/animated/sidebar";

const links = [
  {
    label: "feed",
    href: "/feed",
    icon: (
      <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />
    ),
  },
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

