import styled, { css } from 'styled-components';

export const StyledBox = styled.div<{ $sx?: object }>`
  /* ${({ $sx }) =>
    $sx &&
    css`
      ${Object.entries($sx)
        .map(([key, value]) => `${key}: ${value};`)
        .join('\n')}
    `} */

  ${(props) =>
    props.$sx &&
    Object.entries(props.$sx)
      .map(
        ([key, value]) =>
          `${key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()}: ${value};`,
      )
      .join('\n')}
`;
