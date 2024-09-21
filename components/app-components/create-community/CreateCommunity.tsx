import { Button } from "@/components/ui/button";
import { CreateCommunityForm } from "./CreateCommunityForm";
import { Separator } from "@/components/ui/separator";
export const CreateCommunity = () => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="font-bold text-2xl">Create Your Community</h1>
      <p className="font-light text-slate-700 dark:text-slate-400">
        Communities are a place to connect with people who shares your
        interests. Create a community and start something new.
      </p>
      <div className="flex w-full">
        <CreateCommunityForm />
      </div>
      <div className="flex w-full justify-center overflow-hidden items-center gap-4 flex-nowrap my-2">
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
      <Button variant={"link"}>Join a community</Button>
    </div>
  );
};
