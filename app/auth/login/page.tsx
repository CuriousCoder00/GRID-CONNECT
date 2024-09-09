"use client";

import LoginForm from "@/components/auth/LoginForm";
import React, { Suspense } from "react";

export default function LoginPage() {
  return (
    <div className="max-w-md h-full w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
}
