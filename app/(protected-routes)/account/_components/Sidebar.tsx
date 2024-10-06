import { Separator } from "@/components/ui/separator";
import { useCurrentUser } from "@/hooks/use-current-user";
 
import {
  Bell,
  Group,
  LucideMonitor,
  LucideShield,
  SidebarOpen,
  User,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface SidebarProps {
  userSettingLinks: any[];
  appSettingLinks: any[];
}

export const Sidebar = ({
  userSettingLinks,
  appSettingLinks,
}: SidebarProps) => {
  return (
    <div className="flex flex-col justify-start items-start px-2 z-[4]">
      <SidebarLinks
        userSettingLinks={userSettingLinks}
        appSettingLinks={appSettingLinks}
      />
      <SidebarMobileLinks
        userSettingLinks={userSettingLinks}
        appSettingLinks={appSettingLinks}
      />
    </div>
  );
};

const SidebarLinks = ({ userSettingLinks, appSettingLinks }: SidebarProps) => {
  return (
    <div
      className={`relative flex flex-col bg-white dark:bg-black max-sm:hidden w-52 pt-12`}
    >
      <h1 className="mb-2 font-bold text-xs">User Settings</h1>
      {userSettingLinks.map((link) => (
        <Link
          className={`flex gap-2 p-3 hover:bg-sky-600 dark:hover:bg-sky-800 hover:text-white text-sm transition-all duration-100 ${
            link.active &&
            "border-l-2 border-l-blue-600 dark:border-l-sky-200 dark:bg-sky-700 bg-sky-500 text-white"
          } `}
          href={link.href}
          key={link.label}
        >
          {link.icon}
          {link.label}
        </Link>
      ))}
      <Separator orientation="horizontal" className="bg-slate-600 my-3" />
      <h1 className="my-2 font-bold text-xs">App Settings</h1>
      {appSettingLinks.map((link) => (
        <Link
          className={`flex gap-2 p-3 hover:bg-sky-800 hover:text-white text-sm transition-all duration-100 ${
            link?.active &&
            "border-l-2 border-l-blue-600 dark:border-l-sky-200 bg-sky-700 text-white"
          } `}
          href={link?.href}
          key={link?.label}
        >
          {link?.icon}
          {link?.label}
        </Link>
      ))}
    </div>
  );
};

const SidebarMobileLinks = ({
  userSettingLinks,
  appSettingLinks,
}: SidebarProps) => {
  const user = useCurrentUser();
  const [opened, setOpened] = useState<boolean>(false);
  const path = usePathname();

  return (
    <div className="sm:hidden relative flex flex-col z-[3] ">
      <div className="mb-8 sm:hidden">
        <SidebarTrigger opened={opened} setOpened={setOpened} />
      </div>
      {opened && (
        <button
          className="fixed inset-0 bg-black bg-opacity-30"
          onClick={() => setOpened(!opened)}
        ></button>
      )}
      <div
        className={`flex flex-col h-screen z-[2] bg-white dark:bg-black max-sm:absolute pt-12 w-52 transition-all border-r duration-400 delay-75 ${
          opened ? " translate-x-0" : "-translate-x-56"
        }`}
      >
        <h1 className="mb-2 font-bold text-xs">User Settings</h1>
        {userSettingLinks.map((link) => (
          <Link
            className={`flex gap-2 p-3 hover:bg-sky-800 hover:text-white text-sm transition-all duration-100 ${
              link?.active &&
              "border-l-2 border-l-blue-600 dark:border-l-sky-200 bg-sky-700 text-white"
            } `}
            href={link?.href}
            key={link?.label}
          >
            {link?.icon}
            {link?.label}
          </Link>
        ))}
        <Separator orientation="horizontal" className="bg-slate-600 px-2 my-3" />

        <h1 className="mb-2 font-bold text-xs">App Settings</h1>
        {appSettingLinks.map((link) => (
          <Link
            className={`flex gap-2 p-3 hover:bg-sky-800 hover:text-white text-sm transition-all duration-100 ${
              link?.active &&
              "border-l-2 border-l-blue-600 dark:border-l-sky-200 bg-sky-700 text-white"
            } `}
            href={link?.href}
            key={link?.label}
          >
            {link?.icon}
            {link?.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const SidebarTrigger = ({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    setOpened(open);
  }, [open, setOpened]);
  return (
    <div
      className={`absolute  transition-all duration-200 ${
        opened && open ? "rotate-180 top-0 left-40" : "top-0 left-0"
      } z-50`}
      onClick={() => setOpen(!open)}
    >
      <SidebarOpen className="cursor-pointer" />
    </div>
  );
};
