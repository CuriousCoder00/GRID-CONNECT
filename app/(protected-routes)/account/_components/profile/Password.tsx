import { useState, useEffect } from "react";
import { Input } from "@/components/Custom/input";
import { Label } from "@/components/Custom/label";
import { Button } from "@/components/ui/button";
import { changePassword } from "@/actions/user-actions";
import { useCurrentUser } from "@/hooks/use-current-user";

type Props = {};
export const Password = ({}: Props) => {
  const user = useCurrentUser();

  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangePassword = async () => {
    if (
      !password.currentPassword ||
      !password.newPassword ||
      !password.confirmNewPassword
    ) {
      setError("Password is required");
      return;
    }
    if (password.newPassword !== password.confirmNewPassword) {
      setError("Passwords do not match");
      return;
    }
    const res: { error?: string } = await changePassword({
      email: user.email,
      password: password,
    });
    if (res.error) {
      setError(res.error);
    } else {
      setSuccess("Password changed successfully");
    }
  };
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="flex flex-col mt-4 gap-3 h-full">
      <div className="flex flex-col gap-3">
        <Label>Current Password</Label>
        <Input
          name="currentPassword"
          placeholder="Current Password"
          type="password"
          required
          onChange={handleValueChange}
        />
      </div>
      <div className="flex flex-col gap-3">
        <Label>New Password</Label>
        <Input
          name="newPassword"
          placeholder="New Password"
          type="password"
          required
          onChange={handleValueChange}
        />
      </div>
      <div className="flex flex-col gap-3">
        <Label>Confirm New Password</Label>
        <Input
          name="confirmNewPassword"
          placeholder="Confirm New Password"
          type="password"
          required
          onChange={handleValueChange}
        />
      </div>
      {error && <div className="text-red-500 text-xs">{error}</div>}
      {success && <div className="text-green-500 text-xs">{success}</div>}
      <div className="flex items-center justify-end">
        <Button
          className="text-sm bg-black text-white dark:bg-white dark:text-black w-1/2"
          onClick={handleChangePassword}
        >
          Save
        </Button>
      </div>
    </div>
  );
};
