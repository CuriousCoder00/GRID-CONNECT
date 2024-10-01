import React from "react";

import { User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ProfileAvatar = ({ imageUrl }: { imageUrl?: string }) => {
  return (
    <Avatar className="cursor-pointer">
      <AvatarImage className=" object-cover" src={imageUrl} />
      <AvatarFallback className="bg-sky-700">
        <User />
      </AvatarFallback>
    </Avatar>
  );
};
