import { TitleProps } from './type';
import { FC } from 'react';
import { TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6 } from './styled';

const Title: FC<TitleProps> = ({ variant, children, color, size }) => {
  if (variant === 'h1') return <TitleH1 $size={size}>{children}</TitleH1>;

  if (variant === 'h2') return <TitleH2>{children}</TitleH2>;

  if (variant === 'h3') return <TitleH3 $color={color}>{children}</TitleH3>;

  if (variant === 'h4') return <TitleH4>{children}</TitleH4>;

  if (variant === 'h5') return <TitleH5>{children}</TitleH5>;

  if (variant === 'h6') return <TitleH6 $color={color}>{children}</TitleH6>;
};

export default Title;
