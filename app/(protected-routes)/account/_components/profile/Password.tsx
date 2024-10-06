import { useState, useTransition } from "react";
import { Input } from "@/components/Custom/input";
import { Button } from "@/components/ui/button";
import { changePassword } from "@/actions/user-actions";
import { useCurrentUser } from "@/hooks/use-current-user";
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
  ChangePasswordSchema,
  ChangePasswordSchemaType,
} from "@/lib/validators/profile.validator";
import { Eye, EyeOffIcon } from "lucide-react";
import PulseLoader from "react-spinners/PulseLoader";

export const Password = () => {
  const user = useCurrentUser();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

  const { register, watch } = useForm();

  const form = useForm<ChangePasswordSchemaType>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue(
      e.target.name as keyof ChangePasswordSchemaType,
      e.target.value
    );
  };

  const handleChangePassword = async (data: ChangePasswordSchemaType) => {
    startTransition(() => {
      changePassword(user?.email, data)
        .then((res) => {
          if (res.mismatch) {
            form.setError("confirmNewPassword", {
              message: "Password do not match",
            });
            return;
          }
          if (res.error) toast({ title: res.error, variant: "destructive" });
          if (res.success) toast({ title: res.success, variant: "success" });
        })
        .catch((err) => {
          toast({
            title: "Something went wrong",
            variant: "destructive",
          });
        });
    });
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col mt-4 gap-3 h-full"
        onSubmit={form.handleSubmit(handleChangePassword)}
      >
        <FormField
          control={form.control}
          name="currentPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  onChange={handleValueChange}
                  placeholder="******"
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500 text-end" />{" "}
            </FormItem>
          )}
        />
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
                  placeholder="******"
                  disabled={isPending}
                  {...register("newPassword", { required: true })}
                  onChange={handleValueChange}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500 text-end" />{" "}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmNewPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Repeat New Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    placeholder="******"
                    disabled={isPending}
                    {...register("confirmNewPassword", {
                      required: true,
                      validate: (val: string) => {
                        return val !== watch("newPassword")
                          ? "Passwords do not match"
                          : true;
                      },
                    })}
                    onChange={handleValueChange}
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
        <div className="flex items-center justify-end">
          <Button
            type="submit"
            disabled={isPending}
            className="text-sm bg-black text-white dark:bg-white dark:text-black w-1/2"
          >
            {isPending ? <PulseLoader /> : "Save"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
