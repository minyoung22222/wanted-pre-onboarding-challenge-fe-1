import { ACCESS_TOKEN } from '../../../../constants/token/token.constant';
import { baseInstance } from '../../../../lib/apis/instance';
import { getToken } from '../../../../lib/token';
import { TodoProps } from '../../../../types/todo/todo.type';

export const updateTodo = async ({ id, title, content }: TodoProps) => {
  if (!id) {
    throw new Error('No todo id');
  }
  const { data: updateTodoData } = await baseInstance.put(
    `/todos/${id}`,
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
  return updateTodoData;
};
