import { StyledButton } from './style';
import { FC } from 'react';
import { LinkProps } from 'next/link';
import theme from '../../../theme';

const Button: FC<
  Partial<LinkProps> & {
    active?: boolean;
    onClick?: () => void;
    color?: keyof typeof theme.colors | undefined;
    disabled?: boolean;
  }
> = ({ children, href, onClick, active, color, disabled, ...props }) => {
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
