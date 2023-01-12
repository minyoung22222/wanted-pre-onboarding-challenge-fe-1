import { LoginProps } from '../../../types/auth/auth.type';
import { baseInstance } from '../instance';

export const postLogin = async ({ email, password }: LoginProps) => {
  const { data } = await baseInstance.post('/users/login', {
    email,
    password,
  });
  return data;
};
