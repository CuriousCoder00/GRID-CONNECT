import React, { useTransition } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  JoinCommunitySchema,
  JoinCommunitySchemaType,
} from "@/lib/validators/community.validator";
import { Input } from "@/components/Landing/Custom/input";
import PulseLoader from "react-spinners/PulseLoader";
import { Button } from "@/components/ui/button";

export const JoinByInvite = () => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const form = useForm<JoinCommunitySchemaType>({
    resolver: zodResolver(JoinCommunitySchema),
    defaultValues: {
      inviteCode: "",
    },
  });
  const joinCommunity = async (data: JoinCommunitySchemaType) => {
    startTransition(() => {});
  };
  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="inviteCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Invite Code</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  onChange={(e) => form.setValue("inviteCode", e.target.value)}
                  placeholder="Enter invite code..."
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500 text-end" />
            </FormItem>
          )}
        />
        <div className="flex justify-center items-center">
          <Button disabled={isPending} className="btn-primary mt-4 w-full">
            {isPending ? <PulseLoader /> : "Join Community"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
