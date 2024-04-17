import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Title from '../title';
import IconDown from '@/assets/icons/icon_down_up.svg?react';
import IconUp from '@/assets/icons/icon_chevron_up.svg?react';

const StyledDropDown = styled.div<{ $active: boolean; $color: string }>`
  border-bottom: 1px solid var(--colors-black);

  ${({ $active }) =>
    $active &&
    css`
      border-top: 0px;
    `}

  ${({ $color }) =>
    $color === 'dark' &&
    css`
      border-top: 0px;
      border-color: var(--colors-helper-blue-2);
    `}
`;
const DropDownWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
  cursor: pointer;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;
`;

type DropDownProps = {
  title: string;
  links?: { to: string; title: string }[];
  color?: 'white' | 'dark';
};
const DropDown: FC<DropDownProps> = ({ title, links, color = 'white' }) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <li>
      <StyledDropDown $active={active} $color={color}>
        <DropDownWrapper onClick={() => setActive((prev) => !prev)}>
          <Title variant="h6"> {title}</Title>
          {active ? <IconUp /> : <IconDown />}
        </DropDownWrapper>
        {active && (
          <LinksWrapper>
            {links.map((link, index) => (
              <Link key={index} to={link.to}>
                {link.title}
              </Link>
            ))}
          </LinksWrapper>
        )}
      </StyledDropDown>
    </li>
  );
};

export default DropDown;
