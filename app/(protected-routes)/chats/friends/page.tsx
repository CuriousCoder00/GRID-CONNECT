"use client";
import React, { useState } from "react";
import { ChatSidebar } from "@/components/app-components/chats/sidebar";
import { Handshake } from "lucide-react";
import { Header } from "@/components/app-components/chats/chat-header";
import { Separator } from "@radix-ui/react-separator";
import { OnlineFriends } from "@/components/app-components/chats/friends/online-friends";

const Friends = () => {
  const [online, setOnline] = useState(true);
  const [all, setAll] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [addFriend, setAddFriend] = useState(false);

  const handleOnline = () => {
    setOnline(true);
    setAll(false);
    setBlocked(false);
    setAddFriend(false);
  };

  const handleAll = () => {
    setOnline(false);
    setAll(true);
    setBlocked(false);
    setAddFriend(false);
  };

  const handleBlocked = () => {
    setOnline(false);
    setAll(false);
    setBlocked(true);
    setAddFriend(false);
  };

  const handleAddFriend = () => {
    setAddFriend(true);
    setOnline(false);
    setAll(false);
    setBlocked(false);
  };

  return (
    <div className="flex flex-col w-full h-full max-h-[90vh] gap-1">
      <div className="flex flex-col">
        <Header type="friends" />
      </div>
      <div className="flex flex-col h-full w-full overflow-y-auto px-4">
        {online && <OnlineFriends />}
      </div>
    </div>
  );
};

export default Friends;
