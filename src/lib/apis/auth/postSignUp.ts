import { SignUpProps } from '../../../types/auth/auth.type';
import { baseInstance } from '../instance';

export const postSignUp = async ({ email, password }: SignUpProps) => {
  const { data } = await baseInstance.post('/users/create', {
    email,
    password,
  });
  return data;
};
