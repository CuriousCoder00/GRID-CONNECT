import { Button } from "@/components/ui/button";
import { Community } from "../Community";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { NavigationLink } from "./navigation-link";
type Props = {
  communities: {
    category: string;
    id: string;
    name: string;
    description: string;
    imageUrl: string | null;
    inviteCode: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
};

export const SidebarLinksCommunity = ({ communities }: Props) => {
  return (
    <div className="flex flex-col justify-between items-center h-full max-h-[90vh] overflow-hidden">
      <ScrollArea className="flex flex-col items-center justify-start overflow-y-auto hidden-scrollbar px-2">
        {communities.map((community) => (
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
  );
};
