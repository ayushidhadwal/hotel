export type LoginPayload = {
  phone: string;
  password: string;
};

export type RegisterPayload = {
  phone: string;
  password: string;
  name: string;
  email: string;
};
export type OtpPayload = {
  phone: string;
  otp: string;
  userId: number;
  verifyFor: string;
}

export type AuthSliceState = {
  token: string | null;
  userId: number | null;
  language: 'en' | 'ar';
};
export type updatePasswordPayload = {
  password: string | null;
  confirmPassword: string | null;
}
