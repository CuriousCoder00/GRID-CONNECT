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
    <TracingBeam>
      <div className="h-full overflow-hidden">
        <Navbar navLinks={links} />
        <Hero />
      </div>
      <Features />
      <div className="flex container justify-between items-center border-t-2 pt-8">
        <div className="flex justify-center items-center">&copy; Copyright GridConnects 2024</div>
        <div className="flex justify-center items-center gap-2">
          Made with <IconHeart /> by @CuriousCoder
        </div>
        <div className="flex justify-center items-center gap-3">
          <Link scroll={false} href={"/"}>
            <IconBrandGithub />
          </Link>
          <Link scroll={false} href={"/"}>
            <LinkedinIcon />
          </Link>
        </div>
      </div>
    </TracingBeam>
  );
}
