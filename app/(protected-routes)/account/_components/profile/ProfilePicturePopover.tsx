import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { User } from "lucide-react";

type Props = {
  imageUrl?: string;
};
export const ProfilePicturePopover = ({ imageUrl }: Props) => {
  return (
    <Popover>
      <Avatar className="cursor-pointer h-24 w-24 md:hidden">
        <PopoverTrigger>
          <AvatarImage className=" object-cover" src={imageUrl || "   "} />
          <AvatarFallback className="bg-sky-700">
            <User />
          </AvatarFallback>
        </PopoverTrigger>
      </Avatar>
      <PopoverContent side="right" className=" mr-4 bg-white dark:bg-slate-950 p-4">
        Change Your Profile Picture
        <div className="flex justify-center items-center gap-3 ">
          <div className="flex gap-3">
            <Label htmlFor="pfp">
              <Button>Browse Pictures</Button>
            </Label>
            <input id="pfp" name="pfp" type="file" className="hidden" />
          </div>
          <Button className="text-sm">Remove</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
