import { ReactNode } from 'react';

export type CardProps = {
  key: number;
  svgIcon: ReactNode;
  variant: 1 | 2 | 3 | 4;
  title: string;
  description: string;
};
