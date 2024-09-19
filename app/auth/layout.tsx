"use client";

import { WavyBackground } from "@/components/animated/wavy-background";
import { Icon } from "@/components/Custom/Icon";
import { APP_NAME } from "@/constants/TextConsts";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <WavyBackground className="max-w-4xl min-h-screen w-screen mx-auto flex justify-normal items-center">
      <div className="h-screen w-full overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute top-10 left-4 space-x-4">
            <Link
              scroll={false}
              href="/"
              className="font-bold flex text-2xl gap-3 justify-center items-center text-white"
            >
              <Icon /> {APP_NAME}s
            </Link>
          </div>
        <div className="flex flex-col justify-center items-center w-full">
          {children}
        </div>
      </div>
    </WavyBackground>
  );
};

export default AuthLayout;
