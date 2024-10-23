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
import { ArrowDown, ChevronDown, ChevronUp, LogOut, Plus, Settings, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/Landing/Custom/input";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCommunityById(id);
      setCommunityData(data);
    };
    console.log(fetchData);
    fetchData();
  }, [id]);

  return (
    <div className="flex items-center justify-center w-full p-1 px-8">
      {communityData ? (
        <div className="flex items-center justify-between w-full">
          <DropDownComponent onClick={() => setIsOpen(!open)} trigger={
            <Button variant={'ghost'} className="flex items-center justify-start gap-4 hover:bg-transparent" onClick={() => setIsOpen(!open)}>
              <span className="block text-nowrap">
                {communityData?.name}
              </span>
              {
                isOpen ? <ChevronUp /> : <ChevronDown />
              }
            </Button>
          } />
        </div>
      ) : (
        <div className="flex items-center justify-between w-full gap-8">
          <Skeleton className="w-40 h-8" />
          <div className="flex items-center justify-center gap-3">
            {/* <Skeleton className="w-96 h-8" /> */}
            <Skeleton className="w-40 h-8" />
            {/* <Skeleton className="w-8 h-8" />
            <Skeleton className="w-8 h-8" />
            <Skeleton className="w-8 h-8" />
            <Skeleton className="w-8 h-8" />
            <Skeleton className="w-8 h-8" />
            <Skeleton className="w-8 h-8" /> */}
          </div>
        </div>
      )}
    </div>
  );
};

const DropDownComponent = ({ trigger, onClick }: { trigger: React.ReactNode; onClick: () => void }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild onClick={onClick}>
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Community Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-blue-600 py-0">
          <UserPlus size={16} />
          <DropdownMenuLabel>Invite Friends</DropdownMenuLabel>
        </DropdownMenuItem>
        <DropdownMenuItem className="py-0">
          <Settings size={16} />
          <DropdownMenuLabel>Settings</DropdownMenuLabel>
        </DropdownMenuItem>
        <DropdownMenuItem className="py-0">
          <Plus size={16} />
          <DropdownMenuLabel>New Thread</DropdownMenuLabel>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="py-0 text-red-600">
          <LogOut size={16} />
          <DropdownMenuLabel>Leave</DropdownMenuLabel>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}