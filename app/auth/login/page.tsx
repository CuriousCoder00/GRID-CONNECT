"use client";

import React, { Suspense } from "react";
import LoginForm from "@/components/auth/LoginForm";

export default function Login() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
