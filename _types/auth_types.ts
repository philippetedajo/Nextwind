export interface RegisterForm {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface LoginForm {
  email: string;
  password_min: string;
}

export interface ForgotPasswordForm {
  email: string;
}

export interface ResetPasswordForm {
  password: string;
  confirm_password: string;
}
