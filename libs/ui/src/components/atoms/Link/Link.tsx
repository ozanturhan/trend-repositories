import { FC } from 'react';
import { StyledLink } from './style';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';

type LinkProps = Partial<NextLinkProps> & {
  className?: string;
  onClick?: () => void;
};

const Link: FC<LinkProps> = ({
  children,
  href,
  onClick,
  className,
  ...props
}) => {
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
