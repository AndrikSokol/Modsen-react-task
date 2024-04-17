import { StylesSubTitle } from './styled';
import { FC } from 'react';

const SubTitle: FC<SubTitleProps> = ({ size, color, children }) => {
  return (
    <StylesSubTitle $size={size} $color={color}>
      {children}
    </StylesSubTitle>
  );
};

export default SubTitle;
