"use client";
import { TracingBeam } from "@/components/animated/tracing-beam";
import { Navbar } from "@/components/Navbar";
import { Features } from "@/components/static/Features";
import { Hero } from "@/components/static/Hero";
import { IconBrandGithub, IconHeart } from "@tabler/icons-react";
import { LinkedinIcon } from "lucide-react";
import Link from "next/link";

const links = [
  {
    name: "Explore",
    href: "/explore",
  },
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Register",
    href: "/register",
  },
];

export default function Home() {
  return (
    <TracingBeam className="h-full overflow-hidden">
      <div className="h-full overflow-x-hidden">
        <Navbar navLinks={links} />
        <Hero />
        <Features />
      </div>
    </TracingBeam>
  );
}
