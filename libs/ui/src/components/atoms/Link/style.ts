import styled from 'styled-components';

export const StyledLink = styled.a`
  display: block;
  font-size: ${(props) => props.theme.sizes.large};
  color: ${(props) => props.theme.colors.blue_2};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
