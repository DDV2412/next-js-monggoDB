import joi from "joi";

export default function password(body: {}) {
  return joi
    .object()
    .keys({
      password: joi
        .string()
        .required()
        .min(8)
        .pattern(
          new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$")
        )
        .messages({
          "string.empty": "Password cannot be an empty field",
          "string.pattern.base":
            "Invalid password, alphanumeric and characters",
          "string.min": `Password should have a minimum length of {#limit}`,
          "any.required": `Password is a required field`,
        }),
    })
    .validate(body);
}
