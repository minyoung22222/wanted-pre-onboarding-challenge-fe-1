import React from 'react';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { setUpdateTodoAtom } from '../../../../stores/todo/setUpdateTodoAtom';
import { TodoProps } from '../../../../types/todo/todo.type';
import { useUpdateTodos } from '../../queries/todos/todos.query';
import { PutTodoButton, PutTodoFormContainer, TodoContentTextArea, TodoTitleInput } from './style';

export default function PutTodoForm({ id, title, content }: TodoProps) {
  const { mutate: UpdateTodoMutate } = useUpdateTodos();
  const setUpdateTodo = useSetRecoilState(setUpdateTodoAtom);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TodoProps>({
    defaultValues: {
      title: title,
      content: content,
    },
  });
  return (
    <PutTodoFormContainer
      onSubmit={handleSubmit((data) => {
        UpdateTodoMutate({ id, ...data }), setUpdateTodo(false);
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
      <PutTodoButton type="submit" disabled={!isValid} style={{ backgroundColor: 'white' }}>
        수정
      </PutTodoButton>
    </PutTodoFormContainer>
  );
}
