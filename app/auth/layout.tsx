"use client";

import { WavyBackground } from "@/components/animated/wavy-background";
import { Navbar } from "@/components/Navbar";
import { Gradient } from "@/components/static/Gradient";
import { usePathname } from "next/navigation";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <WavyBackground className="max-w-4xl min-h-screen w-screen mx-auto flex justify-normal items-center">
      <div className="h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        <Navbar
          hideMobileNav={true}
          hideAll={pathname === "/auth/verify-email"}
        />
        <div className="flex flex-col justify-center items-center w-full">
          <Gradient />
          {children}
          <Gradient />
        </div>
      </div>
    </WavyBackground>
  );
};

export default AuthLayout;
