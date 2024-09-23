"use client";
import React, { useEffect } from "react";
import {
  Sidebar,
  SidebarLinks,
  SidebarMobileLinks,
} from "./_components/Sidebar";
import { usePathname } from "next/navigation";

function layout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const links = [
    {
      label: "Account Settings",
      href: "/settings",
      active: path === "/settings",
    },
    {
      label: "Profile Info",
      href: "/settings/profile",
      active: path === "/settings/profile",
    },
    {
      label: "Communities",
      href: "/settings/communities",
      active: path === "/settings/communities",
    },
    {
      label: "Notifications",
      href: "/settings/notifications",
      active: path === "/settings/notifications",
    },
  ];

  return (
    <div className="relative flex max-h-[90vh] w-full h-full overflow-hidden">
      <div className="flex flex-col gap-2 sm:border-r-2 dark:sm:border-r-slate-800 sm:border-r-slate-200">
        <Sidebar>
          <SidebarLinks links={links} />
          <SidebarMobileLinks links={links} />
        </Sidebar>
      </div>
      <div className="relative flex flex-col w-full overflow-y-auto gap-1 p-2 mt-5">
        {children}
      </div>
    </div>
  );
}

export default layout;
