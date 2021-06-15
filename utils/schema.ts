import * as yup from "yup";

let schemas = {
  firstname: yup
    .string()
    .required("You must enter your firstname")
    .min(3)
    .max(20),
  lastname: yup.string(),
  email: yup.string().email().required("You must provide an email"),
  password: yup
    .string()
    .required("You must provide your password")
    .matches(
      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
      "Should have at least 8 characters, with one capital letter and one number."
    ),
  password_min: yup.string().required("You must provide your password"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
};

const {
  firstname,
  lastname,
  password,
  confirm_password,
  email,
  password_min,
} = schemas;

export const registerSchema = yup.object().shape({
  firstname,
  lastname,
  email,
  password,
  confirm_password,
});

export const loginSchema = yup.object().shape({
  email,
  password_min,
});

export const forgotPasswordSchema = yup.object().shape({
  email,
});

export const resetPasswordSchema = yup.object().shape({
  password,
  confirm_password,
});
