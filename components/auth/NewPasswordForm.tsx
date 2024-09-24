"use client";

import React, { useState } from "react";
import { Label } from "@/components/Custom/label";
import { Login } from "@/actions/login";
import Alert from "@/components/Custom/Alert";
import { useSearchParams } from "next/navigation";
import PulseLoader from "react-spinners/PulseLoader";
import { BottomGradient } from "@/components/auth/BottomGradient";
import { LabelInputContainer } from "@/components/auth/LabelInputContainer";
import { Eye, EyeOffIcon } from "lucide-react";
import { ResetPassword } from "@/actions/reset-password";
import { Button } from "../ui/button";
import Link from "next/link";

export default function NewPasswordForm() {
  // State to hold user login data
  const searchParams = useSearchParams();
  const [password, setPassword] = useState({
    newPassword: "",
    repeatNewPassword: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // State to hold error messages
  const token = searchParams.get("token") || null;
  // State to handle error messages
  const [error, setError] = useState<string | undefined>(undefined);
  // State to handle success messages for email verification needed
  const [success, setSuccess] = useState<string | undefined>(undefined);

  // State to loading phase of form submission
  const [loading, setLoading] = useState(false);

  // Handle input value change for the form fields
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log({[e.target.name]: e.target.value })
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Make API call to the backend to register the user
    setError("");
    setSuccess("");
    // Set loading to true during API call
    setLoading(true);
    // Make API call to the backend to login the user
    if (token) {
      const res = await ResetPassword({ token, password });
      // Capture any error returned by the API
      setError(res?.error);
      // Capture any success message returned by the API
      setSuccess(res?.success);
    } else {
      setError("Invalid token");
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md h-full w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label className="text-white" htmlFor="email">
            New Password
          </Label>
          <input
            className="bg-neutral-950 p-2 rounded-lg border-[1px] border-slate-700 focus:outline-none text-white"
            id="password"
            placeholder="••••••••"
            type="password"
            name="newPassword"
            autoComplete="password"
            disabled={loading}
            onChange={onValueChange}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label className="text-white" htmlFor="password">
            Repeat New Password
          </Label>
          <div className="w-full flex items-center justify-center border-[1px] border-slate-700 rounded-lg bg-neutral-950">
            <input
              className=" w-full p-2  bg-neutral-950 text-white focus:outline-none"
              id="password"
              placeholder="••••••••"
              type={showPassword ? "text" : "password"}
              name="repeatNewPassword"
              autoComplete="current-password"
              disabled={loading}
              onChange={onValueChange}
            />
            <div
              className="flex items-center justify-center p-2 bg-transparent cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOffIcon /> : <Eye />}
            </div>
          </div>
        </LabelInputContainer>
        {error && <Alert type="error" message={error} />}
        {success && <Alert type="success" message={success} />}
        <button
          className="bg-gradient-to-br relative group/btn  from-zinc-900 to-zinc-900 bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex justify-center items-center mt-4"
          type="submit"
        >
          {loading ? <PulseLoader color="#06b4ff" /> : "Change Password"}
          <BottomGradient />
        </button>
      </form>
      <div className="mx-auto text-center">
        <Link href={"/auth/login"}>Back to login</Link>
      </div>
    </div>
  );
}
