import { Label } from "@/components/Custom/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Upload, User } from "lucide-react";

type Props = {
  imageUrl?: string;
  isOAuth: boolean;
  name: string;
  email: string;
};
export const ProfilePicture = ({ imageUrl, isOAuth, name, email }: Props) => {
  return (
    <div className="relative flex flex-col gap-2">
      <Avatar className="cursor-pointer h-24 w-24">
        <AvatarImage className=" object-cover" src={imageUrl || "   "} />
        <AvatarFallback className="bg-sky-700">
          <User />
        </AvatarFallback>
      </Avatar>
      <div className="flex justify-between">
        <div className="flex flex-col text-base">
          <span>{name}</span>
          <span className="text-xs text-slate-600 dark:text-slate-500">
            PNG, JPEG, JPG, WEBP
          </span>
        </div>
        {!isOAuth && (
          <div className="flex max-sm:absolute max-sm:flex-col bottom-0 right-2 gap-3">
            <Label
              className="flex justify-center items-center gap-2 text-sm bg-black dark:bg-white dark:text-black text-white rounded-full p-2 px-4 cursor-pointer"
              htmlFor="pfp"
            >
              <Upload className="w-4 h-4" />
              Upload image
            </Label>
            <input id="pfp" name="pfp" type="file" className="hidden" />
            <Button className="flex justify-center items-center gap-3 text-sm">
              Remove
            </Button>
          </div>
        )}
      </div>
      <div>{email}</div>
    </div>
  );
};
