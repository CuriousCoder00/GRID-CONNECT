"use client";

import React, { Suspense } from "react";
import NewPasswordForm from "@/components/auth/NewPasswordForm";

export default function Login() {
  return (
    <Suspense>
      <NewPasswordForm />
    </Suspense>
  );
}
