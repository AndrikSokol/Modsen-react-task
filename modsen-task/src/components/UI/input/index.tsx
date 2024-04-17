import { ChangeEvent, FC } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import styled, { css } from 'styled-components';

interface IFormInputs {
  email: string;
  name: string;
  theme: string;
  message: string;
}

type InputProps = {
  placeholder: string;
  label: Path<IFormInputs>;
  variant: 'fill' | 'outlined' | 'underlined';
  error: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: any;
  register: UseFormRegister<IFormInputs>;
};

const StyledInput = styled.input<{ $variant: string; $error: boolean }>`
  background-color: var(--colors-white);
  border-radius: 6px;
  width: 100%;
  transition: all 0.2s ease-in;
  ${({ $variant }) =>
    $variant == 'fill' &&
    css`
      background-color: rgba(201, 220, 236, 1);
      color: var(--colors-grey);
      padding: 15px 25px;
      &:focus {
        background-color: rgba(236, 239, 242, 1);
      }

      &:hover {
        background-color: rgba(236, 239, 242, 1);
      }

      &:disabled {
        background-color: rgba(236, 239, 242, 1);
      }
    `}

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

    ${({ $variant }) =>
    $variant == 'underlined' &&
    css`
      border-bottom: 1px solid var(--colors-grey);
      padding: 5.5px 0;
      border-radius: 0px;

      &:hover,
      &:focus {
        border-color: var(--colors-primary);
      }

      &:disabled {
        border-color: rgba(180, 182, 189, 1);
      }
    `}

    ${({ $variant, $error }) =>
    $variant === 'fill' &&
    $error &&
    css`
      color: var(--colors-error);
      background-color: rgba(246, 226, 226, 1);
    `}

    ${({ $variant, $error }) =>
    ($variant === 'outlined' || $variant === 'underlined') &&
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
`;

const InputWrapper = styled.div`
  display: flex;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  line-height: 24px;
  color: var(--colors-grey);
`;

const Input: FC<InputProps> = ({
  placeholder,
  label,
  variant,
  error,
  register,
}) => {
  return (
    <InputWrapper>
      {variant === 'underlined' && (
        <Label>{label.charAt(0).toUpperCase() + label.slice(1)}</Label>
      )}
      <StyledInput
        $variant={variant}
        $error={error}
        placeholder={placeholder}
        {...register(label)}
      />
    </InputWrapper>
  );
};

export default Input;

// Input.PropTypes = {
//   variant: PropTypes.oneOf(['fill', 'outlined']), // Fix PropTypes syntax
//   error: PropTypes.bool, // Change to PropTypes.bool
// };
