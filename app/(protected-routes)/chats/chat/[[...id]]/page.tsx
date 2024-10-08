import React from "react";
import { ChatSidebar } from "@/components/app-components/chats/sidebar";
import { Handshake } from "lucide-react";
import { Header } from "@/components/app-components/chats/chat-header";

const Chat = () => {
  return (
    <div className="flex flex-col w-full h-full max-h-[90vh] gap-1">
      <div className="flex flex-col w-full h-full max-h-[90vh] gap-1">
        <div className="flex flex-col">
        <Header type="chat" />
        </div>
        <div className="flex flex-col h-full w-full overflow-y-auto px-4">
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
      </div>
    </div>
  );
};

export default Chat;