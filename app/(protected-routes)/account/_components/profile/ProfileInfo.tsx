"use client";
import { Separator } from "@/components/ui/separator";
import { ProfilePicture } from "./ProfilePicture";
import { UserProfile } from "./UserProfile";
import { useCurrentUser } from "@/hooks/use-current-user";

type Props = {};
export const ProfileInfo = ({}: Props) => {
  const user = useCurrentUser();
  const { name, username, email, image, isOAuth } = user;
  return (
    <div className="flex flex-col">
      <ProfilePicture imageUrl={image} isOAuth={isOAuth} name={name} email={email} />
      <Separator className="bg-slate-400 dark:bg-slate-800 my-3" />
      <UserProfile
        name={name}
        username={username}
        email={email}
        isOAuth={isOAuth}
      />
    </div>
  );
};