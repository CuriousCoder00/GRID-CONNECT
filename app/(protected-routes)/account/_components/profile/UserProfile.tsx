import { Input } from "@/components/Custom/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Edit } from "lucide-react";

type Props = {};
export const UserProfile = ({}: Props) => {
  return (
    <div className="flex max-lg:flex-col gap-5 w-full my-5">
      <div className="flex gap-4 items-end w-full">
        <div className="flex w-full flex-col gap-3">
          <Label>Name</Label>
          <Input className="w-full" required value={"Toxic"} />
        </div>
        <Button className="flex gap-2 w-24 bg-black dark:bg-white text-white dark:text-black rounded-full">
          Edit
          <Edit className="w-4 h-4" />
        </Button>
      </div>
      <div className="flex gap-4 items-end w-full">
        <div className="flex w-full flex-col gap-3">
          <Label>Email</Label>
          <Input type="email" required className="w-full" value={"Toxic"} />
        </div>
        <Button className="flex gap-2 w-24 bg-black dark:bg-white text-white dark:text-black rounded-full">
          Edit
          <Edit className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
