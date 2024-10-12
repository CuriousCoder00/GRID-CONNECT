import { TooltipContainer } from "@/components/TooltipContainer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

type Props = {
  community: {
    id: string;
    name: string;
    imageUrl?: string;
  };
};
export const NavigationLink = ({ community }: Props) => {
  return (
    <Link href={`/communities/${community.id}`} className="focus:outline-none">
      <TooltipContainer pos="right" sideOffset={5} content={community.name}>
        <Avatar className="cursor-pointer bg-gray-300 dark:bg-slate-700 flex items-center justify-center h-12 w-12 rounded-full my-4">
          <AvatarImage src={community.imageUrl || undefined} />
          <AvatarFallback>{community.name[0]}</AvatarFallback>
        </Avatar>
      </TooltipContainer>
    </Link>
  );
};
