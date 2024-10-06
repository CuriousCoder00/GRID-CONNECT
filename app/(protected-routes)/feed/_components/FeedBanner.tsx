"use client";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useState } from "react";
 

type Props = {};
export const FeedBanner = ({}: Props) => {
  const user = useCurrentUser();

  return (
    <div className="flex justify-between rounded-lg p-4 shadow-md dark:shadow-slate-700">
      <div className="flex flex-col">
        <h1 className="md:text-2xl sm:text-xl text-xl">
          Hey, <span className="font-bold">{user?.name}</span>!
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Here&apos;s what&apos;s happening in your feed
        </p>
      </div>
    </div>
  );
};
