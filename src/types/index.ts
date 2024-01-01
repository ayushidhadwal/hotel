export type LoginFormValues = {
  phone: string;
  password: string;
};
export type RegisterFormValues = {
  name: string;
  phone: string;
  email: string;
  password: string;
};
export type OtpFormValues = {

  otp: otp;
};
export type VerifyValues = { phone: string };

export type ChangePasswordValues = {
  password: string;
  confirmPassword: string;
};
