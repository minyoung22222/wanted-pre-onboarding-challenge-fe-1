import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SignUpInput = styled.input`
  padding: 1rem 1.6rem;
  margin: 3rem 3rem 0;
  font-size: 2.4rem;
  border: 0.2rem solid
    ${(props) =>
      props['aria-invalid']
        ? ({ theme }) => theme.colors.errorColor
        : ({ theme }) => theme.colors.subColor};
  background-color: ${({ theme }) => theme.colors.blackColor};
  color: ${({ theme }) => theme.colors.subColor};
`;

export const SubmitButton = styled.button`
  padding: 1.5rem 1.6rem;
  margin: 3rem;
  font-size: 2.4rem;
  background-color: ${({ theme }) => theme.colors.mainColor};
  cursor: pointer;
  border-radius: 2rem;
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.errorColor};
  font-size: 2rem;
  margin: 2rem 3rem;
`;
