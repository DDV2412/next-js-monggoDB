import type { NextApiRequest, NextApiResponse } from "next";
import UserUseCase from "../../../use_cases/userUseCase";
import UserRepo from "../../../repository/userRepo";
import ResponseData from "../../../utils/responseData";

const userData = new UserUseCase(new UserRepo());

type Data = {
  status: boolean;
  message: string;
  payload: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const responseData = new ResponseData();

  const data: any = await userData.userByUserName(req.body);

  if (!data) {
    responseData.setStatus(false);
    responseData.setMessage("Username or password does not match");
    responseData.setPayload(null);

    const response = responseData.responseData();

    return res.status(400).json(response);
  }

  responseData.setStatus(true);
  responseData.setMessage("Successfully login in your account");
  responseData.setPayload(data);

  const response = responseData.responseData();

  res.json(response);
}
