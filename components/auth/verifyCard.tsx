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
import Alert from "@/components/Custom/Alert";

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
      <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border text-white">
        <CardItem className="text-xl font-bold  text-white">
          Verify your email address
        </CardItem>
        <CardItem
          as="p"
          className="text-sm max-w-sm mt-2"
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
          className="text-sm max-w-sm mt-2 text-neutral-300"
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
              className="px-4 py-2 rounded-xl  text-white text-sm font-bold w-full"
            >
              Login
            </CardItem>
          ) : (
            <CardItem
              as="button"
              onClick={handleVerification}
              className="px-4 py-2 rounded-xl text-black bg-white  text-sm font-bold w-full"
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
