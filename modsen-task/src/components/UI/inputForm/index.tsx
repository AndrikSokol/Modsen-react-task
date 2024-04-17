import { FC } from 'react';
import Input from '../input';
import styled, { css } from 'styled-components';
import Button from '../button';
import Textarea from '../textarea';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type InputFormProps = {
  variant: 1 | 2 | 3;
  onSubmit: SubmitHandler<IFormInputs>;
};

const FormWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
const Form = styled.form``;

const WrapperButton = styled.div<{ $variant: number }>`
  margin-left: auto;

  @media (max-width: 767px) {
    margin: 0 0;
  }

  ${({ $variant }) =>
    $variant === 1 &&
    css`
      padding-top: 86px;
    `}
`;

interface IFormInputs {
  email: string;
  name: string;
  theme: string;
  message: string;
}

const formSchema = yup.object({
  email: yup.string().email().required(),
  name: yup.string().required(),
  theme: yup.string().required(),
  message: yup.string().required(),
});

const InputForm: FC<InputFormProps> = ({ variant, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(formSchema),
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper>
        {variant === 1 && (
          <>
            <Input
              label="email"
              variant="underlined"
              placeholder="Your email"
              error={errors.email ? true : false}
              register={register}
            />
            <Input
              label="name"
              variant="underlined"
              placeholder="Your name"
              error={errors.name ? true : false}
              register={register}
            />
          </>
        )}
        {variant !== 1 && (
          <InputWrapper>
            <Input
              label="email"
              variant={variant === 3 ? 'outlined' : 'underlined'}
              placeholder="Your email"
              error={errors.email ? true : false}
              register={register}
            />
            <Input
              label="name"
              variant={variant === 3 ? 'outlined' : 'underlined'}
              placeholder="Your name"
              error={errors.name ? true : false}
              register={register}
            />
          </InputWrapper>
        )}
        <Input
          label="theme"
          variant={variant === 3 ? 'outlined' : 'underlined'}
          placeholder="Theme"
          error={errors.theme ? true : false}
          register={register}
        />
        {variant == 3 ? (
          <Textarea
            label="message"
            placeholder="message"
            variant="outlined"
            error={errors.message ? true : false}
            register={register}
          />
        ) : (
          <Input
            label="message"
            variant="underlined"
            placeholder="message"
            error={errors.theme ? true : false}
            register={register}
          />
        )}

        <WrapperButton $variant={variant}>
          <Button type="submit">Send</Button>
        </WrapperButton>
      </FormWrapper>
    </Form>
  );
};

export default InputForm;
