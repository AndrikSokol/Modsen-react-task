import { FC } from 'react';
import Title from '../title';
import SubTitle from '../subTitle';
import { CardProps } from './type';
import { CardWrapper, StyledCard, SubTitleWrapper, SvgWrapper } from './styled';
import CardLink from '../links/card-link';

const Card: FC<CardProps> = ({ svgIcon, variant, title, description }) => {
  return (
    <StyledCard>
      <CardWrapper $variant={variant}>
        <SvgWrapper $variant={variant}> {svgIcon}</SvgWrapper>
        <Title variant="h5">{title}</Title>
        <SubTitleWrapper $variant={variant}>
          <SubTitle size={variant === 4 ? 's' : 'm'}>{description}</SubTitle>
        </SubTitleWrapper>

        {variant != 4 && <CardLink to="">Read more</CardLink>}
      </CardWrapper>
    </StyledCard>
  );
};

export default Card;
