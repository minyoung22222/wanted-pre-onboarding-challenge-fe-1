import React from 'react';
import LoginForm from './components/LoginForm';
import { LoginContainer, Title } from './style';

export default function Login() {
  return (
    <LoginContainer>
      <Title>LOGIN</Title>
      <LoginForm />
    </LoginContainer>
  );
}
