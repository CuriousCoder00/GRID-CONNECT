"use client";

type Props = {};
import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/animated/3d-card";
import { useRouter } from "next/navigation";
import { PasswordReset } from "@/components/auth/PasswordReset";

export function PasswordResetCard() {

  const router = useRouter();

  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black text-white border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem className="text-xl font-bold text-white">
          Reset your password
        </CardItem>
        <CardItem as="p" className="text-neutral-500 text-sm max-w-sm mt-2">
          Reset your password by entering your email address. We will send you a
          link to reset your password.
        </CardItem>

        <div className="flex flex-col justify-center items-center mt-2 w-full ">
          <CardItem
            className="px-4 py-2 rounded-xl bg-transparent text-white text-sm font-bold w-full"
          >
            <PasswordReset />
          </CardItem>
          <CardItem
            as="button"
            onClick={() => {
              router.push("/auth/login");
            }}
            className="px-4 py-2 rounded-xl text-white text-sm font-bold w-full"
          >
            Back to login
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
