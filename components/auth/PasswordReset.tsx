import { sendResetEmail } from "@/actions/reset-password";
import { Input } from "@/components/Custom/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Alert from "../Custom/Alert";
import BeatLoader from "react-spinners/BeatLoader";

type Props = {};
export const PasswordReset = ({}: Props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const sendEmailToResetPassword = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const res = await sendResetEmail({ email });
    setLoading(false);
    if (res?.error) setError(res.error);
    if (res?.success) setSuccess(res.success);
  };
  return (
    <div className="flex flex-col items-start w-full bg-transparent">
      Get a magic link to reset your password
      <form
        className="flex flex-col gap-3 w-full my-2"
        onSubmit={sendEmailToResetPassword}
      >
        <Input
          className="bg-black"
          type="email"
          placeholder="Email"
          onChange={handleValueChange}
        />
        <div className="text-center mx-auto w-full">
          {loading ? (
            <BeatLoader color="#06b4ff" />
          ) : error ? (
            <Alert type="error" message={error} />
          ) : success ? (
            <Alert type="success" message={success} />
          ) : null}
        </div>
        <Button className="bg-white text-black" type="submit">
          Send Magic Link
        </Button>
      </form>
    </div>
  );
};
