"use client";
import React, { useState } from "react";
import {
  DarkModeToggle,
  Sidebar,
  SidebarBody,
  SidebarLink,
  useSidebar,
} from "@/components/animated/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/static/Icon";
import { APP_NAME } from "@/constants/TextConsts";
import { Button } from "@/components/ui/button";
import { MoonStarIcon, SunMoonIcon } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
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
    {
      label: "Logout",
      href: "/",
      onCLickHandler: logout(),
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  // logout function
  function logout() {
    console.log("Logged out");
  }
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {!open ? (
              <Icon />
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  scroll={false}
                  href="/feed"
                  className="font-bold flex text-2xl gap-3 justify-center items-center"
                >
                  <Icon /> {APP_NAME}s
                </Link>
              </div>
            )}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
              <DarkModeToggle />
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "GridConnects",
                href: "#",
                icon: <Icon size={30} />,
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      {children}
    </div>
  );
}

