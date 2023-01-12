import React from 'react';
import { useForm } from 'react-hook-form';
import { usePostLogin } from '../../../../queries/auth/auth.query';
import { LoginProps } from '../../../../types/auth/auth.type';
import { ErrorMessage, FormContainer, LoginInput, SubmitButton } from './style';

export default function LoginForm() {
  const { mutate: loginMutate } = usePostLogin();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LoginProps>();
  return (
    <FormContainer onSubmit={handleSubmit((data) => loginMutate(data))}>
      <label htmlFor="email" style={{ display: 'none' }}>
        이메일
      </label>
      <LoginInput
        type="email"
        placeholder="email@email.com"
        id="email"
        aria-invalid={errors.email ? true : false}
        {...register('email', {
          required: '이메일은 필수 입력입니다.',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: '이메일 형식에 맞지 않습니다.',
          },
        })}
      />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      <label htmlFor="password" style={{ display: 'none' }}>
        비밀번호
      </label>
      <LoginInput
        type="password"
        placeholder="password"
        id="password"
        aria-invalid={errors.password ? true : false}
        {...register('password', {
          required: '비밀번호는 필수 입력입니다.',
          minLength: {
            value: 8,
            message: '비밀번호는 8자리 이상 입력해주세요.',
          },
        })}
      />
      {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
      <SubmitButton type="submit" disabled={isSubmitting}>
        로그인
      </SubmitButton>
    </FormContainer>
  );
}
