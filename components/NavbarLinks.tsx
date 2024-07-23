"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { Input } from "./ui/input";

interface NavbarLinksProps {
  links?: Array<{ name: String; href: Url }>;
  showInput?: Boolean;
}

export const NavbarLinks = ({ links, showInput }: NavbarLinksProps) => {
  return (
    <div className="flex md:flex-row md:justify-end md:items-center md:gap-4 flex-col justify-center items-start gap-8 w-full">
      {showInput && (
        <Input
          className="md:w-64 w-full"
          type="search"
          placeholder="Explore communities..."
        />
      )}
      {links?.map((item, index) => {
        return (
          <Link
            key={index}
            scroll={false}
            href={item.href}
            className="dark:hover:text-cyan-400
                    dark:text-slate-300 transition-all delay-200 duration-200 ease-in-out text-slate-700 hover:text-slate-900"
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};
