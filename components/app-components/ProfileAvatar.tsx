import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { SelectTheme } from "../ThemeToggler";

import { LucideLogOut, User } from "lucide-react";

import logout from "@/actions/logout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";

export const ProfileAvatar = ({ imageUrl }: { imageUrl?: string }) => {
  const router = useRouter();
  const handleLogout = async () => {
    await logout();
    router.push("/");
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src={imageUrl} />
          <AvatarFallback className="bg-sky-700">
            <User />
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="z-10 mt-3 w-44 bg-white dark:bg-slate-950">
        <Link
          className="p-2 dark:hover:bg-slate-900 hover:bg-sky-100 w-full flex items-center justify-start gap-2"
          href={"/account"}
        >
          <User className="h-5 w-5" /> Profile Settings
        </Link>
        <div className="p-2 dark:hover:bg-slate-900 hover:bg-sky-100 w-full flex items-center justify-start gap-2">
          <SelectTheme />
        </div>
        <Button
          className="p-2 dark:hover:bg-slate-900 hover:bg-sky-100 w-full flex items-center justify-start gap-2"
          onClick={() => handleLogout()}
        >
          <LucideLogOut className="h-5 w-5" />
          Logout
        </Button>
      </PopoverContent>
    </Popover>
  );
};
