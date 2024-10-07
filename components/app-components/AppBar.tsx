"use client";

import React from "react";

import Link from "next/link";

import { signOut, useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Community } from "./Community";
import { Notifications } from "./Notifications";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LucideLogOut, User } from "lucide-react";
import { SelectTheme } from "@/components/ThemeToggler";
import { useCurrentUser } from "@/hooks/use-current-user";

export const AppBar = () => {
  const session = useSession();
  const user = useCurrentUser();
  return (
    <header className="md:px-20 p-2 flex w-screen items-center justify-between relative">
      <nav className="flex justify-end items-center w-full">
        <div className="flex justify-center items-center gap-4">
          <Community />
          <Notifications />

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  className=" object-cover"
                  src={user?.image as string}
                />
                <AvatarFallback className="bg-sky-700">
                  <User />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 mt-4 z-10 bg-white text-black dark:bg-slate-950 dark:text-white pb-5">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  className="flex gap-3 items-center justify-start"
                  href={"/account"}
                >
                  <User className="h-5 w-5" />
                  <span className="text-sm">Profile Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SelectTheme />
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex gap-3 cursor-pointer"
                onClick={() => signOut()}
              >
                <LucideLogOut className="size-5" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};
