import React from 'react';
import { TodoContainer } from './style';
import { useGetTodos } from '../../queries/todos/todos.query';
import TodoContents from './TodoContents';

export default function TodoCard() {
  const { data: todos, isSuccess } = useGetTodos();

  return (
    <>
      {isSuccess &&
        todos.data.length !== 0 &&
        todos.data.map((todo: any) => (
          <TodoContainer key={todo.id}>
            <TodoContents title={todo.title} content={todo.content} id={todo.id} />
          </TodoContainer>
        ))}
    </>
  );
}
