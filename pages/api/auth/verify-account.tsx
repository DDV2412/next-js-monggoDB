import type { NextApiRequest, NextApiResponse } from "next";
import password from "../../../validation/password";
import confirmPass from "../../../validation/confirmPass";
import ResponseData from "../../../utils/responseData";
import { decode } from "../../../utils/jwt";
import UserUseCase from "../../../use_cases/userUseCase";
import UserRepo from "../../../repository/userRepo";
import { hashSync } from "bcrypt";

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
  const data = req.body;

  const responseData = new ResponseData();

  const { error } =
    password({
      password: data.password,
    }) && confirmPass({ confirmPassword: data.confirmPassword });

  if (error) {
    responseData.setStatus(false);
    responseData.setMessage(error["details"][0].message);
    responseData.setPayload(null);

    const response = responseData.responseData();

    return res.status(400).json(response);
  }

  if (data.password !== data.confirmPassword) {
    responseData.setStatus(false);
    responseData.setMessage("Password not match");
    responseData.setPayload(null);

    const response = responseData.responseData();

    return res.status(400).json(response);
  }

  const decodeData: any = decode(data.token);

  const passwordHash = hashSync(data.password, 12);

  const result = await userData.userRegister({
    userName: decodeData.userName,
    firstName: decodeData.firstName,
    lastName: decodeData.lastName,
    email: decodeData.email,
    password: passwordHash,
    isEnable: true,
  });

  if (!result) {
    responseData.setStatus(false);
    responseData.setMessage("Email or username not available");
    responseData.setPayload(null);

    const response = responseData.responseData();

    return res.status(400).json(response);
  }

  responseData.setStatus(true);
  responseData.setMessage("Successfully registered account");
  responseData.setPayload(result);

  const response = responseData.responseData();

  res.json(response);
}
