export type UserTypes = {
  name: string ;
  email: string | null;
  password: string | null;
  username: string | null;
  imageUrl: string | null;
  verifyToken: string | null;
}

export type RegisterActionTypes = {
  userData: { name: string; email: string; password: string };
  setError: (error: string) => void;
  setSuccessMessage: (message: string) => void;
  setLoading: (loading: boolean) => void;
}

