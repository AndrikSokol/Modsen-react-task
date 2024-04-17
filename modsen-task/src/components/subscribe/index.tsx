import styled from 'styled-components';
import Container from '../UI/container';
import Title from '../UI/title';
import SubTitle from '../UI/subTitle';
import Input from '../UI/input';
import Button from '../UI/button';
import { StylesFeedBack } from './styled';
import { useEffect, useState } from 'react';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 80px 0;
  gap: 125px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 24px;
`;

const WrapperInput = styled.div`
  display: flex;
  align-items: center;
`;

type InputForm = {
  email: string;
};

const FormSchema = yup.object({
  email: yup.string().email().required(),
});

const Form = styled.form``;

const Subscribe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputForm>({ resolver: yupResolver(FormSchema) });

  const onSubmit = () => {};
  return (
    <StylesFeedBack>
      <Container>
        <Grid>
          <Wrapper>
            <Title color="white" variant="h3">
              Subscribe to our newsletter
            </Title>
            <SubTitle size="lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </SubTitle>
          </Wrapper>
          <WrapperInput>
            <Form onSubmit={handleSubmit(onSubmit)}>
              {/* <Input
                label="email"
                register={register}
                variant="fill"
                placeholder="set email"
                error={errors.email ? true : false}
              /> */}
              <Button type="submit" color="white">
                Send
              </Button>
            </Form>
          </WrapperInput>
        </Grid>
      </Container>
    </StylesFeedBack>
  );
};

export default Subscribe;
