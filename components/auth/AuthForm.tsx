"use client";

import React from "react";
import Socials from "./Socials";

export default function AuthForm({
  children,
  loading,
}: {
  children: React.ReactNode;
  loading: boolean;
}) {
  return (
    <div className="max-w-md h-full w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
      <h2 className="font-bold text-xl text-neutral-200">
        Welcome to Grid Connects
      </h2>
      {children}

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-2 h-[1px] w-full" />
      <Socials loading={loading} />
    </div>
  );
}
