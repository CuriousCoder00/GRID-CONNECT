"use client";

import { FeedBanner } from "./_components/FeedBanner";
import { UserActivities } from "./_components/UserActivities";

export default function Feed() {
  return (
    <div className="flex flex-col h-full w-full p-5">
      <FeedBanner />
      <UserActivities />
    </div>
  );
}
