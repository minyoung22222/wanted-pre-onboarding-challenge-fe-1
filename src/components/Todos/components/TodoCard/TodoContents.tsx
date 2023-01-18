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

interface TodoContentProps {
  title: string;
  content: string;
}

export default function TodoContents({ title, content }: TodoContentProps) {
  const [isMore, setIsMore] = useState(false);
  return (
    <>
      <TodoTitleContainer>
        <input type={'checkbox'} />
        <TodoTitle onClick={() => setIsMore(!isMore)}>{title}</TodoTitle>
        <TodoEditButton type="button">
          <img src={editIcon} alt="editIcon" />
        </TodoEditButton>
        <TodoDeleteButton>
          <img src={deleteIcon} alt="deleteIcon" />
        </TodoDeleteButton>
      </TodoTitleContainer>
      {isMore && (
        <TodoContentsContainer>
          <TodoContent>{content}</TodoContent>
        </TodoContentsContainer>
      )}
    </>
  );
}
