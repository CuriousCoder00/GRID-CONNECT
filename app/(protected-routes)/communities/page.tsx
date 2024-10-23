import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { InitSetup } from "@/components/app-components/InitSetup";

const CommunitiesPage = async () => {
  const session = await auth();
  const user = session?.user;
  const community = await db.community.findFirst({
    where: {
      members: {
        some: {
          userId: user.id,
        },
      },
    },
  });

  if (community) {
    return redirect(`/communities/${community.id}/threads`);
  }

  return <InitSetup />;
};

export default CommunitiesPage;
