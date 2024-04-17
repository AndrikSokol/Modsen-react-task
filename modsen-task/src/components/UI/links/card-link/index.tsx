import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ArrowRight from '@/assets/icons/icon_arrow_right.svg?react';

type CardLinkProps = {
  children: string;
  disabled?: boolean;
  to: string;
};

const ArrowRightIcon = styled(ArrowRight)`
  width: 20px;
  height: 20px;
  path {
    fill: var(--colors-primary);
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 2px;
  color: var(--colors-primary);

  &:hover {
    color: var(--colors-secondary);

    svg {
      path {
        fill: var(--colors-secondary);
      }
    }
  }
`;

const CardLink: FC<CardLinkProps> = ({ children, disabled, to }) => {
  return (
    <StyledLink to={to}>
      {children}
      <ArrowRightIcon />
    </StyledLink>
  );
};

export default CardLink;
