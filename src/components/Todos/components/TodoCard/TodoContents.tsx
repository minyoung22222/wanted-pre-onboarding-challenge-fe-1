import React, { useState } from 'react';
import {
  TodoContent,
  TodoContentsContainer,
  TodoDeleteButton,
  TodoEditButton,
  TodoTitle,
  TodoTitleContainer,
} from './style';
import editIcon from '../../../../assets/icons/edit.png';
import deleteIcon from '../../../../assets/icons/bin.png';
import { useDeleteTodos } from '../../queries/todos/todos.query';
import PutTodoForm from './PutTodoForm';
import { TodoProps } from '../../../../types/todo/todo.type';

export default function TodoContents({ title, content, id }: TodoProps) {
  const { mutate: DeleteTodosMutate } = useDeleteTodos();
  const [isMore, setIsMore] = useState(false);
  const [isUpdateTodo, setIsUpdateTodo] = useState(false);
  return (
    <>
      {isUpdateTodo ? (
        <PutTodoForm
          id={id}
          title={title}
          content={content}
          setIsUpdateTodo={(isUpdateTodo: boolean) => setIsUpdateTodo(isUpdateTodo)}
        />
      ) : (
        <TodoTitleContainer>
          <input type={'checkbox'} />
          <TodoTitle onClick={() => setIsMore(!isMore)}>{title}</TodoTitle>
          <TodoEditButton type="button" onClick={() => setIsUpdateTodo(true)}>
            <img src={editIcon} alt="editIcon" />
          </TodoEditButton>
          <TodoDeleteButton type="button" onClick={() => DeleteTodosMutate(id as string)}>
            <img src={deleteIcon} alt="deleteIcon" />
          </TodoDeleteButton>
        </TodoTitleContainer>
      )}
      {isMore && (
        <TodoContentsContainer>
          <TodoContent>{content}</TodoContent>
        </TodoContentsContainer>
      )}
    </>
  );
}
