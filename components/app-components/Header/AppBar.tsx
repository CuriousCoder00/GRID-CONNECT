"use client";

import React from "react";

import { ProfileAvatar } from "../ProfileAvatar";
import { Community } from "./Community";
import { Notifications } from "./Notifications";
import { useCurrentUser } from "@/hooks/use-current-user";

export const AppBar = () => {
  const user = useCurrentUser();
  const { name, username, email, image } = user;
  return (
    <header className="md:px-20 p-2 flex w-screen items-center justify-between relative">
      <nav className="flex justify-end items-center w-full">
        <div className="flex justify-center items-center gap-4">
          <Community />
          <Notifications />
          <ProfileAvatar imageUrl={image || ""} />
        </div>
      </nav>
    </header>
  );
};