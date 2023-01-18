import React, { useState } from 'react';
import PostTodoForm from './PostTodoForm';
import { CreateTodoButton } from './style';

export default function PostTodoButton() {
  const [isClicked, setIsClicked] = useState(false);
  console.log(isClicked);
  return (
    <>
      <CreateTodoButton onClick={() => setIsClicked(!isClicked)}>+</CreateTodoButton>
      {isClicked && <PostTodoForm />}
    </>
  );
}
