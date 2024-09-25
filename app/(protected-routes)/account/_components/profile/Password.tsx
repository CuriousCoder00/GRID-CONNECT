import { Input } from "@/components/Custom/input";
import { Label } from "@/components/Custom/label";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

type Props = {};
export const Password = ({}: Props) => {
  return (
    <form className="flex flex-col mt-4 gap-3 lg:w-1/2">
      <div className="flex flex-col gap-3">
        <Label>Current Password</Label>
        <Input placeholder="Current Password" type="password" />
      </div>
      <div className="flex flex-col gap-3">
        <Label>New Password</Label>
        <Input placeholder="New Password" type="password" />
      </div>
      <div className="flex flex-col gap-3">
        <Label>Confirm New Password</Label>
        <Input placeholder="Confirm New Password" type="password" />
      </div>
      <div className="flex items-center justify-end">
        <Button className="text-sm bg-black text-white dark:bg-white dark:text-black w-1/2">
          Save
        </Button>
      </div>
    </form>
  );
};
