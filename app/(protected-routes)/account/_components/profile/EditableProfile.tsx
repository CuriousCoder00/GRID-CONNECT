import { useTransition } from "react";

import { Input } from "@/components/Custom/input";
import { Button } from "@/components/ui/button";
import { updateUser } from "@/actions/user-actions";
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
  ProfileSchema,
  ProfileSchemaType,
} from "@/lib/validators/profile.validator";
import PulseLoader from "react-spinners/PulseLoader";

type Props = {
  name: string;
  username: string;
  email: string;
  isOAuth: boolean;
};

export const EditableProfile = ({ name, username, email, isOAuth }: Props) => {
  const { toast } = useToast();

  const [isPending, startTransition] = useTransition();

  const form = useForm<ProfileSchemaType>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: name,
      username: username,
      email: email,
    },
  });

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue(e.target.name as keyof ProfileSchemaType, e.target.value);
  };

  const handleFormSubmit = async (data: ProfileSchemaType) => {
    startTransition(() => {
      updateUser(data).then((res) => {
        res?.error
          ? toast({ title: res.error as string, variant: "destructive" })
          : toast({ title: res.success as string, variant: "success" });
      });
    });
  };
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-5 w-full"
        onSubmit={form.handleSubmit(handleFormSubmit)}
      >
        {!isOAuth && (
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    onChange={handleValueChange}
                    value={form.watch("name")}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500 text-end" />{" "}
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  onChange={handleValueChange}
                  value={form.watch("username")}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500 text-end" />{" "}
            </FormItem>
          )}
        />
        {!isOAuth && (
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    onChange={handleValueChange}
                    value={form.watch("email")}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500 text-end" />{" "}
              </FormItem>
            )}
          />
        )}

        <div className="flex items-center justify-end">
          <Button
            type="submit"
            disabled={isPending}
            className="text-sm bg-black text-white dark:bg-white dark:text-black w-1/2"
          >
            {
              isPending ? <PulseLoader/> : 'Save'
            }
          </Button>
        </div>
      </form>
    </Form>
  );
};
