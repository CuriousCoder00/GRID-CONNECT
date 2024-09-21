import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { SelectTheme } from "../ThemeToggler";

import { LucideLogOut, Settings } from "lucide-react";

import logout from "@/actions/logout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const ProfileAvatar = ({ imageUrl }: { imageUrl?: string }) => {
  const [open, setOpen] = useState<boolean>(false);
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
          <AvatarFallback className="bg-sky-700">KK</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="z-10 mt-3 w-44">
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
      </PopoverContent>
    </Popover>
  );
};
