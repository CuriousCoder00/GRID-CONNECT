import { Separator } from "@/components/ui/separator";
import { EllipsisVertical, MessageSquare } from "lucide-react";

type Props = {};
export const AllFriends = ({}: Props) => {
  return (
    <div className="flex flex-col w-full">
      <div className="text-xs my-3 uppercase">All - 1</div>
      <Separator className="bg-slate-400 dark:bg-slate-600" />
      <div className="flex flex-col gap-2 mt-3">
        <div className="flex justify-between items-center gap-2 hover:bg-slate-300 dark:hover:bg-slate-900 p-2 rounded-md">
          <div className="flex items-center gap-3">
            <img
              src="https://avatars.dicebear.com/api/human/1.svg"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <div>Name</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full hover:bg-slate-400 dark:hover:bg-slate-800 cursor-pointer">
              <MessageSquare className="size-5" />
            </div>
            <div className="p-2 rounded-full hover:bg-slate-400 dark:hover:bg-slate-800 cursor-pointer">
              <EllipsisVertical className="size-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
