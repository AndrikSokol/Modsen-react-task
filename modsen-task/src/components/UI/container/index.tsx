import { FC, ReactNode } from 'react';
import { ContainerBoth, ContainerRight } from './styled';

type ContainerProps = {
  variant?: 'right';
  children?: ReactNode;
};

const Container: FC<ContainerProps> = ({ variant = 'both', children }) => {
  if (variant === 'right') return <ContainerRight>{children}</ContainerRight>;

  return <ContainerBoth>{children}</ContainerBoth>;
};

export default Container;
