import { SidebarOpen } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type sidebarProps = {
  children: React.ReactNode;
};

type sidebarLinksProps = {
  links: { label: string; href: string; active: boolean }[];
};

const Sidebar = ({ children }: sidebarProps) => {
  return (
    <div className="flex flex-col justify-start items-start z-[4]">
      {children}
    </div>
  );
};

const SidebarLinks = ({ links }: sidebarLinksProps) => {
    
  return (
    <div
      className={`relative flex flex-col bg-white dark:bg-black max-sm:hidden w-52 pt-12`}
    >
      <h1 className="mb-5 font-bold">Settings</h1>
      {links.map((link) => (
        <Link
          className={`p-3 hover:bg-sky-800 hover:text-white  transition-all duration-100 ${
            link.active && "border-l-2 border-l-sky-600 dark:border-l-sky-800"
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

const SidebarMobileLinks = ({
  links,
}: {
  links: { label: string; href: string; active: boolean }[];
}) => {
  const [opened, setOpened] = useState<boolean>(false);
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
              link.active && "border-l-2 border-l-sky-600 dark:border-l-sky-800"
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

export { Sidebar, SidebarLinks, SidebarTrigger, SidebarMobileLinks };
