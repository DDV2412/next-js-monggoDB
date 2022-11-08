import jwt from "jsonwebtoken";

export const encode = (payload: {}) => {
  return jwt.sign(payload, String(process.env.JWT_SECRET), {
    expiresIn: "15m",
  });
};

export const decode = (token: any) => {
  return jwt.verify(token, String(process.env.JWT_SECRET));
};
