"use client";
import React, { useState } from "react";

import Link from "next/link";

import axios from "axios";

import { IconBrandGoogle } from "@tabler/icons-react";

import { Label } from "@/components/static/label";
import { Input } from "@/components/static/input";
import Alert from "@/components/static/Alert";

import { cn } from "@/lib/utils";
import { Register } from "@/actions/register";
import { GoogleLogin } from "@/actions/google-login";
import PulseLoader from "react-spinners/PulseLoader";

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
    <div className="max-w-md w-full mx-auto md:mt-24 mt-14 rounded-none md:rounded-2xl p-4 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Grid Connects
      </h2>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="Full Name">Full name</Label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              type="text"
              required
              disabled={loading}
              onChange={onValueChange}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="john.doe@gmail.com"
            type="email"
            required
            disabled={loading}
            onChange={onValueChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="••••••••"
            type="password"
            required
            autoComplete="current-password"
            disabled={loading}
            onChange={onValueChange}
          />
        </LabelInputContainer>
        {error && <Alert type="error" message={error} />}
        {successMessage && <Alert type="success" message={successMessage} />}
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 flex justify-center text-center items-center dark:bg-zinc-800 w-full dark:text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] "
          type="submit"
          disabled={loading}
        >
          {loading ? <PulseLoader color="#06b4ff" /> : "Sign up →"}
          <BottomGradient />
        </button>
        <div className="flex justify-end mt-2">
          <Link
            className="text-sm hover:text-blue-700 dark:hover:text-blue-400"
            href="/auth/login"
          >
            Already have an account?
          </Link>
        </div>
      </form>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-2 h-[1px] w-full" />

      <div className="flex flex-col">
        <button
          className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="submit"
          onClick={GoogleLogin}
          disabled={loading}
        >
          <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            Continue with Google
          </span>
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