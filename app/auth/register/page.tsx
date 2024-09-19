"use client";
import React, { useState } from "react";

import Link from "next/link";

import { Label } from "@/components/Custom/label";
import { Input } from "@/components/Custom/input";
import Alert from "@/components/Custom/Alert";

import { cn } from "@/lib/utils";
import { Register } from "@/actions/register";
import PulseLoader from "react-spinners/PulseLoader";
import AuthForm from "@/components/auth/AuthForm";

export default function RegisterPage() {
  // State to hold user registration data
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State to handle error messages
  const [error, setError] = useState("");

  // State to loading phase of form submission
  const [loading, setLoading] = useState(false);

  // State to display success messages
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input value change for the form fields
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Handle form submission for user registration
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form from submitting the default way
    Register({ userData, setError, setSuccessMessage, setLoading });
  };

  return (
    <AuthForm loading={loading}>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label className="text-white" htmlFor="Full Name">
              Full name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              type="text"
              required
              className="bg-neutral-800 text-white"
              disabled={loading}
              onChange={onValueChange}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label className="text-white" htmlFor="email">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="john.doe@gmail.com"
            type="email"
            required
            className="bg-neutral-800 text-white"
            disabled={loading}
            onChange={onValueChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="text-white" htmlFor="password">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            placeholder="••••••••"
            type="password"
            required
            className="bg-neutral-800 text-white"
            autoComplete="current-password"
            disabled={loading}
            onChange={onValueChange}
          />
        </LabelInputContainer>
        {error && <Alert type="error" message={error} />}
        {successMessage && <Alert type="success" message={successMessage} />}
        <button
          className="mt-8 bg-gradient-to-br relative group/btn  from-zinc-900 to-zinc-900 flex justify-center text-center items-center bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] "
          type="submit"
          disabled={loading}
        >
          {loading ? <PulseLoader color="#06b4ff" /> : "Sign up →"}
          <BottomGradient />
        </button>
        <div className="flex justify-end mt-2">
          <Link
            className="text-sm text-white hover:text-blue-400"
            href="/auth/login"
          >
            Already have an account?
          </Link>
        </div>
      </form>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-2 h-[1px] w-full" />
    </AuthForm>
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
