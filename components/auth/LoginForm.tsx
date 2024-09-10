"use client";

import React, { useState } from "react";
import { Label } from "@/components/static/label";
import { Input } from "@/components/static/input";
import { cn } from "@/lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";
import { Gradient } from "@/components/static/Gradient";
import { Login } from "@/actions/login";
import Alert from "@/components/static/Alert";
import { GoogleLogin } from "@/actions/google-login";
import { useSearchParams } from "next/navigation";
import PulseLoader from "react-spinners/PulseLoader";

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
    <div className="max-w-md h-full w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
      <h2 className="font-bold text-xl text-neutral-200">
        Welcome to Grid Connects
      </h2>

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
          <Link className="text-xs text-white hover:text-blue-400" href={"/auth/reset-pass"}>
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
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-2 h-[1px] w-full" />
      <div className="flex flex-col">
        <button
          className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full rounded-md h-10 font-medium  bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="submit"
          disabled={loading}
          onClick={GoogleLogin}
        >
          <IconBrandGoogle className="h-4 w-4 text-neutral-300" />
          <span className="text-neutral-300 text-sm">Continue with Google</span>
          <BottomGradient />
        </button>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
