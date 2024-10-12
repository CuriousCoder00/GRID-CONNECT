import { Input } from "@/components/Landing/Custom/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Props = {};
export const AddFriends = ({}: Props) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col my-3 gap-1">
        <div className="text-lg">Add Friends</div>
        <div className="text-xs">
          You can add friends with their username or email.
        </div>
      </div>
      <Separator className="bg-slate-400 dark:bg-slate-600 mb-3" />
      <div className="flex flex-col w-full gap-3">
        <Input placeholder="You can add friends with their username or email" />
        <div className="flex justify-end">
          <Button className="w-52 bg-green-600 text-white dark:bg-green-700 rounded-md p-1 px-4">
            Send Friend Request
          </Button>
        </div>
      </div>
    </div>
  );
};
