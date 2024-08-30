import { APP_NAME } from "@/constants/TextConsts";
import { IconMailBolt } from "@tabler/icons-react";
import React from "react";

const page = () => {
  return (
    <div className="flex h-screen justify-center items-center dark:text-cyan-400 flex-col text-center px-4">
      <IconMailBolt className="" size={"150"} />
      <h1 className="text-4xl font-bold">Verify your email address</h1>
      <h1 className="text-xl">
        To start using {APP_NAME}, we need to verify your email.
      </h1>
      <p className="my-2 text-sm">Email: codebrise@gmail.com</p>
      <p className="mt-4">
        <a
          href=""
          className="text-white px-6 py-2 bg-slate-900 dark:bg-cyan-600 rounded-xl"
          target="_blank"
          rel="verify"
        >
          Verify
        </a>
      </p>
    </div>
  );
};

export default page;
