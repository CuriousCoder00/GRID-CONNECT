import React, { Suspense } from "react";

import { VerifyCard } from "@/components/Custom/verifyCard";

const page = () => {
  return (
    <div className="relative min-h-screen w-screen flex justify-center items-center">
      <Suspense>
        <VerifyCard />
      </Suspense>
    </div>
  );
};

export default page;
