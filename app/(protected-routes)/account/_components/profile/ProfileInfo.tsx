import { Separator } from "@/components/ui/separator";
import { ProfilePicture } from "./ProfilePicture";
import { UserProfile } from "./UserProfile";

type Props = {};
export const ProfileInfo = ({}: Props) => {

  return (
    <div className="flex flex-col">
      <ProfilePicture  />
      <Separator className="bg-slate-400 dark:bg-slate-800 my-3"/>
      <UserProfile/>
    </div>
  );
};
