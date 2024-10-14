"use client";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getCommunityById } from "@/actions/community-actions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = { id: string };
type CommunityData = {
  id: string;
  category: string;
  name: string;
  description: string;
  imageUrl: string | null;
  inviteCode: string;
  createdAt: Date;
  updatedAt: Date;
} | null;

export const CommunityHeader = ({ id }: Props) => {
  const [communityData, setCommunityData] = useState<CommunityData>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCommunityById(id);
      setCommunityData(data);
    };
    console.log(fetchData);
    fetchData();
  }, [id]);

  return (
    <div className="flex w-full border-b-2 border-b-slate-600 p-2 px-4">
      {communityData ? (
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-start gap-2 relative">
            <DropdownMenu>
              <DropdownMenuTrigger>{communityData?.name}</DropdownMenuTrigger>
              <DropdownMenuContent className="absolute top-5 w-48">
                <DropdownMenuLabel>My Community</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Community Settings</DropdownMenuItem>
                <DropdownMenuItem>Members</DropdownMenuItem>
                <DropdownMenuItem>Invite Members</DropdownMenuItem>
                <DropdownMenuItem>Leave Community</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center justify-center gap-3"></div>
        </div>
      ) : (
        <div className="flex items-center justify-between w-full gap-8">
          <Skeleton className="w-40 h-8" />
          <Skeleton className="w-full h-8" />
        </div>
      )}
    </div>
  );
};
