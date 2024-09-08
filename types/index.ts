export interface UserTypes {
  name: string | null;
  email: string | null;
  password: string | null;
  username: string | null;
  imageUrl: string | null;
  verifyToken: string | null;
  forgotPasswordToken: string | null;
}

export interface RegisterActionTypes {
  userData: { name: string; email: string; password: string };
  setError: (error: string) => void;
  setSuccessMessage: (message: string) => void;
  setLoading: (loading: boolean) => void;
}

