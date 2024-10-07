"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  Bell,
  Group,
  LucideMessageSquare,
  LucideMonitor,
  LucideShield,
  User,
} from "lucide-react";
import { Sidebar } from "@/components/app-components/account/Sidebar";

function AccountLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  const userSettingLinks = [
    {
      label: "Profile Settings",
      href: "/account",
      icon: <User className="size-5" />,
      active: path === "/account",
    },
    {
      label: "Privacy & Security",
      href: "/account/security",
      icon: <LucideShield className="size-5" />,
      active: path === "/account/security",
    },
    {
      label: "Devices",
      href: "/account/devices",
      icon: <LucideMonitor className="size-5" />,
      active: path === "/account/devices",
    },
  ];
  const appSettingLinks = [
    {
      label: "Communities",
      href: "/account/communities",
      icon: <Group className="size-5" />,
      active: path === "/account/communities",
    },
    {
      label: "Notifications",
      href: "/account/notifications",
      icon: <Bell className="size-5" />,
      active: path === "/account/notifications",
    },
    {
      label: "Chats",
      href: "/account/chats",
      icon: <LucideMessageSquare className="size-5" />,
      active: path === "/account/chats",
    },
  ];
  return (
    <div className="relative flex max-h-[90vh] w-full h-full overflow-hidden">
      <div className="flex flex-col gap-2 sm:border-r-2 dark:sm:border-r-slate-800 sm:border-r-slate-200">
        <Sidebar
          userSettingLinks={userSettingLinks}
          appSettingLinks={appSettingLinks}
        />
      </div>
      <div className="relative flex flex-col w-full overflow-y-auto gap-1 px-6 py-2 mt-5">
        {children}
      </div>
    </div>
  );
}

export default AccountLayout;
