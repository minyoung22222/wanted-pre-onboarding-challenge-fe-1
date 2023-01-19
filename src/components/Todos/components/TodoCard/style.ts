import styled from 'styled-components';

export const TodoContainer = styled.article`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 2rem;
  background-color: rgba(185, 131, 255, 0.8);
  border-radius: 2rem;
`;

export const TodoTitleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TodoTitle = styled.h2`
  margin-right: auto;
  font-size: 2.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.whiteColor};
`;

export const TodoContent = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.whiteColor};
  transition: padding-top 0.5s, padding-bottom 0.5s, height 0.5s, transform 0.5s;
`;

export const TodoEditButton = styled.button`
  background: none;
  & img {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
export const TodoDeleteButton = styled.button`
  background: none;
  & img {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const TodoContentsContainer = styled.div`
  padding: 2rem;
  transition: padding-top 0.5s, padding-bottom 0.5s, height 0.5s, transform 0.5s;
`;

export const PutTodoFormContainer = styled.form`
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

export const PutTodoButton = styled.button`
  padding: 1.5rem 1.6rem;
  margin-top: 2rem;
  font-size: 1.8rem;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  max-width: 25rem;
`;
