"use client";
import { Navbar } from "@/components/Header/Navbar";
import { useEffect, useState } from "react";

const links = [
  {
    name: "Feed",
    href: "/feed",
  },

  {
    name: "Communities",
    href: "/communities",
  },
  {
    name: "Friends",
    href: "/friends",
  },
  {
    name: "Chats",
    href: "/chats",
  },
  {
    name: "Notifications",
    href: "/notifications",
  },
  {
    name: "Account",
    href: "/account",
  },
];

export default function page() {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-slate-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex gap-2">
          {[...new Array(4)].map((i) => (
            <div
              key={i}
              className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-slate-800 animate-pulse"
            ></div>
          ))}
        </div>
        <div className="flex gap-2 flex-1">
          {[...new Array(2)].map((i) => (
            <div
              key={i}
              className="h-full w-full rounded-lg  bg-gray-100 dark:bg-slate-800 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
