import type { NextApiRequest, NextApiResponse } from "next";
import validation from "../../../validation/register";
import ResponseData from "../../../utils/responseData";
import { mailService } from "../../../utils/nodemailer";
import { encode } from "../../../utils/jwt";

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

  const { error } = validation(data);

  if (error) {
    responseData.setStatus(false);
    responseData.setMessage(error["details"][0].message);
    responseData.setPayload(null);

    const response = responseData.responseData();
    return res.status(400).json(response);
  }

  const token = encode(req.body);

  await mailService({
    to:
      req.body.email + "<" + req.body.firstName + " " + req.body.lastName + ">",
    subject: "Confirm your email address on UK Project",
    text: `Hi Diam,

          Thank you for creating an account with AI Community.
          To activate your account and set up your personal password, please click below.
          
          Note: Email verification link is valid for 24h.
          
          http://localhost:3000/verify-account?token=${token}`,
  });

  responseData.setStatus(true);
  responseData.setMessage("Please check your email inbox for verify account");
  responseData.setPayload(null);

  const response = responseData.responseData();

  res.json(response);
}
