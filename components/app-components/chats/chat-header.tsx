import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PhoneCall, Video } from "lucide-react";
type Props = {};

export const ChatHeader = ({}: Props) => {
  return (
    <div className="flex items-center justify-between border-b-2 border-b-slate-600 p-2">
      <div className="flex items-center justify-start gap-2">
        <Avatar className="h-7 w-7">
          <AvatarImage src="https://avatars.dicebear.com/api/human/1.svg" />
          <AvatarFallback>"U"</AvatarFallback>
        </Avatar>
        <span className="text-sm">
            user_name
        </span>
      </div>
      <div className="flex items-center justify-center gap-3">
        <PhoneCall className="size-5" />
        <Video className="size-6" />
      </div>
    </div>
  );
};
