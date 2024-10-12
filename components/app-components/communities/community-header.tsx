import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getCommunityById } from "@/lib/data/community-data";

type Props = { id: string };
export const CommunityHeader = async ({ id }: Props) => {
  const community = await getCommunityById(id);
  return (
    <div className="flex w-full border-b-2 border-b-slate-600 p-2 px-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-start gap-2 relative">
          <DropdownMenu>
            <DropdownMenuTrigger>{community?.name}</DropdownMenuTrigger>
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
    </div>
  );
};
