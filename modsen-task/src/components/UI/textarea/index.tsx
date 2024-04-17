import React, { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import styled, { css } from 'styled-components';

interface IFormInputs {
  email: string;
  name: string;
  theme: string;
  message: string;
}

type TextareaProps = {
  variant: 'outlined' | 'filled';
  placeholder: string;
  error: boolean;
  register: UseFormRegister<IFormInputs>;
  label: any;
};

const StyledTextarea = styled.textarea<{ $variant: string; $error: boolean }>`
  background-color: var(--colors-white);
  border-radius: 6px;
  min-height: 140px;
  ${({ $variant }) =>
    $variant == 'outlined' &&
    css`
      border: 1px solid var(--colors-grey);
      padding: 15px 25px;

      &:hover,
      &:focus {
        border-color: var(--colors-primary);
      }

      &:disabled {
        border-color: rgba(180, 182, 189, 1);
      }
    `}

  &:hover {
    ::placeholder {
      color: var(--colors-grey);
    }
  }

  &:focus {
    ::placeholder {
      color: var(--colors-black);
    }
  }

  &:disabled {
    ::placeholder {
      color: rgba(180, 182, 189, 1);
    }
  }

  ${({ $variant, $error }) =>
    $variant == 'fill' &&
    $error &&
    css`
      color: var(--colors-error)

      background-color: rgba(246, 226, 226, 1)
    `}

  ${({ $variant, $error }) =>
    $variant == 'outlined' &&
    $error &&
    css`
      color: var(--colors-error);
      border-color: var(--colors-error);

      &:focus,
      :active {
        color: var(--colors-error);
        border-color: var(--colors-error);
      }
    `}
`;
const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  line-height: 24px;
  color: var(--colors-grey);
  padding-bottom: 14px;
`;

const Textarea: FC<TextareaProps> = ({
  variant,
  label,
  placeholder,
  error = false,
  register,
}) => {
  return (
    <>
      {variant == undefined && <Label>{label}</Label>}
      <StyledTextarea
        placeholder={placeholder}
        $variant={variant}
        $error={error}
        {...register(label)}
      />
    </>
  );
};

export default Textarea;
