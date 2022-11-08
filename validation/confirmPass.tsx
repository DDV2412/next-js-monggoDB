import joi from "joi";

export default function confirmPass(body: {}) {
  return joi
    .object()
    .keys({
      confirmPassword: joi
        .string()
        .required()
        .min(8)
        .pattern(
          new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$")
        )
        .messages({
          "string.empty": "Confirm password cannot be an empty field",
          "string.pattern.base":
            "Invalid Confirm password, alphanumeric and characters",
          "string.min": `Confirm password should have a minimum length of {#limit}`,
          "any.required": `Confirm password is a required field`,
        }),
    })
    .validate(body);
}
