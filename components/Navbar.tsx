"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Icon } from "./static/Icon";

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
import { NavbarLinks } from "./NavbarLinks";
import { Url } from "next/dist/shared/lib/router/router";
import { MobileNavbar } from "./MobileNavbar";

interface NavbarProps {
  navLinks?: Array<{ name: String; href: Url }>;
  showInput?: Boolean;
  hideMobileNav?: Boolean;

}

export const Navbar = ({ navLinks, showInput, hideMobileNav }: NavbarProps) => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(newTheme);
  };
  return (
    <header className="min-w-full">
      <nav
        className={`fixed top-0 left-0 right-0 backdrop-blur-md z-50 flex container dark:text-white gap-4`}
      >
        <div className="flex items-center w-full py-4 gap-2">
          <MobileNavbar hideMobileNav={hideMobileNav} links={navLinks} showInput={showInput} />
          <div className="flex items-center space-x-4">
            <Link
              scroll={false}
              href="/"
              className="font-bold flex text-2xl gap-3 justify-center items-center"
            >
              <Icon /> GridConnects
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
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              {theme === "dark" ? <MoonStarIcon /> : <SunMoonIcon />}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2">
              <DropdownMenuLabel>Theme</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleTheme("light")}
                  className="w-full flex items-center justify-between"
                >
                  <SunMoonIcon /> Light
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleTheme("dark")}
                  className="w-full flex items-center justify-between "
                >
                  <MoonStarIcon /> Dark
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};
