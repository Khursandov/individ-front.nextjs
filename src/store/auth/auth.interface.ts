import { IUSer } from '../../core/types/user.interface';

export interface ILogin {
  phone: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
  user: IUSer;
}
