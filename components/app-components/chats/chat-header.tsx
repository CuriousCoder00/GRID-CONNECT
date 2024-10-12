"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Handshake, PhoneCall, Video } from "lucide-react";

type Props = {
  type?: "chat" | "friends";
  setTab?: (tab: string) => void;
  tab?: string;
};

export const Header = ({ type, setTab, tab }: Props) => {
  return (
    <div className="flex w-full border-b-2 border-b-slate-600 p-2 px-4">
      {type === "chat" ? <ChatHeader /> : <FriendsHeader setTab={setTab} tab={tab} />}
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

const FriendsHeader = ({ setTab, tab }: Props) => {
  return (
    <div className="flex items-center justify-start w-full gap-2">
      <div className="flex items-center justify-start gap-2">
        <Handshake className="size-5" />
        <span className="text-md">Friends</span>
      </div>
      <Separator orientation="vertical" className="bg-slate-600" />
      <div className="flex items-center gap-1">
        <button className={`text-sm  hover:bg-slate-200 ${tab === "online" && "dark:bg-slate-600 bg-slate-300"}  dark:hover:bg-slate-900 transition-all duration-150 delay-150 p-1 px-3 rounded-md`} onClick={() => setTab && setTab("online")}>
          Online
        </button>
        <button className={`text-sm dark:hover:bg-slate-900 hover:bg-slate-200 ${tab === "all" && "dark:bg-slate-600 bg-slate-300"}  transition-all duration-150 delay-150 p-1 px-3 rounded-md`} onClick={() => setTab && setTab("all")}>
          All
        </button>
        <button className={`text-sm dark:hover:bg-slate-900 hover:bg-slate-200 ${tab === "blocked" && "dark:bg-slate-600 bg-slate-300"} transition-all duration-150 delay-150 p-1 px-3 rounded-md`} onClick={() => setTab && setTab("blocked")}>
          Blocked
        </button>
        <button className={`text-sm ${tab === "addFriends" ? "bg-none text-green-500" : "bg-green-600 text-white"} hover:bg-green-700  dark:hover:bg-green-900 hover:text-white transition-all duration-150 delay-150 p-1 px-3 rounded-md`} onClick={() => setTab && setTab("addFriends")}>
          Add Friend
        </button>
      </div>
    </div>
  );
};
