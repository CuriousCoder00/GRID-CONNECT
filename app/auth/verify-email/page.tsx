"use client";

import React, { useEffect, useState } from "react";
import { VerifyCard } from "@/components/ui/verifyCard";

const page = () => {
  return (
    <div className="relative min-h-screen w-screen flex justify-center items-center">
      <VerifyCard />
    </div>
  );
};

export default page;
