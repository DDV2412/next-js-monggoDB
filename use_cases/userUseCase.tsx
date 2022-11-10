import { user as UserType } from "../interfaces/user";
import { encode } from "../utils/jwt";

class UserUseCase {
  UserRepo: any;
  constructor(userRepo: any) {
    this.UserRepo = userRepo;
  }

  createToken = (data: UserType) => {
    const payload = {
      userName: data.userName,
      firstName: data.firstName,
      lastName: data.lastName,
    };

    return {
      user: payload,
      token: encode(payload),
    };
  };
  userLogin = async (user: UserType) => {
    const data = await this.UserRepo.userByUserName(user);

    if (data == null) {
      return null;
    }

    return this.createToken(data);
  };
  userRegister = async (user: UserType) => {
    return await this.UserRepo.userRegister(user);
  };
}

export default UserUseCase;
