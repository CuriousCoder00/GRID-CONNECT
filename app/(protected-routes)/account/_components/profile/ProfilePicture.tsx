import { Label } from "@/components/Custom/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Upload, User } from "lucide-react";
import { ProfilePicturePopover } from "./ProfilePicturePopover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  imageUrl?: string;
  isOAuth: boolean;
  name: string;
  email: string;
};
export const ProfilePicture = ({ imageUrl, isOAuth, name, email }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <Dialog>
        <DialogTrigger asChild className="w-24 rounded-full">
          <Avatar className="cursor-pointer h-24 w-24">
            <AvatarImage className=" object-cover" src={imageUrl || "   "} />
            <AvatarFallback className="bg-sky-700">
              <User />
            </AvatarFallback>
          </Avatar>
        </DialogTrigger>
        <DialogContent className="flex flex-col justify-center items-center sm:w-[330px] sm:h-auto h-screen bg-white dark:bg-slate-950 md:rounded-2xl">
          {isOAuth ? (
            <DialogHeader>
              <DialogTitle>Profile Picture</DialogTitle>
              <DialogDescription>
                A profile picture helps others recognize you.
              </DialogDescription>
            </DialogHeader>
          ) : (
            <DialogHeader>
              <DialogTitle>Change Profile Picture</DialogTitle>
              <DialogDescription>
                A profile picture helps others recognize you.
              </DialogDescription>
            </DialogHeader>
          )}
          <ProfilePicturePopover imageUrl={imageUrl} isOAuth={isOAuth} />
        </DialogContent>
      </Dialog>
      <div className="flex justify-between">
        <div className="flex flex-col text-base uppercase">
          <span>{name}</span>
          <span className="text-xs text-slate-600 dark:text-slate-500">
            PNG, JPEG, JPG, WEBP
          </span>
        </div>
      </div>
    </div>
  );
};
