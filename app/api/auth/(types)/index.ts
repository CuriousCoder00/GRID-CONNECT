export interface UserTypes {
  name: string;
  email?: string;
  password?: string;
  username?: string;
  imageUrl?: string;
  isVerified?: boolean;
  forgotPasswordToken?: string;
  forgotPasswordTokenExpiry?: Date;
  verifyToken?: string;
  verifyTokenExpiry?: Date;
}