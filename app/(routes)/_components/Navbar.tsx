"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Icon } from "./Icon";

import { Menu, SunMoonIcon, MoonStarIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../../../components/ui/dropdown-menu";
import { Button } from "../../../components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../../../components/ui/sheet";


export const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);
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
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  });
  return (
    <header className="min-w-full">
      <nav className={`fixed top-0 left-0 right-0 backdrop-blur-md z-50 hidden md:flex items-center container dark:text-white`}>
        <div className="flex items-center justify-between w-full py-4">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="font-bold flex text-2xl gap-3 justify-center items-center"
            >
              <Icon /> GridConnects
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3  space-x-4">
          <Link
            href="/explore"
            className="dark:hover:text-cyan-400
            dark:text-slate-300 transition-all delay-200 duration-200 ease-in-out text-slate-700 hover:text-slate-900"
          >
            Explore
          </Link>

          <Link
            href="/login"
            className="dark:hover:text-cyan-400 dark:text-slate-300 transition-all delay-200 duration-200 ease-in-out text-slate-700 hover:text-slate-900"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="dark:hover:text-cyan-400 transition-all delay-200 duration-200 ease-in-out border rounded-lg p-1 px-2 dark:hover:bg-slate-800 dark:text-slate-300 dark:border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100"
          >
            Register
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              {theme === "dark" ? <MoonStarIcon /> : <SunMoonIcon />}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2">
              <DropdownMenuLabel>Theme</DropdownMenuLabel>
              <DropdownMenuSeparator/>
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
      <nav className="md:hidden flex justify-between items-center p-2 dark:text-white px-3 fixed top-0 right-0 left-0 z-50 backdrop-blur-md">
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="text-2xl" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>GridConnects</SheetTitle>
              <SheetDescription>
                <div className="flex flex-col items-center mt-5 gap-3">
                  <Link
                    href="/communities"
                    className="hover:text-slate-800 text-slate-600 dark:hover:text-cyan-400 dark:text-slate-400 hover:bg-slate-100
                    dark:hover:bg-slate-800 transition-all delay-200 duration-200 ease-in-out w-full text-start p-2 pl-8"
                  >
                    Explore {"> >"}
                  </Link>
                  <Link
                    href="/login"
                    className="hover:text-slate-800 text-slate-600 dark:hover:text-cyan-400 dark:text-slate-400 hover:bg-slate-100 
                    dark:hover:bg-slate-800  transition-all delay-200 duration-200 ease-in-out w-full p-2 text-start pl-8"
                  >
                    Login
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="font-bold flex text-2xl gap-3 justify-center items-center"
          >
            <Icon /> GridConnects
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <Link
            href="/register"
            className="dark:hover:text-cyan-400 transition-all delay-200 duration-200 ease-in-out border rounded-lg p-1 px-2 dark:hover:bg-slate-800 hover:bg-slate-200"
          >
            Register
          </Link>
          <div className="hover:text-cyan-400 transition-all delay-200 duration-200 ease-in-out">
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                {theme === "dark" ? <MoonStarIcon /> : <SunMoonIcon />}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2">
                <DropdownMenuLabel>Theme</DropdownMenuLabel>
                <DropdownMenuSeparator/>
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
        </div>
      </nav>
    </header>
  );
};
