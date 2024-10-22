"use client";

import React, { useTransition, useState } from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/animated/3d-card";
import { APP_NAME } from "@/lib/constants/TextConsts";
import BeatLoader from "react-spinners/BeatLoader";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { verifyEmail } from "@/actions/verification";
import { useToast } from "@/hooks/use-toast";
export function VerifyCard() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [verified, setVerified] = useState(false);
  const handleVerification = async () => {
    startTransition(() => {
      verifyEmail(token)
        .then((res) => {
          res?.error
            ? toast({ title: res.error as string, variant: "destructive" })
            : res?.success
            ? toast({ title: res.success as string, variant: "success" })
            : null;
        })
        .then(() => {
          setVerified(true);
        });
    });
  };

  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border text-white">
        <CardItem className="text-xl font-bold  text-white">
          Verify your email address
        </CardItem>
        <CardItem as="p" className="text-sm max-w-sm mt-2">
          To start using {APP_NAME}, we need to verify your email
        </CardItem>
        {isPending ? (
          <CardItem className="w-full mt-4 flex justify-center" as={"div"}>
            <BeatLoader color="#06b4ff" />
          </CardItem>
        ) : null}
        <CardItem as="p" className="text-sm max-w-sm mt-2 text-neutral-300">
          For any queries: codebrise@gmail.com
        </CardItem>

        <div className="flex flex-col justify-center items-center mt-2 w-full ">
          {verified ? (
            <CardItem
              as="button"
              onClick={() => {
                router.push("/auth/login");
              }}
              className="px-4 py-2 rounded-xl  text-white text-sm font-bold w-full"
            >
              Login
            </CardItem>
          ) : (
            <CardItem
              as="button"
              onClick={handleVerification}
              className="px-4 py-2 rounded-xl text-black bg-white  text-sm font-bold w-full"
              disabled={isPending}
            >
              Verify
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}
