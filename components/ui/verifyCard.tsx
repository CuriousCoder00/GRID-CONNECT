"use client";

import React, { useState } from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/animated/3d-card";
import { APP_NAME } from "@/constants/TextConsts";
import BeatLoader from "react-spinners/BeatLoader";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { verifyEmail } from "@/actions/verification";
import Alert from "@/components/static/Alert";

export function VerifyCard() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";

  const router = useRouter();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleVerification = async () => {
    await verifyEmail({
      token,
      setError,
      setSuccess,
      setLoading,
      setVerified,
    })
  };

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem className="text-xl font-bold text-neutral-600 dark:text-white">
          Verify your email address
        </CardItem>
        <CardItem
          as="p"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          To start using {APP_NAME}, we need to verify your email
        </CardItem>
        {loading ? (
          <CardItem className="w-full mt-4 flex justify-center" as={"div"}>
            <BeatLoader color="#06b4ff" />
          </CardItem>
        ) : error ? (
          <Alert type="error" message={error} />
        ) : success ? (
          <Alert type="success" message={success} />
        ) : null}
        <CardItem
          as="p"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          For any queries: codebrise@gmail.com
        </CardItem>

        <div className="flex flex-col justify-center items-center mt-2 w-full ">
          {verified ? (
            <CardItem
              as="button"
              onClick={() => {
                router.push("/auth/login");
              }}
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold w-full"
            >
              Login
            </CardItem>
          ) : (
            <CardItem
              as="button"
              onClick={handleVerification}
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold w-full"
              disabled={loading}
            >
              Verify
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}
