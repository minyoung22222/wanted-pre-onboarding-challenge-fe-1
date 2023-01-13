import React from 'react';
import { Navigate } from 'react-router-dom';
import { useTokenCheck } from '../../hooks/auth/useTokenCheck';
import { HomeContainer, Title } from './style';

export default function Home() {
  const { isAuthority } = useTokenCheck();
  return (
    <>
      {isAuthority ? (
        <Navigate to="/todos" />
      ) : (
        <HomeContainer>
          <Title to="/auth">login</Title>
          <Title to="/signup">signup</Title>
        </HomeContainer>
      )}
    </>
  );
}
