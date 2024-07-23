"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/static/Hero";

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
    <div className="h-full overflow-hidden">
      <Navbar navLinks={links} />
      <Hero />
    </div>
  );
}
