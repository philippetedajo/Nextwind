import * as yup from "yup";

let schemas = {
  firstname: yup
    .string()
    .required("You must enter your firstname")
    .min(3)
    .max(20),
  lastname: yup.string(),
  phone: yup
    .number()
    .required("That doesn't look like a phone number")
    .min(6)
    .max(12),
  password: yup
    .string()
    .required()
    .matches(
      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
      "Your password should have at least 8 characters, one capital letter and one number."
    ),
};

const { firstname, lastname, phone, password } = schemas;

export const registerSchema = yup.object().shape({
  firstname,
  lastname,
  phone,
  password,
});
