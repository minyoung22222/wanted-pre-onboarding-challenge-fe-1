import { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getTodos } from '../../apis/todos/getTodos';
import { postTodo } from '../../apis/todos/postTodo';

export const useGetTodos = () => {
  return useQuery(['TodoList'], getTodos, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error: any) => {
      console.error(error);
    },
  });
};

export const usePostTodos = () => {
  const queryClient = useQueryClient();
  return useMutation(postTodo, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries('TodoList');
    },
    onError: (error: any) => {
      console.error(error);
    },
  });
};
