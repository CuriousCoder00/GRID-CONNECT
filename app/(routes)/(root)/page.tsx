"use client";
import { TracingBeam } from "@/components/animated/tracing-beam";
import { MultiStepLoader as Loader } from "@/components/animated/multi-step-loader";
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
    href: "/login",
  },
  {
    name: "Register",
    href: "/register",
  },
];

const loadingStates = [
  {
    text: "Generating Content..",
  },
  {
    text: "Loading Resources..",
  },
  {
    text: "Loading....",
  },
];

export default function Home() {
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
      {loading ? (
        <div className="w-full h-[60vh] flex items-center justify-center">
          <Loader
            loadingStates={loadingStates}
            loading={loading}
            duration={2000}
          />
        </div>
      ) : (
        <TracingBeam className="h-full overflow-hidden">
          <div className="h-full overflow-x-hidden">
            <Navbar navLinks={links} />
            <Hero />
            <Features />
          </div>
        </TracingBeam>
      )}
    </>
  );
}
