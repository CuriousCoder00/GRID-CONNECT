"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Avatar } from "../Avatar";
import {
  BellIcon,
  LucideMessageSquareText,
} from "lucide-react";

export const AppBar = () => {
  return (
    <header className="md:px-20 p-2 flex w-screen items-center justify-between relative">
      <nav className="flex justify-end items-center w-full">
        <div className="flex justify-center items-center gap-4">
          <LucideMessageSquareText />
          <BellIcon />
          <Avatar />
        </div>
      </nav>
    </header>
  );
};

const MobileNavbar = () => {};

const AppBarLinks = () => {};
