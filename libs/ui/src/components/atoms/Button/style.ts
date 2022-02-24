import styled, { css } from 'styled-components';
import Link from '../Link/Link';
import { LinkProps } from 'next/link';
import { FC } from 'react';
import theme from '../../../theme';

export const StyledButton: FC<
  Partial<LinkProps> & {
    active?: boolean;
    onClick?: () => void;
    color?: keyof typeof theme.colors;
    disabled?: boolean;
  }
> = styled(Link)<{
  active?: boolean;
  color?: keyof typeof theme.colors;
  disabled?: boolean;
}>`
  background-color: ${(props) => props.theme.colors.black_2};
  display: inline-flex;
  align-items: center;
  border-radius: 6px;
  padding: 5px 16px;
  border: 1px solid ${(props) => props.theme.colors.grey_2};

  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.white_2};
  font-size: ${(props) => props.theme.sizes.medium};

  :hover {
    text-decoration: none;
    background-color: ${(props) => props.theme.colors.grey_2};
    border-color: ${(props) => props.theme.colors.grey_1};
    transition-duration: 0.1s;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: ${(props) => props.theme.colors.blue_1};

      :hover {
        background-color: ${(props) => props.theme.colors.blue_1};
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      color: currentColor;
      cursor: not-allowed;
      opacity: 0.5;
      text-decoration: none;
      pointer-events: none;
    `}

  > svg {
    fill: ${(props) =>
      props.color
        ? props.theme.colors[props.color]
        : props.theme.colors.white_2};
    margin-right: 3px;
  }
`;
