"use client";

type Props = {};
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
import { PasswordReset } from "@/app/(protected-routes)/account/_components/passwords/PasswordReset";

export function PasswordResetCard() {
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
    });
  };

  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem className="text-xl font-bold text-neutral-600 dark:text-white">
          Reset your password
        </CardItem>
        <CardItem
          as="p"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Reset your password by entering your email address. We will send you a
          link to reset your password.
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

        <div className="flex flex-col justify-center items-center mt-2 w-full ">
          <CardItem
            as="button"
            onClick={handleVerification}
            className="px-4 py-2 rounded-xl bg-transparent text-white text-sm font-bold w-full"
            disabled={loading}
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
