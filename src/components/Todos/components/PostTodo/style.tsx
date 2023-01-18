import styled from 'styled-components';

export const CreateTodoButton = styled.button`
  padding: 1rem;
  width: 5rem;
  height: 5rem;
  font-size: 3rem;
  border-radius: 50%;
`;

export const PostTodoFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 2rem;
  background-color: rgba(185, 131, 255, 0.8);
  border-radius: 2rem;
  & button {
    text-align: center;
  }
`;

export const TodoTitleInput = styled.input`
  padding: 1rem 1.6rem;
  font-size: 2.4rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.whiteColor};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.whiteColor};
`;

export const TodoContentTextArea = styled.textarea`
  padding: 1rem 1.6rem;
  font-size: 2rem;
  border: 0;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.whiteColor};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.whiteColor};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grayColor};
  }
  /* &:focus {
    border: none;
  } */
`;

export const PostTodoButton = styled.button`
  padding: 1.5rem 1.6rem;
  margin-top: 2rem;
  font-size: 1.8rem;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  max-width: 25rem;
`;
