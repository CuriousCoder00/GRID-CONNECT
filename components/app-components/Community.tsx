"use client";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { TooltipContainer } from "@/components/TooltipContainer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { CreateCommunityForm } from "./CreateCommunityForm";
import { JoinByInvite } from "./JoinByInvite";

import { Plus } from "lucide-react";

export const Community = () => {
  const [join, setJoin] = useState<boolean>(true);

  return (
    <Dialog>
      <TooltipContainer
        content="Create your community"
        pos="right"
        sideOffset={15}
      >
        <DialogTrigger className="cursor-pointer" asChild>
          <Plus />
        </DialogTrigger>
      </TooltipContainer>
      {join ? (
        <DialogContent className="bg-white dark:bg-slate-950">
          <DialogHeader>
            <DialogTitle>Create Your Community</DialogTitle>
            <DialogDescription>
              Create a community and start something new.
            </DialogDescription>
          </DialogHeader>
          <CreateCommunityForm />
          <div className="flex w-full justify-center overflow-hidden items-center gap-4 flex-nowrap">
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
          <Button
            className="w-full"
            onClick={() => setJoin(!join)}
            variant="secondary"
          >
            Join a community
          </Button>
        </DialogContent>
      ) : (
        <DialogContent className="bg-white dark:bg-slate-950">
          <DialogHeader>
            <DialogTitle>Join a community</DialogTitle>
            <DialogDescription>
              Enter the invite code to join a community.
            </DialogDescription>
          </DialogHeader>
          <JoinByInvite />
          <div className="flex w-full justify-center overflow-hidden items-center gap-4 flex-nowrap">
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
          <Button
            className="w-full"
            onClick={() => setJoin(!join)}
            variant="secondary"
          >
            Create a community
          </Button>
        </DialogContent>
      )}
    </Dialog>
  );
};
