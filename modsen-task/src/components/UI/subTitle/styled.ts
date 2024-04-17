import styled, { css } from 'styled-components';

export const StylesSubTitle = styled.p<{
  $size?: string;
  $color?: string;
}>`
  font-weight: 400;
  color: var(--colors-grey);

  ${(props) =>
    props.$size === 's' &&
    css`
      font-size: 14px;
      line-height: 24px;
    `}

  ${(props) =>
    props.$size === 'm' &&
    css`
      font-size: 16px;
      line-height: 28px;

      @media (max-width: 767px) {
        font-size: 14px;
        line-height: 24px;
      }
    `}
    ${(props) =>
    props.$size === 'lg' &&
    css`
      font-size: 20px;
      line-height: 33px;

      @media (max-width: 767px) {
        font-size: 14px;
        line-height: 24px;
      }
    `}

    ${(props) =>
    props.$color === 'white' &&
    css`
      color: var(--colors-white);
    `}

    ${(props) =>
    props.$color === 'black' &&
    css`
      color: var(--colors-black);
    `}
`;
