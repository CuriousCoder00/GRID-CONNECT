"use client";
import React, { useState } from "react";
import { ChatSidebar } from "@/components/app-components/chats/sidebar";
import { Handshake } from "lucide-react";
import { Header } from "@/components/app-components/chats/chat-header";
import { Separator } from "@radix-ui/react-separator";
import { OnlineFriends } from "@/components/app-components/chats/friends/online-friends";
import { AllFriends } from "@/components/app-components/chats/friends/all-friends";
import { BlockedFriends } from "@/components/app-components/chats/friends/blocked-friends";
import { AddFriends } from "@/components/app-components/chats/friends/add-friends";

const Friends = () => {
  const [tab, setTab] = useState("online");

  return (
    <div className="flex flex-col w-full h-full max-h-[90vh] gap-1">
      <div className="flex flex-col">
        <Header type="friends" setTab={setTab} tab={tab} />
      </div>
      <div className="flex flex-col h-full w-full overflow-y-auto px-4">
        {tab === "online" ? (
          <OnlineFriends />
        ) : tab === "all" ? (
          <AllFriends />
        ) : tab === "blocked" ? (
          <BlockedFriends />
        ) : tab === "addFriends" ? (
          <AddFriends />
        ) : null}
      </div>
    </div>
  );
};

export default Friends;
