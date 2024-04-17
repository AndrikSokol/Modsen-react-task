import { FC } from 'react';
import { StyledBox } from './styled';

type BoxProps = {
  children: any;
  sx?: object;
};
const Box: FC<BoxProps> = ({ sx, children }) => {
  return <StyledBox $sx={sx}> {children}</StyledBox>;
};

export default Box;
