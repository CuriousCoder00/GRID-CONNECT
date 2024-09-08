"use client";
import { TracingBeam } from "@/components/animated/tracing-beam";
import { Navbar } from "@/components/Navbar";
import { Features } from "@/components/static/Features";
import { Hero } from "@/components/static/Hero";
import { useEffect, useState } from "react";

const links = [
  {
    name: "Explore",
    href: "/explore",
  },
  {
    name: "Login",
    href: "/auth/login",
  },
  {
    name: "Register",
    href: "/auth/register",
  },
];

export default function page() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 6000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <TracingBeam className="h-full overflow-hidden max-md:hidden">
        <div className="h-full overflow-x-hidden">
          <Navbar navLinks={links} />
          <Hero />
          <Features />
        </div>
      </TracingBeam>
      <div className="h-full overflow-x-hidden md:hidden">
        <Navbar navLinks={links} />
        <Hero />
        <Features />
      </div>
    </>
  );
}
