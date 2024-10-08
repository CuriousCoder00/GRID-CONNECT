import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

type Props = {};
export const TrendingCommunities = ({}: Props) => {
  return (
    <div className="flex flex-col w-full p-2">
      <h1 className="text-lg mb-2">Trending Communities</h1>
      <Separator orientation="horizontal" className="bg-slate-600" />
      <div className="flex flex-col my-4 gap-4">
        <div className="flex flex-col gap-4">
          {trending.map((activity) => (
            <div className="flex flex-col" key={activity.id}>
              <h1>{activity.name}</h1>
              <p className="text-xs">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const trending = [
  {
    id: 1,
    name: "Community 1",
    description: "Community 1 Description",
  },
  {
    id: 2,
    name: "Community 2",
    description: "Community 2 Description",
  },
  {
    id: 3,
    name: "Community 3",
    description: "Community 3 Description",
  },
];
