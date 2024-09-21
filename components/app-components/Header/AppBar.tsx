"use client";

import React, { useState } from "react";
import Link from "next/link";

import { ProfileAvatar } from "../ProfileAvatar";
import { BellIcon, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Community } from "./Community";
export const AppBar = () => {
  return (
    <header className="md:px-20 p-2 flex w-screen items-center justify-between relative">
      <nav className="flex justify-end items-center w-full">
        <div className="flex justify-center items-center gap-4">
          <Community />
          <BellIcon />
          <ProfileAvatar />
        </div>
      </nav>
    </header>
  );
};

const MobileNavbar = () => {};

const AppBarLinks = () => {};
