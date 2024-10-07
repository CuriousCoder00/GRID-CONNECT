import { ProfileInfo } from "@/components/app-components/account/ProfileInfo";
import Link from "next/link";

type Props = {};
const Settings = ({}: Props) => {
  return (
    <div className="flex flex-col w-full h-full max-h-[90vh]">
      <div className="text-xs">
        <Link className="mr-1" href="/account">
          Account
        </Link>
        &gt; Profile Settings
      </div>
      <div className="flex flex-col mt-5">
        <ProfileInfo />
      </div>
    </div>
  );
};

export default Settings;
