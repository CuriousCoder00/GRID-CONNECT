import { SidebarOpen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Sidebar = () => {
  return (
    <div className="flex flex-col justify-start items-start z-[4]">
      <SidebarLinks />
      <SidebarMobileLinks />
    </div>
  );
};

const SidebarLinks = () => {
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
    <div
      className={`relative flex flex-col bg-white dark:bg-black max-sm:hidden w-52 pt-12`}
    >
      <h1 className="mb-5 font-bold">Settings</h1>
      {links.map((link) => (
        <Link
          className={`p-3 hover:bg-sky-600 dark:hover:bg-sky-800 hover:text-white  transition-all duration-100 ${
            link.active && "border-l-2 border-l-blue-600 dark:border-l-sky-200"
          } `}
          href={link.href}
          key={link.label}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

const SidebarMobileLinks = () => {
  const [opened, setOpened] = useState<boolean>(false);
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
    <div className="sm:hidden relative flex flex-col z-[3] ">
      <div className="mb-8 sm:hidden">
        <SidebarTrigger setOpened={setOpened} />
      </div>

      <div
        className={`flex flex-col z-[2] bg-white dark:bg-black max-sm:absolute pt-12 w-44 transition-all duration-200 ${
          opened ? " translate-x-0" : "-translate-x-52"
        }`}
      >
        <h1 className="mb-5 font-bold">Settings</h1>
        {links.map((link) => (
          <Link
            className={`p-3 hover:bg-sky-800 hover:text-white  transition-all duration-100 ${
              link.active &&
              "border-l-2 border-l-blue-600 dark:border-l-sky-200"
            } `}
            href={link.href}
            key={link.label}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const SidebarTrigger = ({
  setOpened,
}: {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    setOpened(open);
  }, [open]);
  return (
    <div
      className={`absolute  transition-all duration-200 ${
        open ? "rotate-180 top-0 left-40" : "top-0 left-0"
      } z-50`}
      onClick={() => setOpen(!open)}
    >
      <SidebarOpen className="cursor-pointer" />
    </div>
  );
};