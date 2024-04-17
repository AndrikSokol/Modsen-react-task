import styled, { css } from 'styled-components';

export const TitleH1 = styled.h1<{ $size: string | undefined }>`
  font-size: 46px;
  font-weight: 800;
  color: black;
  line-height: 60px;

  ${(props) =>
    props.$size &&
    css`
      font-size: 80px;
      line-height: 88px;
    `}

  @media (max-width: 767px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

export const TitleH2 = styled.h2`
  font-size: 57px;
  font-weight: 800;
  color: black;
  line-height: 65.5px;

  @media (max-width: 767px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

export const TitleH3 = styled.h3<{
  $size?: string;
  $weight?: string;
  $color?: string;
}>`
  font-size: ${(props) => props.$size || '38px'};
  font-weight: ${(props) => props.$weight || 800};
  color: ${(props) => props.$color || 'black'};
  line-height: 56px;

  @media (max-width: 767px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

export const TitleH4 = styled.h4`
  font-size: 22px;
  font-weight: 700;
  color: var(--colors-black);
  line-height: 33px;
`;

export const TitleH5 = styled.h5`
  font-size: 20px;
  font-weight: 700;
  color: var(--colors-black);
  line-height: 33px;
`;

export const TitleH6 = styled.h6<{ $color?: string }>`
  font-size: 16px;
  font-weight: 700;
  color: black;
  line-height: 24px;

  ${({ $color }) =>
    $color === 'blue' &&
    css`
      color: var(--colors-primary);
    `}

  ${({ $color }) =>
    $color === 'white' &&
    css`
      color: var(--colors-white);
    `}
`;
