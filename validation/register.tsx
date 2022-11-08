import joi from "joi";

export default function register(body: {}) {
  return joi
    .object()
    .keys({
      userName: joi.string().required().messages({
        "string.empty": "Username cannot be an empty",
        "any.required": "Username is a required field",
      }),
      firstName: joi.string().required().messages({
        "string.empty": "Firstname cannot be an empty",
        "any.required": "Firstname is a required field",
      }),
      lastName: joi.string().required().messages({
        "string.empty": "Lastname cannot be an empty",
        "any.required": "Lastname is a required field",
      }),
      email: joi.string().email().required().messages({
        "string.empty": "Email cannot be an empty",
        "any.required": "Email is a required field",
        "string.email": `Please insert a valid email address'`,
      }),
    })
    .validate(body);
}
