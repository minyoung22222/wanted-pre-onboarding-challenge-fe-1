import React from 'react';
import SignUpForm from './components/SignUpForm';
import { SignUpContainer, Title } from './style';

export default function SignUp() {
  return (
    <SignUpContainer>
      <Title>SIGN UP</Title>
      <SignUpForm />
    </SignUpContainer>
  );
}
