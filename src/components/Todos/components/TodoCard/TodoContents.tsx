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
import { useRecoilState } from 'recoil';
import { setUpdateTodoAtom } from '../../../../stores/todo/setUpdateTodoAtom';

interface TodoContentProps {
  title: string;
  content: string;
  id: string;
}

export default function TodoContents({ title, content, id }: TodoContentProps) {
  const { mutate: DeleteTodosMutate } = useDeleteTodos();
  const [updateTodo, setUpdateTodo] = useRecoilState(setUpdateTodoAtom);
  const [isMore, setIsMore] = useState(false);
  return (
    <>
      {updateTodo ? (
        <PutTodoForm id={id} title={title} content={content} />
      ) : (
        <TodoTitleContainer>
          <input type={'checkbox'} />
          <TodoTitle onClick={() => setIsMore(!isMore)}>{title}</TodoTitle>
          <TodoEditButton type="button" onClick={() => setUpdateTodo(!updateTodo)}>
            <img src={editIcon} alt="editIcon" />
          </TodoEditButton>
          <TodoDeleteButton type="button" onClick={() => DeleteTodosMutate(id)}>
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
