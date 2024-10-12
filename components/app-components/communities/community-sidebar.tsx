import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { TooltipContainer } from "@/components/TooltipContainer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { Community } from "../Community";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { redirect } from "next/navigation";
type Props = {};
export const CommunitSidebar = async ({}: Props) => {
  const session = await auth();
  const communities = await db.community.findMany({
    where: {
      members: {
        some: {
          userId: session?.user.id,
        },
      },
    },
  });
  return (
    <div className="flex flex-col justify-between items-center h-full max-h-[90vh] overflow-hidden">
      <ScrollArea className="flex flex-col items-center justify-start overflow-y-auto hidden-scrollbar px-2">
        {communities.map((community) => (
          <TooltipContainer
            key={community.id}
            pos="right"
            sideOffset={5}
            content={community.name}
          >
            <Avatar className="cursor-pointer bg-gray-300 dark:bg-slate-700 flex items-center justify-center h-12 w-12 rounded-full my-4">
              <AvatarImage src={community.imageUrl || undefined} />
              <AvatarFallback>{community.name[0]}</AvatarFallback>
            </Avatar>
          </TooltipContainer>
        ))}
      </ScrollArea>
      <div>
        <Separator className="bg-slate-300 dark:bg-slate-700 mb-2" />
        <Button className="bg-gray-300 dark:bg-slate-700 flex items-center justify-center h-12 w-12 rounded-full aspect-square">
          <Community />
        </Button>
      </div>
    </div>
  );
};
