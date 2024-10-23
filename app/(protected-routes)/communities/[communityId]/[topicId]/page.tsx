import { Input } from "@/components/Landing/Custom/input";
import { PlusCircle } from "lucide-react";
import React from "react";

const TopicPageCommunity = () => {
  return (
    <div className="relative flex flex-col items-start justify-start w-full h-full">
      <div className="absolute bottom-12 mt-2 flex flex-col items-start justify-start p-2 overflow-y-auto hidden-scrollbar max-h-[92%]">

      </div>
      <div className="absolute bottom-0 w-full flex">
        <div className="flex items-center justify-center w-full dark:bg-zinc-800 p-2 rounded-md gap-3">
          <PlusCircle className="text-slate-600 left-0" />
          <input
            className="w-full focus:outline-none hover:border-none bg-transparent text-sm"
            placeholder="Message"
          />
        </div>
      </div>
    </div>
  );
};

export default TopicPageCommunity;
