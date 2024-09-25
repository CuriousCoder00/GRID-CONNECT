"use client";

import { useEffect, useState } from "react";
import { FeedBanner } from "./_components/FeedBanner";
import { UserActivities } from "./_components/UserActivities";
import { TrendingCommunities } from "./_components/TrendingComms";

export default function Feed() {
  return (
    <div className="flex h-full w-full p-5">
      <div className="relative flex flex-col w-full overflow-y-auto gap-1 px-6 py-2 mt-5">
        <FeedBanner />
        <UserActivities />
      </div>
      <div className="flex flex-col gap-2 sm:border-l-2 dark:sm:border-l-slate-800 sm:border-l-slate-200 ps-6 max-sm:hidden">
        <div className="flex flex-col justify-start items-center">
          <div className="w-52 h-screen">
            <TrendingCommunities/>
          </div>
        </div>
      </div>
    </div>
  );
}
