"use client";
import { Separator } from "@/components/ui/separator";
import { ProfilePicture } from "./ProfilePicture";
import { UserProfile } from "./UserProfile";
import { useCurrentUser } from "@/hooks/use-current-user";
 

type Props = {};
export const ProfileInfo = ({}: Props) => {
  const user = useCurrentUser();
  return (
    <div className="flex flex-col">
      <ProfilePicture
        imageUrl={user?.image}
        isOAuth={user?.isOAuth}
        name={user?.name}
        email={user?.email}
      />
      <Separator className="bg-slate-400 dark:bg-slate-800 my-3" />
      <UserProfile
        name={user?.name}
        username={user?.username}
        email={user?.email}
        isOAuth={user?.isOAuth}
      />
    </div>
  );
};
