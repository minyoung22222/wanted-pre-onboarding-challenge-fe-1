import React from 'react';
import { useTokenCheck } from '../../hooks/auth/useTokenCheck';
import { TodosContainer } from './style';

export default function Todos() {
  const { isAuthority } = useTokenCheck();
  return <>{isAuthority && <TodosContainer>Todos</TodosContainer>}</>;
}
