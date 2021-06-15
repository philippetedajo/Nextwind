import * as yup from "yup";

let schemas = {
  firstname: yup
    .string()
    .required("You must enter your firstname")
    .min(3)
    .max(20),
  lastname: yup.string(),
  phone: yup
    .string()
    .required("That doesn't look like a phone number")
    .min(6)
    .max(14),
  password: yup
    .string()
    .required("You should provide your password")
    .matches(
      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
      "Should have at least 8 characters, with one capital letter and one number."
    ),
};

const { firstname, lastname, phone, password } = schemas;

export const registerSchema = yup.object().shape({
  firstname,
  lastname,
  phone,
  password,
});

export const loginSchema = yup.object().shape({
  phone,
  password,
});
