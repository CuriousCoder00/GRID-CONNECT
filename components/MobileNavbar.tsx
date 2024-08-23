"use client";

import React from "react";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavbarLinks } from "./NavbarLinks";
import { Url } from "next/dist/shared/lib/router/router";
import { Icon } from "./static/Icon";

interface NavbarProps {
  links?: Array<{ name: String; href: Url }>;
  showInput?: Boolean;
  hideMobileNav?: Boolean;
}

export const MobileNavbar = ({
  links,
  showInput,
  hideMobileNav,
}: NavbarProps) => {
  return (
    <>
      {!hideMobileNav && (
        <div className="md:hidden dark:bg-slate-950 dark:text-white cursor-pointer">
          <Sheet>
            <SheetTrigger asChild>
              <Menu size={40} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center space-x-4">
                    <div className="font-bold flex text-2xl gap-3 justify-center items-center">
                      <Icon /> GridConnects
                    </div>
                  </div>
                </SheetTitle>
                <SheetDescription className="w-full">
                  <div className="flex flex-col items-start justify-center mt-5 gap-3 min-w-full">
                    <NavbarLinks links={links} showInput={showInput} />
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      )}
    </>
  );
};
