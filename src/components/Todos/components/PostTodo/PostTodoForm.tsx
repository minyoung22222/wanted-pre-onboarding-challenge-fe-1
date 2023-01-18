import React from 'react';
import { useForm } from 'react-hook-form';
import { TodoProps } from '../../../../types/todo/todo.type';
import { usePostTodos } from '../../queries/todos/todos.query';

import {
  PostTodoButton,
  PostTodoFormContainer,
  TodoContentTextArea,
  TodoTitleInput,
} from './style';

export default function PostTodoForm() {
  const { mutate: PostTodoMutate } = usePostTodos();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TodoProps>({
    defaultValues: {
      title: '',
      content: '',
    },
  });
  return (
    <PostTodoFormContainer
      onSubmit={handleSubmit((data) => {
        PostTodoMutate(data), reset({ title: '', content: '' });
      })}
    >
      <label htmlFor="title" style={{ display: 'none' }}>
        제목
      </label>
      <TodoTitleInput type="text" placeholder="Title" id="title" {...register('title')} />
      <label htmlFor="content" style={{ display: 'none' }}>
        내용
      </label>
      <TodoContentTextArea
        id="content"
        cols={30}
        rows={5}
        placeholder="content"
        {...register('content')}
      ></TodoContentTextArea>
      <PostTodoButton type="submit" disabled={!isValid} style={{ backgroundColor: 'white' }}>
        추가
      </PostTodoButton>
    </PostTodoFormContainer>
  );
}
