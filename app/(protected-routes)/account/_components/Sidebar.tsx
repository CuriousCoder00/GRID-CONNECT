import { useCurrentUser } from "@/hooks/use-current-user";
import { Bell, Group, LockKeyhole, SidebarOpen, User } from "lucide-react";
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
      label: "Profile Settings",
      href: "/account",
      icon: <User />,
      active: path === "/account",
    },
    {
      label: "Communities",
      href: "/account/communities",
      icon: <Group />,
      active: path === "/account/communities",
    },
    {
      label: "Notifications",
      href: "/account/notifications",
      icon: <Bell />,
      active: path === "/account/notifications",
    },
  ];
  return (
    <div
      className={`relative flex flex-col bg-white dark:bg-black max-sm:hidden w-52 pt-12`}
    >
      <h1 className="mb-5 font-bold">Settings</h1>
      {links.map((link) => (
        <Link
          className={`flex gap-2 p-3 hover:bg-sky-600 dark:hover:bg-sky-800 hover:text-white  transition-all duration-100 ${
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
    </div>
  );
};

const SidebarMobileLinks = () => {
  const user = useCurrentUser();
  const [opened, setOpened] = useState<boolean>(false);
  const path = usePathname();
  const links = [
    {
      label: "Profile Settings",
      href: "/account",
      icon: <User />,
      active: path === "/account",
    },
    {
      label: "Communities",
      href: "/account/communities",
      icon: <Group />,
      active: path === "/account/communities",
    },
    {
      label: "Notifications",
      href: "/account/notifications",
      icon: <Bell />,
      active: path === "/account/notifications",
    },
  ];
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
        className={`flex flex-col h-screen z-[2] bg-white dark:bg-black max-sm:absolute pt-12 w-52 transition-all duration-200 ${
          opened ? " translate-x-0" : "-translate-x-52"
        }`}
      >
        <h1 className="mb-5 font-bold">Settings</h1>
        {links.map((link) => (
          <Link
            className={`flex gap-2 p-3 hover:bg-sky-800 hover:text-white  transition-all duration-100 ${
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
  }, [open]);
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
