import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Password } from "./Password";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
type Props = {};
export const Authentication = ({}: Props) => {
  const { isOAuth } = useCurrentUser();
  return (
    <div className="flex flex-col items-start justify-start">
      <span className="text-lg font-bold">Password & Authentication</span>
      {isOAuth ? (
        <p className="text-sm text-gray-500">
          You are using an OAuth provider to login. You cannot change your
          password.
        </p>
      ) : (
        <div className="w-full">
          <span className="text-sm">You can change your password here.</span>
          <Dialog>
            <div className="flex flex-col w-full gap-3 my-3">
              Change your password
              <DialogTrigger asChild>
                <Button
                  className="w-40 rounded-sm text-white hover:text-white bg-green-700 hover:bg-green-800 transition-all duration-200"
                  variant={"outline"}
                >
                  Change Password
                </Button>
              </DialogTrigger>
            </div>
            <DialogContent className="bg-white dark:bg-slate-950 sm:w-full w-[400px] ">
              <div>
                <DialogHeader className="text-xl font-bold my-0">
                  <DialogTitle>Change Your Password</DialogTitle>
                  <DialogDescription className="my-0">
                    Change your password to something more secure.
                  </DialogDescription>
                </DialogHeader>
              </div>
              <Password />
            </DialogContent>
          </Dialog>
        </div>
      )}
      <span className="text-md mt-5">Account Removal</span>
      <span className="text-sm">
        Disabling your account means you can recover your it at any time after
        taking this action.
      </span>
      <div className="flex w-full gap-3 my-3">
        <Button
          className="w-40 rounded-sm transition-all duration-200 text-white hover:text-white bg-red-700 hover:bg-red-800"
          variant={"outline"}
        >
          Disable Account
        </Button>
        <Button
          className="w-40 rounded-sm hover:text-white transition-all duration-200 border-red-800 hover:bg-red-600"
          variant={"outline"}
        >
          Delete Account
        </Button>
      </div>
    </div>
  );
};
