"use client";

import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { getUserActivities } from "@/actions/user-activites";
 
import { RecentActivityCard } from "./RecentActivityCard";
import { useCurrentUser } from "@/hooks/use-current-user";

type Props = {};
export const RecentActivities = ({}: Props) => {
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
    <div className="flex flex-col w-full p-2">
      <h1 className="text-lg mb-2">Recent activities</h1>
      <Separator orientation="horizontal" className="bg-slate-600" />
      <div className="flex flex-col my-4 gap-4">
        {isLoaded && activities.length === 0 ? (
          <h1 className="text-xs">No activities found</h1>
        ) : (
          <div className="flex flex-col gap-4">
            {activities.map((activity) => (
              <RecentActivityCard
                key={activity.id}
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
