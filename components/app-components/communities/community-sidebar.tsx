import { db } from "@/lib/db";

import { auth } from "@/lib/auth";
import { SidebarLinksCommunity } from "./SidebarLinks";

export const CommunitSidebar = async () => {
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
  if (!communities) return null;
  return (
    <SidebarLinksCommunity
      communities={communities}
    />
  );
};
