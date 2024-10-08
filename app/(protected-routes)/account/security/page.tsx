"use client";
import React from "react";
import Link from "next/link";
import { Authentication } from "@/components/app-components/account/Authentication";

const Page = () => {
  return (
    <div className="flex flex-col w-full h-full max-h-[90vh]">
      <div className="text-xs">
        <Link className="mr-1" href="/account">
          Account
        </Link>
        &gt; Privacy and Security
      </div>
      <div className="flex flex-col mt-5">
        <Authentication />
      </div>
    </div>
  );
};

export default Page;
