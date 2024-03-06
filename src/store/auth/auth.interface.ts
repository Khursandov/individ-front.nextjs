export interface ILogin {
  phone: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
}

export interface IAuthResponse {
  email: string;
  name: string;
  phone: string;
  status: number;
  _id: string;
}

export interface INewPassword {
  password: string;
  password_confirm: string;
}

export interface IRecoveryPassword {
  password: string;
  password_confirm: string;
}

export interface IProfileChangePassword {
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
}
