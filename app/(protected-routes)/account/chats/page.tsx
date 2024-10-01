import TODO from "@/components/TODO";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col w-full h-full max-h-[90vh]">
      <div className="text-xs">
        <Link className="mr-1" href="/account">
          Account
        </Link>
        &gt; Chat Settings
      </div>
      <div className="flex flex-col mt-5">
      </div>
    </div>
  );
};

export default Page;
