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
    <Avatar className="cursor-pointer">
      <AvatarImage className=" object-cover" src={imageUrl} />
      <AvatarFallback className="bg-sky-700">
        <User />
      </AvatarFallback>
    </Avatar>
  );
};
