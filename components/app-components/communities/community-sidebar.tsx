"use client";
import { useState, useEffect } from "react";
import { getCommunitiesByUserId } from "@/actions/community-actions";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Button } from "@/components/ui/button";
import { Community } from "../Community";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { NavigationLink } from "./navigation-link";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus } from "lucide-react";
import { Input } from "@/components/Landing/Custom/input";

export const CommunitSidebar = () => {
  const user = useCurrentUser();
  const [communities, setCommunities] = useState<
    | {
        id: string;
        category: string;
        name: string;
        description: string;
        imageUrl: string | null;
        inviteCode: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
      }[]
    | null
  >(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCommunitiesByUserId(user?.id);
      setCommunities(data);
    };
    fetchData();
  }, [user.id]);
  return (
    <div className="flex flex-col justify-between items-center h-full max-h-[90vh] overflow-hidden">
      {communities ? (
        <div className="flex flex-col justify-between items-center h-full max-h-[90vh] overflow-hidden">
          <ScrollArea className="flex flex-col items-center justify-start overflow-y-auto hidden-scrollbar px-2">
            {communities?.map((community) => (
              <NavigationLink
                key={community.id}
                community={{
                  id: community.id,
                  name: community.name,
                  imageUrl: community.imageUrl || undefined,
                }}
              />
            ))}
          </ScrollArea>
          <div>
            <Separator className="bg-slate-300 dark:bg-slate-700 mb-2" />
            <Button className="bg-gray-300 dark:bg-slate-700 hover:bg-green-600 dark:hover:bg-green-600 transition flex items-center justify-center h-12 w-12 rounded-full aspect-square">
              <Community />
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-between items-center h-full max-h-[90vh] overflow-hidden">
          <ScrollArea className="flex flex-col items-center justify-start overflow-y-auto hidden-scrollbar px-2">
            <Skeleton className="bg-gray-300 dark:bg-slate-700 flex items-center justify-center h-12 w-12 rounded-full my-4" />
            <Skeleton className="bg-gray-300 dark:bg-slate-700 flex items-center justify-center h-12 w-12 rounded-full my-4" />
            <Skeleton className="bg-gray-300 dark:bg-slate-700 flex items-center justify-center h-12 w-12 rounded-full my-4" />
            <Skeleton className="bg-gray-300 dark:bg-slate-700 flex items-center justify-center h-12 w-12 rounded-full my-4" />
            <Skeleton className="bg-gray-300 dark:bg-slate-700 flex items-center justify-center h-12 w-12 rounded-full my-4" />
            <Skeleton className="bg-gray-300 dark:bg-slate-700 flex items-center justify-center h-12 w-12 rounded-full my-4" />
            <Skeleton className="bg-gray-300 dark:bg-slate-700 flex items-center justify-center h-12 w-12 rounded-full my-4" />
            <Skeleton className="bg-gray-300 dark:bg-slate-700 flex items-center justify-center h-12 w-12 rounded-full my-4" />
            <Skeleton className="bg-gray-300 dark:bg-slate-700 flex items-center justify-center h-12 w-12 rounded-full my-4" />
            <Skeleton className="bg-gray-300 dark:bg-slate-700 flex items-center justify-center h-12 w-12 rounded-full my-4" />
            <Skeleton className="bg-gray-300 dark:bg-slate-700 flex items-center justify-center h-12 w-12 rounded-full my-4" />
            <Skeleton className="bg-gray-300 dark:bg-slate-700 flex items-center justify-center h-12 w-12 rounded-full my-4" />
            <Skeleton className="bg-gray-300 dark:bg-slate-700 flex items-center justify-center h-12 w-12 rounded-full my-4" />
            <Skeleton className="bg-gray-300 dark:bg-slate-700 flex items-center justify-center h-12 w-12 rounded-full my-4" />
          </ScrollArea>
          <div>
            <Skeleton className="bg-slate-300 dark:bg-slate-700 mb-2 h-[2px]" />
            <Skeleton className="bg-gray-300 dark:bg-slate-700 flex items-center justify-center h-12 w-12 rounded-full my-4" />
          </div>
        </div>
      )}
    </div>
  );
};

export const TopicsSidebar = () => {
  return (
    <div className="flex flex-col justify-start items-start h-full max-h-[90vh] overflow-hidden border-t border-t-slate-600 w-52">
      <div className="flex flex-col items-start px-2 mt-3 w-44">
        <div className="flex flex-col gap-2 items-center justify-start ">
          <Input
            type="search"
            placeholder="Search for topic..."
            className="h-8 text-xs"
          />
          <Button
            variant={"ghost"}
            className="flex items-center justify-start text-sm w-full h-8"
          >
            <Plus size={16} /> Open a new topic
          </Button>
        </div>
        <Separator className="bg-slate-300 dark:bg-slate-700 my-3" />
        <div className="flex flex-col items-center justify-start overflow-y-auto hidden-scrollbar">

        </div>
      </div>
    </div>
  );
};
