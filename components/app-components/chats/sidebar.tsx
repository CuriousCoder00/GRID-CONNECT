import { Input } from "@/components/Landing/Custom/input";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
type Props = {
  links: {
    label: string;
    href: string;
    icon: React.ReactNode;
  }[];
  users: {
    name: string;
    avatar: string;
  }[];
};
export const ChatSidebar = ({ links, users }: Props) => {
  return (
    <div className="flex flex-col max-sm:w-full w-64">
      <div className="p-1 w-full">
        <Input
          className="text-xs p-2 h-8"
          type="search"
          placeholder="Find or start a conversation"
        />
      </div>
      <Separator className="bg-slate-600" />
      <div className="flex flex-col h-full w-full overflow-y-auto hidden-scrollbar gap-3 px-2 text-slate-800 dark:text-slate-200 text-sm">
        <div className="flex flex-col my-1">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="flex items-center gap-4 py-2 pl-3 text-sm dark:hover:bg-slate-800 hover:bg-slate-300 transition-all duration-150"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
        <Separator className="bg-slate-600" />
        <div className="flex flex-col gap-2">
          <div className="text-xs">Friends</div>
          {users.map((user, idx) => (
            <div
              className="flex items-center gap-2 dark:hover:bg-slate-800 hover:bg-slate-300  p-2 rounded-md"
              key={idx}
            >
              <img
                src={user.avatar}
                alt="avatar"
                className="w-8 h-8 rounded-full"
              />
              <div>{user.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
