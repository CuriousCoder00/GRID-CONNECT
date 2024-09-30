import { useState } from "react";

import { Input } from "@/components/Custom/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { updateUser } from "@/actions/user-actions";

type Props = {
  name: string;
  username: string;
  email: string;
  isOAuth: boolean;
};
export const EditableProfile = ({ name, username, email, isOAuth }: Props) => {
  const [userData, setUserData] = useState({
    name: name,
    username: username,
    email: email,
  });
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateUser(userData);
  };
  return (
    <form className="flex flex-col gap-5 w-full" onSubmit={handleFormSubmit}>
      <div className="flex w-full flex-col gap-3">
        <Label>Name</Label>
        <Input
          name="name"
          type="text"
          className="w-full"
          required
          value={userData.name}
          onChange={handleValueChange}
        />
      </div>
      <div className="flex w-full flex-col gap-3">
        <Label>Username</Label>
        <Input
          name="username"
          type="text"
          required
          className="w-full"
          value={userData.username}
          onChange={handleValueChange}
        />
      </div>
      {!isOAuth && (
        <div className="flex gap-4 items-end w-full">
          <div className="flex w-full flex-col gap-3">
            <Label>Email</Label>
            <Input
              name="email"
              type="email"
              required
              className="w-full"
              value={userData.email}
              onChange={handleValueChange}
            />
          </div>
        </div>
      )}
      <div className="flex items-center justify-end">
        <Button
          type="submit"
          className="text-sm bg-black text-white dark:bg-white dark:text-black w-1/2"
        >
          Save
        </Button>
      </div>
    </form>
  );
};
