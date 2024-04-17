import { FC } from 'react';
import styled, { css } from 'styled-components';
import SubTitle from '../../subTitle';
import Box from '../../box';
import Title from '../../title';
import { Link } from 'react-router-dom';
import CardLink from '../../links/card-link';

type BlogCardProps = {
  icon?: string;
  variant?: 1 | 2;
  size: 's' | 'm' | 'l';
  date: string;
  title: string;
  description?: string;
  tags?: string[];
};

const StyledCard = styled.div<{ $size: string }>`
  background-color: var(--colors-white);

  ${({ $size }) =>
    $size === 'l' &&
    css`
      max-width: 635px;
    `}

  ${({ $size }) =>
    $size === 'm' &&
    css`
      max-width: 562px;
    `}

  ${({ $size }) =>
    $size === 's' &&
    css`
      max-width: 350px;
    `}
`;

const CardWrapper = styled.div<{ $size: string }>`
  ${({ $size }) =>
    $size === 'm' &&
    css`
      padding: 35px 30px;
    `}
`;

const Img = styled.img<{ $size: string }>`
  width: 100%;
  border-radius: 6px;
  object-fit: cover;

  ${({ $size }) =>
    $size === 'l' &&
    css`
      height: 285px;
    `}

  ${({ $size }) =>
    $size === 'm' &&
    css`
      height: 300px;
    `}

  ${({ $size }) =>
    $size === 's' &&
    css`
      height: 200px;
    `}
`;

export const BlogCard: FC<BlogCardProps> = ({
  icon,
  size,
  variant,
  date,
  title,
  tags,
  description,
}) => {
  return (
    <StyledCard $size={size}>
      <CardWrapper $size={size}>
        <Img $size={size} src={icon} alt="" />
        <Box sx={{ padding: '25px 0' }}>
          <SubTitle size="s">{date}</SubTitle>
        </Box>
        <Title variant="h4">{title}</Title>
        <Box sx={{ padding: '15px 0' }}>
          <SubTitle size="m">{description}</SubTitle>
        </Box>
        {size === 'm' ? (
          tags?.map((tag) => {
            return <div key={tag}>{tag}</div>;
          })
        ) : (
          <Box sx={{ display: 'flex', flexGrow: '1' }}>
            <CardLink to="">Read more</CardLink>
          </Box>
        )}
      </CardWrapper>
    </StyledCard>
  );
};
