import styled from 'styled-components';
import Link from '../Link/Link';

export const StyledBadge = styled(Link)`
  display: inline-block;
  box-sizing: border-box;
  border-radius: 2rem;
  padding-left: 10px;
  padding-right: 10px;
  font-size: ${(props) => props.theme.sizes.small};
  background-color: ${(props) => props.theme.colors.blue_3};
  color: ${(props) => props.theme.colors.blue_2};
  line-height: 22px;
  font-weight: ${(props) => props.theme.fontWeight.medium};
  border: 1px solid transparent;

  &:hover {
    background-color: ${(props) => props.theme.colors.blue_1};
    color: ${(props) => props.theme.colors.white_2};
  }
`;
