"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { APP_NAME } from "@/constants/TextConsts";
import { IconMailBolt } from "@tabler/icons-react";

const page = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");

  const handleVerification = async () => {
    try {
      axios.post("api/auth/verifyEmail", { token });
      setVerified(true);
      setError("");
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  return (
    <div className="flex h-screen justify-center items-center dark:text-cyan-400 flex-col text-center px-4">
      <IconMailBolt className="" size={"150"} />
      <h1 className="text-4xl font-bold">Verify your email address</h1>
      <h1 className="text-xl">
        To start using {APP_NAME}, we need to verify your email.
      </h1>
      <p className="my-2 text-sm">Email: codebrise@gmail.com</p>
      <p className="mt-4">
        <button
          className="text-white px-6 py-2 bg-slate-900 dark:bg-cyan-600 rounded-xl"
          onClick={handleVerification}
        >
          Verify
        </button>
      </p>
    </div>
  );
};

export default page;
