import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CircleX, Edit } from "lucide-react";
import { useState } from "react";
import { Profile } from "./Profile";
import { EditableProfile } from "./EditableProfile";

type Props = {
  name: string;
  username: string;
  email: string;
  isOAuth: boolean;
};
export const UserProfile = ({ name, username, email, isOAuth }: Props) => {
  const [editToggle, setEditToggle] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-5 w-full mt-2">
      <div className="flex w-full justify-between">
        <h2 className="text-lg">User Profile</h2>
        <div className="flex items-center">
          <Button
            className="text-sm"
            onClick={() => setEditToggle(!editToggle)}
          >
            {!editToggle ? (
              <div className="flex items-center gap-2">
                <Edit className="w-4 h-4" />
                Edit
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <CircleX className="w-4 h-4" />
                Cancel
              </div>
            )}
          </Button>
        </div>
      </div>
      <div className="lg:w-1/2">
        {!editToggle ? (
          <Profile
            name={name}
            username={username}
            email={email}
            isOAuth={isOAuth}
          />
        ) : (
          <EditableProfile
            name={name}
            username={username}
            email={email}
            isOAuth={isOAuth}
          />
        )}
      </div>
    </div>
  );
};
