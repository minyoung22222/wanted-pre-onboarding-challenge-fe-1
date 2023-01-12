import React from 'react';
import { useForm } from 'react-hook-form';
import { usePostSignUp } from '../../../../queries/auth/auth.query';
import { SignUpProps } from '../../../../types/auth/auth.type';
import { ErrorMessage, FormContainer, SignUpInput, SubmitButton } from './style';

export default function SignUpForm() {
  const { mutate: SignUpMutate } = usePostSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpProps>();
  return (
    <FormContainer onSubmit={handleSubmit((data) => SignUpMutate(data))}>
      <label htmlFor="email" style={{ display: 'none' }}>
        이메일
      </label>
      <SignUpInput
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
      <SignUpInput
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
      <SubmitButton type="submit" disabled={!isValid}>
        회원가입
      </SubmitButton>
    </FormContainer>
  );
}
