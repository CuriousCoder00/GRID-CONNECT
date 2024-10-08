import React from "react";
import { ChatSidebar } from "@/components/app-components/chats/sidebar";
import { Handshake } from "lucide-react";

const Chat = () => {
  return (
    <div className="flex flex-col w-full h-full max-h-[90vh] gap-1">
      <div className="flex flex-col gap-3 max-sm:hidden">
        {[...new Array(600)].map((i) => (
          <div
            key={i}
            className="flex h-4 w-full rounded  bg-gray-100 dark:bg-slate-700"
          >
            .
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;

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
