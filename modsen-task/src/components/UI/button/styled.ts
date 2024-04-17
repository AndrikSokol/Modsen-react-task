import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{
  $hasSVG?: boolean;
  $variant?: string;
  $color?: string;
  $size?: string;
}>`
  background-color: var(--colors-primary);
  color: var(--colors-text-light);
  font-size: ${(props) => (props.$hasSVG ? '14px' : '16px')};
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: ${(props) => (props.$hasSVG ? '168px' : '185px')};
  padding: ${(props) => (props.$hasSVG ? '10px 0' : '15px 0')};
  border: 0px;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: ${(props) => (props.$hasSVG ? '' : 'var(--shadow-button)')};

  @media (max-width: 360px) {
    width: 100%;
  }

  &:hover {
    background-color: var(--colors-primary-hover);
  }

  &:disabled {
    background-color: var(--colors-primary-disabled);
  }

  ${(props) =>
    props.$variant === 'outlined' &&
    css`
      color: var(--colors-text-dark);
      background-color: transparent;

      &:hover {
        color: var(--colors-primary-hover);
      }

      &:disabled {
        background-color: var(--colors-primary-disable);
      }
    `}

  ${(props) =>
    props.$variant === 'rounded' &&
    css`
      font-size: 14px;
      width: 120px;
      height: 120px;
      border-radius: 100%;
      border: 1px solid white;

      @media (max-width: 992px) {
        font-size: 12px;
        width: 80px;
        height: 80px;
      }
    `}

    ${({ $color }) =>
    $color === 'white' &&
    css`
      box-shadow: 0 0 0 0;
      background-color: var(--colors-white);
      color: var(--colors-black);
    `}
`;
