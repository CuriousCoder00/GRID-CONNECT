"use client";

import React, { useTransition } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/Custom/input";
import { Login } from "@/actions/login";
import PulseLoader from "react-spinners/PulseLoader";
import { BottomGradient } from "@/components/auth/BottomGradient";
import AuthForm from "@/components/auth/AuthForm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/lib/validators/auth.validator";
import { useToast } from "@/hooks/use-toast";

export default function LoginForm() {
  type LoginSchemaType = z.infer<typeof LoginSchema>;

  const { toast } = useToast();
  const searchParams = useSearchParams();

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const authError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Please login with different email."
      : null;

  const [isPending, startTransition] = useTransition();

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue(e.target.name as keyof LoginSchemaType, e.target.value);
  };

  const onLogin = async (data: LoginSchemaType) => {
    startTransition(() => {
      Login({ data })
        .then((res) => {
          res?.error
            ? toast({ title: res.error as string, variant: "destructive" })
            : res?.success
            ? toast({ title: res.success as string, variant: "success" })
            : res?.warning
            ? toast({ title: res?.warning as string, variant: "warning" })
            : null;
        })
        .then(() => {
          authError && toast({ title: authError, variant: "destructive" });
        });
    });
  };

  return (
    <AuthForm loading={isPending}>
      <Form {...form}>
        <form className="my-8" onSubmit={form.handleSubmit(onLogin)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    onChange={onValueChange}
                    placeholder="john.doe@gmail.com"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500 text-end" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    onChange={onValueChange}
                    placeholder="******"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500 text-end" />
              </FormItem>
            )}
          />
          <div className="mb-4 text-end">
            <Link
              className="text-xs text-white hover:text-blue-400"
              href={"/auth/reset-pass"}
            >
              Forgot Password?
            </Link>
          </div>
          <button
            className="bg-gradient-to-br relative group/btn  from-zinc-900 to-zinc-900 bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex justify-center items-center"
            type="submit"
          >
            {isPending ? <PulseLoader color="#06b4ff" /> : "Login →"}
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
      </Form>
    </AuthForm>
  );
}
