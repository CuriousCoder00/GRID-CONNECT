import { Label } from "@/components/ui/label";
import { useSession } from "next-auth/react";

type Props = {
  name: string;
  username: string;
  email: string;
};
export const Profile = ({ name, username, email }: Props) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex w-full flex-col gap-3">
        <Label>Name</Label>
        <input
          type="text"
          className="w-full p-2 rounded-lg border bg-transparent"
          required
          value={name}
          disabled
        />
      </div>
      <div className="flex w-full flex-col gap-3">
        <Label>Username</Label>
        <input
          type="text"
          required
          className="w-full p-2 rounded-lg border bg-transparent"
          value={username}
          disabled
        />
      </div>
      <div className="flex w-full flex-col gap-3">
        <Label>Email</Label>
        <input
          type="email"
          required
          className="w-full p-2 rounded-lg border bg-transparent"
          value={email}
          disabled
        />
      </div>
    </div>
  );
};
