import styled from 'styled-components';

export const BannerWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
`;

export const Project = styled.span`
  color: var(--colors-primary);
  font-size: 50px;
  font-weight: 800;
  line-height: 112px;

  @media (max-width: 767px) {
    font-size: 30px;
    font-weight: 800;
    line-height: 70px;
  }
`;
