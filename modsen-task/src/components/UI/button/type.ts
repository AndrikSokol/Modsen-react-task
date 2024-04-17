import { ReactNode } from 'react';
import { SubmitHandler } from 'react-hook-form';

interface IFormInputs {
  email: string;
  name: string;
  theme: string;
  message: string;
}

export type ButtonProps = {
  renderSVG?: ReactNode;
  color?: 'white';
  variant?: 'rounded' | 'outlined';
  size?: 'lg' | 'md' | 'xs';
  children?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'submit';
};
