"use client";
import {
  CombineIcon,
  DiamondPercentIcon,
  Gamepad,
  GraduationCap,
  Music,
  Tv,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Gradient } from "@/components/Landing/Gradient";

const NavItems = [
  {
    id: 1,
    name: "All",
    href: "/explore",
    icon: <DiamondPercentIcon className="inline me-4" />,
    current: true,
  },
  {
    id: 2,
    name: "Gaming",
    href: "/explore/gaming",
    icon: <Gamepad className="inline me-4" />,
    current: false,
  },
  {
    id: 3,
    name: "Entertainment",
    href: "/explore/entertainment",
    icon: <Tv className="inline me-4" />,
    current: false,
  },
  {
    id: 4,
    name: "Education",
    href: "/explore/education",
    icon: <GraduationCap className="inline me-4" />,
    current: false,
  },
  {
    id: 5,
    name: "Science & Tech",
    href: "/explore/science-tech",
    icon: <CombineIcon className="inline me-4" />,
    current: false,
  },
  {
    id: 6,
    name: "Music",
    href: "/explore/music",
    icon: <Music className="inline me-4" />,
    current: false,
  },
];

const CommunityNavs = () => {
  return (
    <div
      className={`flex lg:flex-col sm:gap-2 justify-center items-start overflow-hidden}`}
    >
      <div className="hidden lg:flex flex-col justify-center items-center">
        {NavItems.map((item) => {
          return (
            <Link
              className="w-full p-2 sm:hover:bg-slate-300 rounded-lg flex flex-nowrap sm:dark:hover:bg-slate-800"
              key={item.id}
              href={item.href}
            >
              <span className="inline">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </div>
      <Gradient />
    </div>
  );
};

export default CommunityNavs;
