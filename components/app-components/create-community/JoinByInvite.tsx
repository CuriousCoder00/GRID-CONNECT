import { Input } from "@/components/Custom/input";
import { Label } from "@/components/ui/label";
import React from "react";

export const JoinByInvite = () => {
  return (
    <form className="flex flex-col">
      <Label htmlFor="invite-code" className="text-sm text-muted-foreground my-2">
        Enter the invite code
      </Label>
      <Input
        type="text"
        id="invite-code"
        className=""
        placeholder="Enter the invite code"
      />
      <button className="btn-primary mt-4">Join Community</button>
    </form>
  );
};
