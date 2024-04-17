import React from 'react';
import styled from 'styled-components';
import Title from '../UI/title';
import Box from '../UI/box';
import SubTitle from '../UI/subTitle';
import Button from '../UI/button';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 540px;
  margin: 0 auto;
`;

const Section = styled.div`
  padding: 100px 0;
  background-color: var(--colors-light);
`;

const Contacts = () => {
  const navigate = useNavigate();
  return (
    <Section>
      <Wrapper>
        <Title variant="h3">Do you need help?</Title>
        <Box sx={{ padding: '30px 0', textAlign: 'center' }}>
          <SubTitle size="m">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi.
          </SubTitle>
        </Box>
        <Button onClick={() => navigate('/contacts')}>Contact Us</Button>
      </Wrapper>
    </Section>
  );
};

export default Contacts;
