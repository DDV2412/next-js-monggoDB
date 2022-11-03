import type { NextApiRequest, NextApiResponse } from "next";
import { user } from "../../interfaces/user";
import UserUseCase from "../../use_cases/userUseCase";
import UserRepo from "../../repository/userRepo";

const userData = new UserUseCase(new UserRepo());

type Data<user> = {
  userName: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data<user>>
) {
  const data: any = await userData.userByUserName(req.body);

  res.json(data);
}
