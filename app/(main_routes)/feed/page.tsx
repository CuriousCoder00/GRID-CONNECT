"use client";
import { TracingBeam } from "@/components/animated/tracing-beam";
import { MultiStepLoader as Loader } from "@/components/animated/multi-step-loader";
import { Navbar } from "@/components/Navbar";
import { Features } from "@/components/static/Features";
import { Hero } from "@/components/static/Hero";
import { useEffect, useState } from "react";

const links = [
  {
    name: "Feed",
    href: "/feed",
  },

  {
    name: "Communities",
    href: "/communities",
  },
  {
    name: "Friends",
    href: "/friends",
  },
  {
    name: "Chats",
    href: "/chats",
  },
  {
    name: "Notifications",
    href: "/notifications",
  },
  {
    name: "Account",
    href: "/account",
  },
];

export default function page() {
  return (
    <div className="h-full overflow-x-hidden">
      <Navbar navLinks={links} />
    </div>
  );
}
