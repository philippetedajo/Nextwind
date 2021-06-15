export interface RegisterFormOtp {
  firstname: string;
  lastname: string;
  phone: string;
  password: string;
}

export interface LoginFormOtp {
  phone: string;
  password: string;
}

export interface ForgotPasswordFormOtp {
  phone: string;
}

export interface ResetPasswordFormOtp {
  password: string;
  confirm_password: string;
}
