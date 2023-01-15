import { ACCESS_TOKEN } from '../../../constants/token/token.constant';
import { baseInstance } from '../instance';

export const getTodos = async () => {
  const { data: todos } = await baseInstance.get('/todos', {
    headers: {
      Authorization: ACCESS_TOKEN,
    },
  });
  return todos;
};
