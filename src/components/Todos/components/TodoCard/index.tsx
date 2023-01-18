import React, { useState } from 'react';
import edit from '../../../../assets/icons/edit.png';
import deleteIcon from '../../../../assets/icons/bin.png';
import {
  TodoContainer,
  TodoContents,
  TodoContentsContainer,
  TodoDeleteButton,
  TodoEditButton,
  TodoTitle,
  TodoTitleContainer,
} from './style';
import { useGetTodos } from '../../queries/todos/todos.query';

export default function TodoCard() {
  const { data: todos, isSuccess } = useGetTodos();
  const [isMore, setIsMore] = useState(false);
  return (
    <>
      {isSuccess &&
        todos.data.length !== 0 &&
        todos.data.map((todo: any) => (
          <TodoContainer key={todo.id}>
            <TodoTitleContainer>
              <input type={'checkbox'} />
              <TodoTitle onClick={() => setIsMore(!isMore)}>{todo.title}</TodoTitle>
              <TodoEditButton type="button">
                <img src={edit} alt="editIcon" />
              </TodoEditButton>
              <TodoDeleteButton>
                <img src={deleteIcon} alt="deleteIcon" />
              </TodoDeleteButton>
            </TodoTitleContainer>
            {isMore && (
              <TodoContentsContainer>
                <TodoContents>{todo.content}</TodoContents>
              </TodoContentsContainer>
            )}
          </TodoContainer>
        ))}
    </>
  );
}
