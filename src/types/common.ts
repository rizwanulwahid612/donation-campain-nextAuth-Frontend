export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
  status?: any;
  message?: any;
  success?: any;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IDonation = {
  id?: string;
  title: string;
  category: string;
  image: string;
  price?: string;
  description: string;
};
export type IUser = {
  id: string;
  role: string;
  email: string;
  name: string;
  image: string;
  password: string;
  needsPasswordChange: true | false;
};
