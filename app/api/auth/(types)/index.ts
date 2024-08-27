export interface UserTypes {
  // id
  //userId

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

  //createdAt
  //updatedAt
}

// export interface CommunityTypes {
//     // id
//     //communityId

//     name: string;
//     description: string;
//     imageUrl: string;
//     creatorId: string;
//     members: string[];
//     posts: string[];

//     //createdAt
//     //updatedAt
// }
