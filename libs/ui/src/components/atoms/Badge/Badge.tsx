import { LinkProps } from 'next/link';
import { FC } from 'react';
import { StyledBadge } from './style';

const Badge: FC<LinkProps> = ({ children, href }) => {
  return <StyledBadge href={href}>{children}</StyledBadge>;
};

export default Badge;
