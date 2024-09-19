import { GoogleLogin } from "@/actions/google-login";
import { IconBrandGoogle } from "@tabler/icons-react";
import { BottomGradient } from "./BottomGradient";

const Socials = ({ loading }: { loading: boolean }) => {
  return (
    <div className="flex flex-col">
      <button
        className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full rounded-md h-10 font-medium  bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
        type="submit"
        disabled={loading}
        onClick={GoogleLogin}
      >
        <IconBrandGoogle className="h-4 w-4 text-neutral-300" />
        <span className="text-neutral-300 text-sm">Continue with Google</span>
        <BottomGradient />
      </button>
    </div>
  );
};
export default Socials;
