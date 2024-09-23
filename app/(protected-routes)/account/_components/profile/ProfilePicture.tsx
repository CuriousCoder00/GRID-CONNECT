import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Upload, UploadCloud } from "lucide-react";

type Props = {
  imageUrl?: string;
};
export const ProfilePicture = ({ imageUrl }: Props) => {
  return (
    <div className="relative flex flex-col gap-2">
      <Avatar className="cursor-pointer h-24 w-24">
        <AvatarImage src={imageUrl} />
        <AvatarFallback className="bg-sky-700">KK</AvatarFallback>
      </Avatar>
      <div className="flex justify-between">
        <div className="flex flex-col text-base">
          <span>Profile Picture</span>
          <span className="text-xs text-slate-600 dark:text-slate-500">
            PNG, JPEG, JPG, WEBP
          </span>
        </div>
        <div className="flex max-sm:absolute max-sm:flex-col bottom-0 right-2 gap-3">
          <Button className="flex justify-center items-center gap-2 text-sm bg-black dark:bg-white dark:text-black text-white rounded-full p-2 px-4  ">
            <Upload className="w-4 h-4"/>
            Upload image
          </Button>
          <Button className="flex justify-center items-center gap-3 text-sm">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};
