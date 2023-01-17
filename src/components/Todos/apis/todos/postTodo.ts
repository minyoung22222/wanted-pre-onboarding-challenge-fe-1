import { ACCESS_TOKEN } from '../../../../constants/token/token.constant';
import { TodoProps } from '../../../../types/todo/todo.type';
import { baseInstance } from '../../../../lib/apis/instance';

export const postTodo = async ({ title, content }: TodoProps) => {
  const { data: postTodoData } = await baseInstance.post('/todos', {
    headers: {
      Authorization: ACCESS_TOKEN,
    },
  });
  return postTodoData;
};
