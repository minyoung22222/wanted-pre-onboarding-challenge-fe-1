import { ACCESS_TOKEN } from '../../../../constants/token/token.constant';
import { TodoProps } from '../../../../types/todo/todo.type';
import { baseInstance } from '../../../../lib/apis/instance';
import { getToken } from '../../../../lib/token';

export const postTodo = async ({ title, content }: TodoProps) => {
  const { data: postTodoData } = await baseInstance.post(
    '/todos',
    {
      title: title,
      content: content,
    },
    {
      headers: {
        Authorization: getToken(ACCESS_TOKEN),
      },
    },
  );
  return postTodoData;
};
