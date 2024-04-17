import styled from 'styled-components';
import PlayIcon from '@/assets/icons/play.svg?react';

export const StyledHeader = styled.header`
  background-color: var(--colors-light);

  @media (max-width: 991px) {
    background-color: var(--colors-white);
  }
`;

export const Wrapper = styled.div<{ $gap?: string }>`
  padding: 40px 0px;
  display: flex;
  justify-content: space-between;
  gap: ${(props) => props.$gap || '0px'};
  align-items: center;

  @media (max-width: 991px) {
    padding: 20px 0;
  }
`;

export const Ul = styled.ul<{ $gap?: string }>`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => props.$gap || '0px'};
  align-items: center;

  @media (max-width: 991px) {
    display: none;
  }
`;

type StyledPlayIconProps = {
  height?: string;
  color?: string;
};

export const StyledPlayIcon = styled(PlayIcon)<StyledPlayIconProps>`
  height: ${({ height }) => height || '20px'};
  width: auto;
  path {
    fill: ${({ color }) => color || 'white'};
  }
`;
