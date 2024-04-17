import { FC } from 'react';
import styled, { css } from 'styled-components';
import SubTitle from '../../subTitle';
import Box from '../../box';
import Title from '../../title';
import { Link } from 'react-router-dom';
import Button from '@/components/UI/button';
import CheckmarkIcon from '@/assets/icons/icon_checkmark.svg?react';
import Tab from '../../tab';
type PriceCardProps = {
  variant?: 1 | 2;
  title: string;
  price: number;
  options: string[];
  active: boolean;
};

const StyledCard = styled.div<{ $active: boolean }>`
  background-color: var(--colors-white);
  border-radius: 6px;
  box-shadow: var(--shadow-card-3);

  ${({ $active }) =>
    $active &&
    css`
      background-color: var(--colors-primary);
    `};
`;

const CardWrapper = styled.div`
  padding: 35px 20px;
`;

const Li = styled.li<{ $active: boolean }>`
  font-size: 14px;
  font-weight: 400;

  ${({ $active }) =>
    $active &&
    css`
      color: var(--colors-white);
    `}
`;

export const PriceCard: FC<PriceCardProps> = ({
  active,
  title,
  price,
  options,
}) => {
  return (
    <StyledCard $active={active}>
      <CardWrapper>
        <Box sx={{ paddingBottom: '16px' }}>
          <Title variant="h4">{title}</Title>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box>${price}</Box>
          <Tab size="s" active={true} />
        </Box>
        <Box sx={{ padding: '30px 0' }}>
          <Button color={active ? 'white' : ''}>Choose a plan</Button>
        </Box>
        {options?.map((option) => {
          return (
            <ul
              style={{ display: 'flex', alignItems: 'center', gap: '11px' }}
              key={option}
            >
              <CheckmarkIcon
                fill={active ? 'var(--colors-white)' : 'var(--colors-primary)'}
                width="25px"
                height="25px"
              />
              <Li $active={active}>{option}</Li>
            </ul>
          );
        })}
      </CardWrapper>
    </StyledCard>
  );
};
