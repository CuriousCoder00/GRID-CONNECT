"use client";

import React, { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import PulseLoader from "react-spinners/PulseLoader";
import { BottomGradient } from "@/components/auth/BottomGradient";
import { Eye, EyeOffIcon } from "lucide-react";
import { ResetPassword } from "@/actions/reset-password";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
  NewPasswordSchema,
  NewPasswordSchemaType,
} from "@/lib/validators/auth.validator";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Custom/input";
export default function NewPasswordForm() {
  // State to hold user login data
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [isPending, startTransition] = useTransition();
  
  const token = searchParams.get("token") || null;

  const form = useForm<NewPasswordSchemaType>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  // Handle input value change for the form fields
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue(e.target.name as keyof NewPasswordSchemaType, e.target.value);
  };

  const onFormSubmit = async (data: NewPasswordSchemaType) => {
    startTransition(() => {
      if (token) {
        ResetPassword(token, data.newPassword).then((res) => {
          res?.error
            ? toast({ title: res.error as string, variant: "destructive" })
            : toast({ title: res.success as string, variant: "success" });
        });
      } else {
        toast({ title: "Invalid token", variant: "destructive" });
      }
    });
  };

  return (
    <div className="max-w-md h-full w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
      <h2 className="text-2xl font-bold text-white text-center">Reset Password</h2>
      <Form {...form}>
        <form className="my-8" onSubmit={form.handleSubmit(onFormSubmit)}>
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter New Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    onChange={onValueChange}
                    placeholder="******"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500 text-end" />{" "}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Repeat New Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      onChange={onValueChange}
                      placeholder="******"
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOffIcon /> : <Eye />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage className="text-xs text-red-500 text-end" />{" "}
              </FormItem>
            )}
          />
          <button
            className="bg-gradient-to-br relative group/btn  from-zinc-900 to-zinc-900 bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex justify-center items-center mt-4"
            type="submit"
          >
            {isPending ? <PulseLoader color="#06b4ff" /> : "Change Password"}
            <BottomGradient />
          </button>
        </form>
      </Form>

      <div className="mx-auto text-center">
        <Link href={"/auth/login"}>Back to login</Link>
      </div>
    </div>
  );
}
