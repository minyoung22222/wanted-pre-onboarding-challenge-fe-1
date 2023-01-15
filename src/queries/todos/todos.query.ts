import { useQuery } from 'react-query';
import { getTodos } from '../../lib/apis/todos/getTodos';

export const useGetTodos = () => {
  return useQuery('TodoList', getTodos, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error: any) => {
      console.error(error);
    },
  });
};
