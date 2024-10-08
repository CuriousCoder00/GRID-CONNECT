"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Handshake, PhoneCall, Video } from "lucide-react";

type Props = {
  type?: "chat" | "friends";
  tabState?: {
    online: boolean;
    all: boolean;
    blocked: boolean;
    addFriend: boolean;
  };
};

export const Header = ({ type, tabState }: Props) => {
  return (
    <div className="flex w-full border-b-2 border-b-slate-600 p-2">
      {type === "chat" ? <ChatHeader /> : <FriendsHeader tabState={tabState} />}
    </div>
  );
};

const ChatHeader = ({}: Props) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-start gap-2">
        <Avatar className="h-7 w-7">
          <AvatarImage src="https://avatars.dicebear.com/api/human/1.svg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <span className="text-sm">user_name</span>
      </div>
      <div className="flex items-center justify-center gap-3">
        <PhoneCall className="size-5" />
        <Video className="size-6" />
      </div>
    </div>
  );
};

const FriendsHeader = ({ tabState }: Props) => {
  return (
    <div className="flex items-center justify-start w-full gap-2">
      <div className="flex items-center justify-start gap-2">
        <Handshake className="size-5" />
        <span className="text-md">Friends</span>
      </div>
      <Separator orientation="vertical" className="bg-slate-600" />
      <div className="flex items-center gap-1">
        <button className="text-sm dark:bg-slate-600 hover:bg-slate-200 bg-slate-300  dark:hover:bg-slate-900 transition-all duration-150 delay-150 p-1 px-3 rounded-md">
          Online
        </button>
        <button className="text-sm dark:hover:bg-slate-900 hover:bg-slate-200   transition-all duration-150 delay-150 p-1 px-3 rounded-md">
          All
        </button>
        <button className="text-sm dark:hover:bg-slate-900 hover:bg-slate-200 transition-all duration-150 delay-150 p-1 px-3 rounded-md">
          Blocked
        </button>
        <button className="text-sm bg-green-600 hover:bg-slate-700 text-white dark:hover:bg-green-900 transition-all duration-150 delay-150 p-1 px-3 rounded-md">
          Add Friend
        </button>
      </div>
    </div>
  );
};
