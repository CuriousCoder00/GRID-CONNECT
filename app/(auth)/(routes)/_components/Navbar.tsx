"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Icon } from "@/app/(routes)/_components/Icon";

import { Menu, SunMoonIcon, MoonStarIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const lightTheme = () => {
    setTheme("light");
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  };
  const darkTheme = () => {
    setTheme("dark");
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  };
  return (
    <header className="min-w-full">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 hidden md:flex items-center container dark:text-white`}
      >
        <div className="flex items-center justify-between w-full py-4">
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
        <div className="flex items-center gap-3  space-x-4">
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
                  onClick={() => lightTheme()}
                  className="w-full flex items-center justify-between"
                >
                  <SunMoonIcon /> Light
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => darkTheme()}
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
