import Link from "next/link";
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Password } from "../_components/passwords/Password";
import { PasswordReset } from "../_components/passwords/PasswordReset";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Profile = () => {
  return (
    <div className="flex flex-col w-full h-full max-h-[90vh]">
      <div className="text-xs">
        <Link className="mr-1" href="/account">
          Account
        </Link>
        &gt; Password
      </div>
      <div className="flex flex-col mt-5">
        Change Password
        <Password />
        <div className="flex lg:w-1/2 w-full justify-center overflow-hidden items-center gap-4 flex-nowrap my-6">
          <Separator
            orientation="horizontal"
            className="container  bg-slate-700 dark:bg-slate-400"
          />
          <p className="text-center">OR</p>
          <Separator
            orientation="horizontal"
            className="container  bg-slate-700 dark:bg-slate-400"
          />
        </div>
        <Dialog>
          <DialogTrigger className="cursor-pointer flex flex-start" asChild>
            <Button className="text-sm bg-black text-white dark:bg-white dark:text-black max-lg:w-full lg:w-1/2">
              Reset password with email
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white dark:bg-slate-950">
            <DialogHeader>
              <DialogTitle>Reset password with email</DialogTitle>
              <DialogDescription>
                Reset your password by entering your email address. We will send
                you a link to reset your password.
              </DialogDescription>
            </DialogHeader>
            <PasswordReset />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Profile;
