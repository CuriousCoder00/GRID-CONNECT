import { Label } from "@/components/ui/label";

type Props = {};
export const Profile = ({}: Props) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex w-full flex-col gap-3">
        <Label>Name</Label>
        <input
          type="text"
          className="w-full p-2 rounded-lg border bg-transparent"
          required
          value={"Tox I C"}
          disabled
        />
      </div>
      <div className="flex w-full flex-col gap-3">
        <Label>Username</Label>
        <input
          type="text"
          required
          className="w-full p-2 rounded-lg border bg-transparent"
          value={"toxicp083"}
          disabled
        />
      </div>
      <div className="flex w-full flex-col gap-3">
        <Label>Email</Label>
        <input
          type="email"
          required
          className="w-full p-2 rounded-lg border bg-transparent"
          value={"toxicp083@gmail.com"}
          disabled
        />
      </div>
    </div>
  );
};
