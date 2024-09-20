import React, { useState } from "react";
import {
  DarkModeToggle,
  LogoutToggle,
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "../animated/sidebar";
import { Icon } from "./Icon";
import Link from "next/link";
import { APP_NAME } from "@/constants/TextConsts";
import {
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
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
export const SidebarNavs = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between bg-white dark:bg-black gap-10 h-full">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
            <LogoutToggle key={"logout"} />
            <DarkModeToggle key={"dark-mode"} />
          </div>
        </div>
      </SidebarBody>
    </Sidebar>
  );
};
