import { ButtonProps, StyledButton } from './style';
import { FC } from 'react';

const Button: FC<ButtonProps> = ({
  children,
  href,
  onClick,
  active,
  color,
  disabled,
  ...props
}) => {
  return (
    <StyledButton
      onClick={onClick}
      href={href}
      active={active}
      color={color}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
