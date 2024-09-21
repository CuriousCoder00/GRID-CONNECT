import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { SelectTheme } from "../ThemeToggler";

import { LucideLogOut, Settings } from "lucide-react";

import logout from "@/actions/logout";

export const Avatar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const handleLogout = async () => {
    await logout();
    router.push("/");
  };
  return (
    <div className="relative">
      <div
        className="flex items-center justify-center h-8 w-8 bg-blue-500 rounded-full z-20 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-white text-lg font-bold">A</span>
      </div>
      {open && (
        <>
          <div className="absolute top-0 right-0 flex flex-col items-start justify-center mt-12 bg-white dark:bg-black dark:border dark:border-slate-900 rounded-md shadow-md dark:shadow-slate-900 shadow-slate-300 w-40 z-[2] py-2">
            <Link
              className="p-2 dark:hover:bg-slate-900 hover:bg-sky-100 w-full flex items-center justify-start gap-2"
              href={"/settings"}
            >
              <Settings className="h-5 w-5" /> Settings
            </Link>
            <div className="p-2 dark:hover:bg-slate-900 hover:bg-sky-100 w-full flex items-center justify-start gap-2">
              <SelectTheme />
            </div>
            <button
              className="p-2 dark:hover:bg-slate-900 hover:bg-sky-100 w-full flex items-center justify-start gap-2"
              onClick={() => handleLogout()}
            >
              <LucideLogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
          <button
            className="fixed right-0 top-12 bottom-0 left-0 bg-black bg-opacity-50 z-[1]"
            onClick={() => setOpen(!open)}
          ></button>
        </>
      )}
    </div>
  );
};
