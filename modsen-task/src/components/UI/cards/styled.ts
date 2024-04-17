import styled, { css } from 'styled-components';

export const StyledCard = styled.div`
  background-color: var(--colors-white);
  box-shadow: var(--shadow-card-2);
`;

export const CardWrapper = styled.div<{ $variant: number }>`
  ${(props) =>
    props.$variant === 1 &&
    css`
      padding: 46px 35px;
      text-align: center;
    `}
  ${(props) =>
    props.$variant === 2 &&
    css`
      padding: 35px;
    `}

    ${(props) =>
    props.$variant === 3 &&
    css`
      padding: 20px 35px;
    `}

  ${(props) =>
    props.$variant === 4 &&
    css`
      padding: 25px;
    `}
`;

export const SvgWrapper = styled.div<{ $variant: number }>`
  padding-bottom: 30px;

  ${(props) =>
    props.$variant === 3 &&
    css`
      padding-bottom: 20px;
    `}

  ${(props) =>
    props.$variant === 4 &&
    css`
      padding: 15px;
    `}
`;

export const SubTitleWrapper = styled.div<{ $variant: number }>`
  ${(props) =>
    props.$variant === 1 &&
    css`
      padding-top: 16px;
    `}

  ${(props) =>
    props.$variant === 2 &&
    css`
      padding: 16px 0 30px 0;
    `}

  ${(props) =>
    props.$variant === 3 &&
    css`
      padding: 16px 0 20px 0;
    `}

  ${(props) =>
    props.$variant === 4 &&
    css`
      padding-top: 10px;
    `}
`;
