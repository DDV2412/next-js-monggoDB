import { user as UserType } from "../interfaces/user";
import UserSchema from "../models/user";
import connection from "../database/connection";

connection();

class UserRepo {
  User: typeof UserSchema;
  constructor() {
    this.User = UserSchema;
  }

  userByEmail = async (user: UserType) => {
    try {
      return await this.User.findOne({ email: user["email"] });
    } catch (error) {
      return null;
    }
  };

  userByUserName = async (user: UserType) => {
    try {
      return await this.User.findOne({ userName: user["userName"] });
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
