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
import React, { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 2800) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);
  return (
    <div
      className={`flex w-full sm:flex-col sm:gap-2 justify-center items-start overflow-hidden}`}
    >
      {NavItems.map((item) => {
        return (
          <Link
            className="w-full p-2 sm:hover:bg-slate-300 rounded-lg sm:dark:hover:bg-slate-800"
            key={item.id}
            href={item.href}
          >
            <span className="hidden sm:inline">{item.icon}</span>
            {item.name}
          </Link>
        );
      })}
      <Gradient />
    </div>
  );
};

export default CommunityNavs;
