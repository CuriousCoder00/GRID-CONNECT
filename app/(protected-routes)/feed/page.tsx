"use client";
import { TrendingCommunities } from "../../../components/app-components/feed/TrendingComms";
import { FeedBanner } from "../../../components/app-components/feed/FeedBanner";
import { RecentActivities } from "../../../components/app-components/feed/RecentActivities";
import { useCurrentUser } from "@/hooks/use-current-user";
 

export default function Feed() {
  const user = useCurrentUser();
  return (
    <div className="flex h-full w-full p-5">
      <div className="relative flex flex-col w-full overflow-y-auto gap-1 px-6 py-2 mt-5">
        <FeedBanner />
      </div>
      <div className="flex flex-col gap-2 sm:border-l-2 dark:sm:border-l-slate-800 sm:border-l-slate-200 ps-6 max-md:hidden">
        <div className="flex flex-col justify-start items-center">
          <div className=" w-64 h-screen">
            <RecentActivities />
            <TrendingCommunities />
          </div>
        </div>
      </div>
    </div>
  );
}
