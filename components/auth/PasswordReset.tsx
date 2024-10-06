import { sendResetEmail } from "@/actions/reset-password";
import { Input } from "@/components/Custom/input";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import BeatLoader from "react-spinners/BeatLoader";
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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetPasswordSchema, ResetPasswordSchemaType } from "@/lib/validators/auth.validator";

type Props = {};
export const PasswordReset = ({}: Props) => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue(
      e.target.name as keyof ResetPasswordSchemaType,
      e.target.value
    );
  };
  const sendEmailToResetPassword = async (data: ResetPasswordSchemaType) => {
    startTransition(() => {
      sendResetEmail({ email: data.email })
        .then((res) => {
          res?.error
            ? toast({ title: res.error as string, variant: "destructive" })
            : res?.success
            ? toast({ title: res.success as string, variant: "success" })
            : null;
        })
        .then(() => {
          form.reset();
        })
        .catch(() => {
          toast({
            title: "An error occurred. Please try again later",
            variant: "destructive",
          });
        });
    });
  };
  return (
    <div className="flex flex-col items-start w-full bg-transparent">
      Get a magic link to reset your password
      <Form {...form}>
        <form
          className="flex flex-col gap-3 w-full my-2"
          onSubmit={form.handleSubmit(sendEmailToResetPassword)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-black"
                    placeholder="Email"
                    onChange={handleValueChange}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.email?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          <div className="text-center mx-auto w-full">
            {isPending ? <BeatLoader color="#06b4ff" /> : null}
          </div>
          <Button className="bg-white text-black" type="submit">
            Send Magic Link
          </Button>
        </form>
      </Form>
    </div>
  );
};
