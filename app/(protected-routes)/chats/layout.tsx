import { ChatSidebar } from "@/components/app-components/chats/sidebar";
import React from "react";
import { Handshake } from "lucide-react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-full overflow-hidden">
      <div className="flex w-full h-full max-h-[90vh]">
        <div className="flex max-sm:hidden">
          <ChatSidebar links={Links} users={users} />
        </div>
        <div className="flex flex-col h-full w-full overflow-hidden gap-3 sm:border-l-2 dark:border-l-slate-700">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;

const Links = [
  {
    label: "Friends",
    href: "/chats/friends",
    icon: <Handshake className="size-4" />,
  },
];

const users = [
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];
