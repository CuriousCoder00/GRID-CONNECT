"use client";

import React, { useState } from "react";
import Link from "next/link";

import { ProfileAvatar } from "../ProfileAvatar";
import { BellIcon, Plus } from "lucide-react";

export const AppBar = () => {
  const [createModal, setCreateModal] = useState<boolean>(true);
  return (
    <header className="md:px-20 p-2 flex w-screen items-center justify-between relative">
      <nav className="flex justify-end items-center w-full">
        <div className="flex justify-center items-center gap-4">
          <Link href={"/create"} className="relative">
            <Plus/>
          </Link>
          <BellIcon />
          <ProfileAvatar />
        </div>
      </nav>
    </header>
  );
};

const MobileNavbar = () => {};

const AppBarLinks = () => {};
