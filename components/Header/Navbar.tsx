"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Icon } from "@/components/static/Icon";

import { SunMoonIcon, MoonStarIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { NavbarLinks } from "@/components/Header/NavbarLinks";
import { Url } from "next/dist/shared/lib/router/router";
import { MobileNavbar } from "@/components/Header/MobileNavbar";
import { APP_NAME } from "@/constants/TextConsts";
import { usePathname } from "next/navigation";

interface NavbarProps {
  navLinks?: Array<{ name: String; href: Url }>;
  showInput?: Boolean;
  hideMobileNav?: Boolean;
  hideAll?: boolean;
}

export const Navbar = ({
  navLinks,
  showInput,
  hideMobileNav,
  hideAll,
}: NavbarProps) => {
  const [theme, setTheme] = useState("dark");
  const [hideThemeToggle, setHideThemeToggle] = useState(false);
  const pathname = usePathname();
  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(newTheme);
  };
  return (
    <header className={`min-w-full ${hideAll && "hidden"}`}>
      <nav
        className={`fixed top-0 left-0 right-0 md:rounded-full backdrop-blur md:bg-slate-100 dark:bg-slate-950 bg-opacity-50 md:border border-slate-500 md:w-[80%] md:mt-5 z-50 flex container dark:text-white gap-4`}
      >
        <div className="flex items-center w-full py-2 gap-2">
          <MobileNavbar
            hideMobileNav={hideMobileNav}
            links={navLinks}
            showInput={showInput}
          />
          <div className="flex items-center space-x-4">
            <Link
              scroll={false}
              href="/"
              className="font-bold flex text-2xl gap-3 justify-center items-center"
            >
              <Icon /> {APP_NAME}s
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <NavbarLinks links={navLinks} showInput={showInput} />
        </div>
        <div
          className="flex justify-center items-center
        "
        >
          {theme === "dark" ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleTheme("light")}
              className="w-full flex items-center justify-between hover:bg-transparent"
            >
              <SunMoonIcon />
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleTheme("dark")}
              className="w-full flex items-center justify-between hover:bg-transparent"
            >
              <MoonStarIcon />
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
};
