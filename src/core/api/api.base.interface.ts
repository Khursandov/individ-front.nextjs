export interface IBaseResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface IBaseListResponse<T> {
  items: T[];
  total: number;
}
