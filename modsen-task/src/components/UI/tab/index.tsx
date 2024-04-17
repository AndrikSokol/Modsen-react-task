import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { boolean } from 'yup';

const Tabs = styled.div`
  display: flex;
  gap: 14px;
`;

const Button = styled.button<{ $active: boolean; $size: string }>`
  color: ${(props) =>
    props.$active ? 'var(--colors-white)' : 'var(--colors-black)'};
  background-color: ${(props) =>
    props.$active ? 'var(--colors-primary)' : 'var(--colors-tertialy)'};
  padding: 11px 36px;
  border-radius: 20px;

  ${({ $size, $active }) =>
    $size === 's' &&
    css`
      padding: 4px 10px;
      border-radius: 6px;
      color: ${$active ? 'var(--colors-white)' : 'var(--colors-primary)'};
      background-color: ${$active
        ? 'var(--colors-primary)'
        : 'var(--colors-white)'};
      border: 1px solid var(--colors-primary);
    `}

  ${({ $size }) => $size === 'm' && css``}
  padding: 7px 20px;
  border-radius: 14px;
`;

type TabProps = {
  size: 's' | 'm' | 'l';
  active: boolean;
};
const Tab: FC<TabProps> = ({ size, active }) => {
  return (
    <Tabs>
      <Button $size={size} $active={!active}>
        {size === 's' ? 'Mo' : 'Monthly'}
      </Button>
      <Button $size={size} $active={active}>
        {size === 's' ? 'Yr' : 'Yearly'}
      </Button>
    </Tabs>
  );
};

export default Tab;
