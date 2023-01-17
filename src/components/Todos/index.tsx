import React from 'react';
import { useTokenCheck } from '../../hooks/auth/useTokenCheck';
import PostTodoButton from './components/PostTodo';
import TodoCard from './components/TodoCard';
import { TodosContainer, TodosTitle } from './style';

export default function Todos() {
  const { isAuthority } = useTokenCheck();
  return (
    <>
      {isAuthority && (
        <TodosContainer>
          <TodosTitle>Todo List</TodosTitle>
          <PostTodoButton />
          <TodoCard />
        </TodosContainer>
      )}
    </>
  );
}
