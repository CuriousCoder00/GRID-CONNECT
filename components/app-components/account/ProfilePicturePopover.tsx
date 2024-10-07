import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PencilIcon, Trash, User } from "lucide-react";

type Props = {
  isOAuth: boolean;
  imageUrl?: string;
};
export const ProfilePicturePopover = ({ imageUrl, isOAuth }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 my-4">
      <div className="flex justify-center items-center">
        <Avatar className="cursor-pointer w-64 h-64">
          <AvatarImage className=" object-cover" src={imageUrl || "   "} />
          <AvatarFallback className="bg-sky-700">
            <User />
          </AvatarFallback>
        </Avatar>
      </div>
      {!isOAuth && (
        <div className="flex mt-2">
          <Label
            className="flex items-center justify-center gap-3 text-xs bg-black text-white dark:bg-white dark:text-black rounded-full px-6 cursor-pointer"
            htmlFor="pfp"
          >
            <PencilIcon className="w-4 h-4" />
            Change
          </Label>
          <input type="file" id="pfp" name="pfp" className="hidden" />
          <Button className="flex items-center justify-center gap-3 text-xs text-red-400">
            <Trash className="w-4 h-4" />
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};
