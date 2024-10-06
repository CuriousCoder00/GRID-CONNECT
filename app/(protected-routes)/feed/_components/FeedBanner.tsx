"use client";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useState } from "react";
 

type Props = {};
export const FeedBanner = ({}: Props) => {
  const user = useCurrentUser();
  const [Greeting, setGreeting] = useState("Good Morning");
  const [time, setTime] = useState({
    hours: 0,
    mins: 0,
    secs: 0,
  });

  const updateTime = () => {
    const date = new Date();
    setTime({
      hours: date.getHours(),
      mins: date.getMinutes(),
      secs: date.getSeconds(),
    });

    if (date.getHours() > 12 && date.getHours() < 18) {
      setGreeting("Good Afternoon");
    } else if (date.getHours() >= 18 && date.getHours() < 24) {
      setGreeting("Good Evening");
    } else if (date.getHours() >= 0 && date.getHours() < 4) {
      setGreeting("Good Night");
    }
  };

  setInterval(updateTime, 1000);

  let hours = time.hours < 10 ? `0${time.hours}` : time.hours;
  let mins = time.mins < 10 ? `0${time.mins}` : time.mins;
  let secs = time.secs < 10 ? `0${time.secs}` : time.secs;
  return (
    <div className="flex justify-between rounded-lg p-4 shadow-md dark:shadow-slate-700">
      <div className="flex flex-col">
        <h1 className="md:text-2xl sm:text-xl text-xl">
          {Greeting}, <span className="font-bold">{user?.name}</span>!
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Here&apos;s what&apos;s happening in your feed
        </p>
      </div>
      <h1 className="lg:text-2xl md:text-xl sm:text-base max-md:hidden">
        {hours}:{mins}:{secs}
      </h1>
    </div>
  );
};
