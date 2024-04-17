import { ReactNode } from 'react';

export interface ICard {
  id: number;
  svgIcon: ReactNode;
  title: string;
  description: string;
}
