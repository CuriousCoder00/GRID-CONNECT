"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { ActivityCard } from "../../../components/app-components/activities/ActivityCard";
import { getUserActivities } from "@/actions/user-activites";
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LucideListFilter } from "lucide-react";
import { useCurrentUser } from "@/hooks/use-current-user";

type Props = {};
const Activities = () => {
  const user = useCurrentUser();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activities, setActivities] = useState([] as any[]);

  useEffect(() => {
    getUserActivities(user?.email)
      .then((data) => {
        setIsLoaded(true);
        setActivities(data.activities || []);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  });

  return (
    <div className="flex flex-col w-full p-2 my-5 px-8">
      <div className="flex justify-between items-center my-2 w-full">
        <h1 className="text-xl w-52">Your activities</h1>
        <div className="flex items-center">
          <LucideListFilter className="text-neutral-700 dark:text-neutral-200 size-4 flex-shrink-0" />
          <Select>
            <SelectTrigger className="focus:outline-none border-none">
              <SelectValue placeholder="All" defaultValue={"all"} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Separator orientation="horizontal" className="bg-slate-600" />
      <div className="flex flex-col my-4 gap-4">
        {isLoaded && activities.length === 0 ? (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-lg">No activities found</h1>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {activities.map((activity) => (
              <ActivityCard key={activity.id}
                id={activity.id}
                title={activity.title}
                description={activity.description}
                date={activity.date}
              />
            ))}
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-lg">{error}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Activities;

const options = [
  { value: "all", label: "All" },
  { value: "community", label: "Community activities" },
  { value: "user", label: "User activities" },
];
