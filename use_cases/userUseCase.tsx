import { user as UserType } from "../interfaces/user";

class UserUseCase {
  UserRepo: any;
  constructor(userRepo: any) {
    this.UserRepo = userRepo;
  }

  userByEmail = async (user: UserType) => {
    return this.UserRepo.userByEmail(user);
  };
  userByUserName = async (user: UserType) => {
    return this.UserRepo.userByUserName(user);
  };
  userRegister = async (user: UserType) => {
    return this.UserRepo.userRegister(user);
  };
}

export default UserUseCase;
