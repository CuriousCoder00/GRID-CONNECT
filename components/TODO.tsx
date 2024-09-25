import { IconArrowLeft } from "@tabler/icons-react";
import React from "react";

const TODO = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
      <div className="text-2xl">Under construction...</div>
      <a className="flex justify-center items-center gap-2 text-sm" href="/">
        <IconArrowLeft className="text-xs text-white" />
        Back Home
      </a>
    </div>
  );
};

export default TODO;
