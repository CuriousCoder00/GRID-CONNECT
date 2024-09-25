import { useState } from "react";

import { Edit } from "lucide-react";

import { Input } from "@/components/Custom/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type Props = {
  name: string;
  username: string;
  email: string;
  isOAuth: boolean;
};
export const EditableProfile = ({ name, username, email, isOAuth }: Props) => {
  return (
    <form className="flex flex-col gap-5 w-full">
      <div className="flex w-full flex-col gap-3">
        <Label>Name</Label>
        <Input type="text" className="w-full" required value={name} />
      </div>
      <div className="flex w-full flex-col gap-3">
        <Label>Username</Label>
        <Input type="text" required className="w-full" value={username} />
      </div>
      {!isOAuth && (
        <div className="flex gap-4 items-end w-full">
          <div className="flex w-full flex-col gap-3">
            <Label>Email</Label>
            <Input type="email" required className="w-full" value={email} />
          </div>
        </div>
      )}
      <div className="flex items-center justify-end">
        <Button className="text-sm bg-black text-white dark:bg-white dark:text-black w-1/2">
          Save
        </Button>
      </div>
    </form>
  );
};
