import axios from "axios";

export const verifyEmail = async ({
  token,
  setError,
  setSuccess,
  setLoading,
  setVerified,
}: {
  setError: (error: string) => void;
  setSuccess: (success: string) => void;
  setLoading: (loading: boolean) => void;
  setVerified: (loading: boolean) => void;
  token: string;
}) => {

  setLoading(true);
  const res = await axios.post("/api/auth/verify-email", { token });
  if (res.data?.error) {
    setError(res.data.error);
  } else {
    setSuccess("Email verified!");
    setVerified(true);
    setLoading(false);
  }
  setLoading(false);
};
