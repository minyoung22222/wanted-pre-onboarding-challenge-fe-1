import { ACCESS_TOKEN } from '../../../../constants/token/token.constant';
import { baseInstance } from '../../../../lib/apis/instance';
import { getToken } from '../../../../lib/token';

export const deleteTodo = async (id: string) => {
  const { data } = await baseInstance.delete(`/todos/${id}`, {
    headers: {
      Authorization: getToken(ACCESS_TOKEN),
    },
  });
  return data;
};
