import { FC } from 'react';
import { ButtonProps } from './type';
import { StyledButton } from './styled';
import Box from '../box';

const Button: FC<ButtonProps> = ({
  renderSVG,
  children,
  variant,
  size,
  disabled,
  color,
  onClick,
  type,
  ...props
}) => {
  if (variant === 'rounded')
    return (
      <Box
        sx={{
          display: 'flex',
          border: '10px solid white',
          borderRadius: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            border: '10px solid var(--colors-primary)',
            borderRadius: '100%',
          }}
        >
          <StyledButton
            $variant={variant}
            $hasSVG={!!renderSVG}
            onClick={onClick}
            type={type}
            {...props}
          >
            {renderSVG}
            {children}
          </StyledButton>
        </Box>
      </Box>
    );

  return (
    <StyledButton
      disabled={disabled}
      $variant={variant}
      $hasSVG={!!renderSVG}
      onClick={onClick}
      $color={color}
      {...props}
      type={type}
    >
      {renderSVG}
      {children}
    </StyledButton>
  );
};

export default Button;
