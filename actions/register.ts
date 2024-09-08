import { RegisterActionTypes } from "@/types";
import axios from "axios";

export const Register = async ({
  userData,
  setError,
  setSuccessMessage,
  setLoading,
}: RegisterActionTypes) => {
  // Reset error and success message state
  setError("");
  setSuccessMessage("");
  // Set loading to true during API call
  setLoading(true);
  // Make API call to the backend to register the user
  await axios
    .post("/api/auth/register", userData)
    .then((res) => {
      // Set success message on successful registration
      setSuccessMessage("Please check your mail for verification.");
      // Capture any error returned by the API
      setError(res.data.error);
    })
    .catch((err) => {
      // Set error message if registration fails
      setError(err.response.data.error);
    });
  // Reset loading state after the API call
  setLoading(false);
};
