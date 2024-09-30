import { useState } from "react";
import { Input } from "@/components/Custom/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useCurrentUser } from "@/hooks/use-current-user";
import { createUsername } from "@/actions/user-actions";

export const CreateUsername = () => {
  const [username, setUsername] = useState<string>("");
  const user = useCurrentUser();
  if (user.username) return null;
  console.log(user);
  const handleCreateUsername = async (username: string, email: string) => {
    await createUsername({ username, email });
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black dark:bg-opacity-70 bg-opacity-20 z-[300]">
      <div className="flex flex-col gap-5 w-[450px] mt-2 dark:bg-slate-950 rounded-lg p-5 border">
        <div className="flex flex-col w-full justify-center items-start">
          <h1 className="text-xl">Create Username</h1>
          <p>Create username to continue to application</p>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex w-full flex-col gap-3">
            <Label>Username</Label>
            <Input
              type="text"
              className="w-full"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <Button
              className="text-sm bg-black text-white dark:bg-white dark:text-black w-1/2"
              onClick={() => handleCreateUsername(username, user.email)}
            >
              Save
            </Button>
            <Button className="text-sm dark:text-white text-black w-1/2">
              Generate Automatic
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
