"use client";

import LoginForm from "@/components/auth/LoginForm";
import React, { Suspense } from "react";

export default function LoginPage() {
  return (
    <div className="max-w-md h-full w-full rounded-none md:rounded-2xl shadow-input bg-black">
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
}
