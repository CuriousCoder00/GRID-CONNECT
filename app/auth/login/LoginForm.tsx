"use client";

import React, { Suspense, useState } from "react";
import { Label } from "@/components/Custom/label";
import { Input } from "@/components/Custom/input";
import Link from "next/link";
import { Login } from "@/actions/login";
import Alert from "@/components/Custom/Alert";
import { useSearchParams } from "next/navigation";
import PulseLoader from "react-spinners/PulseLoader";
import { BottomGradient } from "@/components/auth/BottomGradient";
import { LabelInputContainer } from "@/components/auth/LabelInputContainer";
import AuthForm from "@/components/auth/AuthForm";

export default function LoginForm() {
  // State to hold user login data
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  // State to hold error messages
  const searchParams = useSearchParams();
  const authError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Please login with different email."
      : "";
  // State to handle error messages
  const [error, setError] = useState<string | undefined>(undefined);
  // State to handle success messages for email verification needed
  const [success, setSuccess] = useState<string | undefined>(undefined);

  // State to loading phase of form submission
  const [loading, setLoading] = useState(false);

  // Handle input value change for the form fields
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Make API call to the backend to register the user
    setError("");
    setSuccess("");
    // Set loading to true during API call
    setLoading(true);
    // Make API call to the backend to login the user
    const res = await Login({ userData });
    // Capture any error returned by the API
    setError(res?.error);
    // Capture any success message returned by the API
    setSuccess(res?.warning);
    // Reset loading state after the API call
    setLoading(false);
  };

  return (
    <AuthForm loading={loading}>
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label className="text-white" htmlFor="email">
            Email Address
          </Label>
          <Input
            className="bg-neutral-800 text-white"
            id="email"
            placeholder="john.doe@gmail.com"
            type="email"
            name="email"
            autoComplete="email"
            disabled={loading}
            onChange={onValueChange}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label className="text-white" htmlFor="password">
            Password
          </Label>
          <Input
            className="bg-neutral-800 text-white"
            id="password"
            placeholder="••••••••"
            type="password"
            name="password"
            autoComplete="current-password"
            disabled={loading}
            onChange={onValueChange}
          />
        </LabelInputContainer>
        <div className="mb-4 text-end">
          <Link
            className="text-xs text-white hover:text-blue-400"
            href={"/auth/reset-pass"}
          >
            Forgot Password?
          </Link>
        </div>
        {error && <Alert type="error" message={error} />}
        {authError && <Alert type="error" message={authError} />}
        {success && <Alert type="warning" message={success} />}
        <button
          className="bg-gradient-to-br relative group/btn  from-zinc-900 to-zinc-900 bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex justify-center items-center"
          type="submit"
        >
          {loading ? <PulseLoader color="#06b4ff" /> : "Login →"}
          <BottomGradient />
        </button>
        <div className="flex justify-end mt-2">
          <Link
            className="text-sm text-white hover:text-blue-400"
            href="/auth/register"
          >
            Don&apos;t have an account yet?
          </Link>
        </div>
      </form>
    </AuthForm>
  );
}
