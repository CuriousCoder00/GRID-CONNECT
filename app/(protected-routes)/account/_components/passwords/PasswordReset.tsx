import { Input } from "@/components/Custom/input";
import { Button } from "@/components/ui/button";

type Props = {};
export const PasswordReset = ({}: Props) => {
  return (
    <div className="flex flex-col items-start w-full bg-transparent">
      Get a magic link to reset your password
      <form className="flex flex-col gap-3 w-full my-2">
        <Input type="email" placeholder="Email" />
        <Button className="bg-white text-black" type="submit">Send Magic Link</Button>
      </form>
    </div>
  );
};
