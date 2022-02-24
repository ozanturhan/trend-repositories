import { FC } from 'react';
import { StyledLink } from './style';
import { default as NextLink, LinkProps } from 'next/link';

const Link: FC<
  Partial<LinkProps> & { className?: string; onClick?: () => void }
> = ({ children, href, onClick, className, ...props }) => {
  if (href) {
    return (
      <NextLink href={href} passHref>
        <StyledLink className={className} {...(props as never)}>
          {children}
        </StyledLink>
      </NextLink>
    );
  }

  return (
    <StyledLink onClick={onClick} className={className} {...(props as never)}>
      {children}
    </StyledLink>
  );
};

export default Link;
