import Link from "next/link";
import React from "react";

import { Password } from "../_components/passwords/Password";

const Profile = () => {
  return (
    <div className="flex flex-col w-full h-full max-h-[90vh]">
      <div className="text-xs">
        <Link className="mr-1" href="/account">
          Account
        </Link>
        &gt; Password
      </div>
      <div className="flex flex-col mt-5">
        Change Password
        <Password />
      </div>
    </div>
  );
};

export default Profile;
