import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col w-full h-full max-h-[90vh]">
      <div className="text-xs">
        <Link className="mr-1" href="/account">
          Account
        </Link>
        &gt; Manage Devices
      </div>
      <div className="flex flex-col mt-5">
        <span className="text-lg font-bold">Devices</span>
        <span className="text-xs">
          Manage your devices and sessions that are currently logged in.
        </span>
      </div>
    </div>
  );
};

export default Page;
