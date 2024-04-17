import { FC } from 'react';
import SubTitle from '../subTitle';
import { BANNER_INFO } from '@/constants/banner.info';
import { BannerProps } from './type';
import { IBanner } from '@/types/banner.interface';
import { Project, BannerWrapper } from './styled';
import styled, { css } from 'styled-components';

const ProjectWrapper = styled.div<{ $variant: number }>`
  ${({ $variant }) =>
    $variant === 3 &&
    css`
      padding: 0 50px;
    `}
`;
const Banner: FC<BannerProps> = ({ variant }) => {
  if (variant == 4)
    return (
      <BannerWrapper>
        {BANNER_INFO.map((banner: IBanner) => {
          if (banner.id != 1) {
            return (
              <ProjectWrapper $variant={variant} key={banner.id}>
                <Project>{banner.projects}</Project>
                <SubTitle size="m">{banner.title}</SubTitle>
              </ProjectWrapper>
            );
          }
        })}
      </BannerWrapper>
    );

  if (variant == 3)
    return (
      <BannerWrapper>
        {BANNER_INFO.map((banner: IBanner) => {
          return (
            <ProjectWrapper $variant={variant} key={banner.id}>
              <Project>{banner.projects}</Project>
              <SubTitle size="m">{banner.title}</SubTitle>
            </ProjectWrapper>
          );
        })}
      </BannerWrapper>
    );
};

export default Banner;
