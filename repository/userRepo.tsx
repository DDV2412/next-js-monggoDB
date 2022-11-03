import { user as UserType } from "../interfaces/user";
import UserSchema from "../models/user";

class UserRepo {
  User: typeof UserSchema;
  constructor() {
    this.User = UserSchema;
  }

  userByEmail = async (user: UserType) => {
    try {
      const data = await this.User.findOne({ email: user["email"] });

      return data;
    } catch (error) {
      return null;
    }
  };

  userByUserName = async (user: UserType) => {
    try {
      const data = await this.User.findOne({ userName: user["userName"] });

      return data;
    } catch (error) {
      return null;
    }
  };

  userRegister = async (user: UserType) => {
    try {
      return await this.User.create(user);
    } catch (error) {
      return null;
    }
  };
}

export default UserRepo;
