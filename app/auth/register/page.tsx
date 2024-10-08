"use client";

import React, { useTransition } from "react";

import Link from "next/link";

import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/Landing/Custom/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RegisterSchema } from "@/lib/validators/auth.validator";

import { Register } from "@/actions/register";
import PulseLoader from "react-spinners/PulseLoader";
import AuthForm from "@/components/auth/AuthForm";
import { useToast } from "@/hooks/use-toast";

export default function RegisterPage() {
  type RegisterSchemaType = z.infer<typeof RegisterSchema>;

  const { toast } = useToast();

  const [isPending, startTransition] = useTransition();

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue(e.target.name as keyof RegisterSchemaType, e.target.value);
  };

  // Handle form submission for user registration
  const onRegister = async (data: RegisterSchemaType) => {
    startTransition(() => {
      Register(data)
        .then((res) => {
          res?.error
            ? toast({ title: res.error as string, variant: "destructive" })
            : toast({ title: res.success as string, variant: "success" });
        })
        .then(() => {
          form.reset({ name: "", email: "", password: "" });
        })
        .catch((error) => {
          toast({
            title: error.message || "Something went wrong",
            variant: "destructive",
          });
        });
    });
  };

  return (
    <AuthForm loading={isPending}>
      <Form {...form}>
        <form className="my-8" onSubmit={form.handleSubmit(onRegister)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    className="bg-zinc-900"
                    {...field}
                    onChange={onValueChange}
                    placeholder="John Doe"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-400 text-end" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    className="bg-zinc-900"
                    {...field}
                    onChange={onValueChange}
                    placeholder="john.doe@gmail.com"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-400 text-end" />
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
                    className="bg-zinc-900"
                    {...field}
                    onChange={onValueChange}
                    placeholder="******"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-400 text-end" />
              </FormItem>
            )}
          />

          <button
            className="mt-8 bg-gradient-to-br relative group/btn  from-zinc-900 to-zinc-900 flex justify-center text-center items-center bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] "
            type="submit"
            disabled={isPending}
          >
            {isPending ? <PulseLoader color="#06b4ff" /> : "Sign up →"}
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
      </Form>
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
