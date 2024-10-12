"use client";
import { useEffect, useState, useTransition } from "react";
import { createCommunity, getCategories } from "@/actions/community-actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCurrentUser } from "@/hooks/use-current-user";

import { LucideCamera } from "lucide-react";
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
  CommunitySchema,
  CommunitySchemaType,
} from "@/lib/validators/community.validator";
import { Input } from "@/components/Landing/Custom/input";
import PulseLoader from "react-spinners/PulseLoader";

export const CreateCommunityForm = () => {
  const user = useCurrentUser();
  const { toast } = useToast();
  const [options, setOptions] = useState([
    { value: "other", label: "Select Category.." },
  ]);
  const [isPending, startTransition] = useTransition();
  const form = useForm<CommunitySchemaType>({
    resolver: zodResolver(CommunitySchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      imageUrl: "",
    },
  });

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue(e.target.name as keyof CommunitySchemaType, e.target.value);
  };
  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      if (categories) {
        setOptions(
          categories.map((category) => ({
            value: category.name,
            label: category.name,
          }))
        );
      }
    };
    fetchCategories();
  }, []);

  const onFormSubmit = async (data: CommunitySchemaType) => {
    startTransition(() => {
      createCommunity(user.email, data)
        .then((res) => {
          res?.error
            ? toast({ title: res?.error as string, variant: "destructive" })
            : toast({ title: res?.success as string, variant: "success" });
        })
        .then(() => {
          form.reset();
        })
        .catch((error) => {
          toast({ title: error.message, variant: "destructive" });
        });
    });
  };
  return (
    <Form {...form}>
      <form className="my-2" onSubmit={form.handleSubmit(onFormSubmit)}>
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-center">
                <FormLabel
                  htmlFor="pfp"
                  className="rounded-full w-24 h-24 border-dashed outline-dashed cursor-pointer"
                >
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={""} alt="community image" />
                    <AvatarFallback className="flex flex-col gap-2">
                      <LucideCamera className="w-10 h-10" />
                      Upload
                    </AvatarFallback>
                  </Avatar>
                </FormLabel>
                <FormControl className="hidden">
                  <Input
                    {...field}
                    type="file"
                    id="pfp"
                    onChange={onValueChange}
                    className="hidden"
                  />
                </FormControl>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Community Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  onChange={onValueChange}
                  placeholder="Community Name"
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500 text-end" />{" "}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Community Description</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  onChange={onValueChange}
                  placeholder="Community Description"
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500 text-end" />{" "}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Category</FormLabel>
              <FormControl>
                <Select
                  {...field}
                  onValueChange={(value) => form.setValue("category", value)}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder="Select category..."
                      defaultValue={undefined}
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-zinc-950 z-[290]">
                    <SelectGroup>
                      {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage className="text-xs text-red-500 text-end" />{" "}
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button disabled={isPending} type="submit">
            {isPending ? <PulseLoader /> : "Create"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
