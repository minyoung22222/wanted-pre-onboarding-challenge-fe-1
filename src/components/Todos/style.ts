import styled from 'styled-components';

export const TodosContainer = styled.section`
  margin: 10rem 3rem;
  padding: 3rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 2rem;
`;

export const TodosTitle = styled.h1`
  font-size: 5rem;
`;
