export interface user {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isEnable: boolean;
  createdAt: Date;
  updatedAt: Date;
  resetPasswordToken: string;
  resetPasswordExpired: Date;
}
