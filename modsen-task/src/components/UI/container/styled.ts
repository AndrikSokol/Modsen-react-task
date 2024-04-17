import styled from 'styled-components';

export const ContainerBoth = styled.div`
  max-width: 1110px;
  margin: 0 auto;

  @media (max-width: 991px) {
    padding: 0 16px;
  }
`;

export const ContainerRight = styled.div`
  margin-right: calc((100vw - 1100px) / 2);

  @media (max-width: 991px) {
    padding: 0 16px;
    margin: 0 auto;
  }
`;
