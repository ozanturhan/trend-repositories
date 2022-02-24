import styled from 'styled-components';

export const StyledHeader = styled.h1`
  color: ${(props) => props.theme.colors.white_1};
  font-size: ${(props) => props.theme.sizes.large};
  display: flex;
  align-content: flex-end;
  align-items: center;

  & > svg {
    margin-right: 10px;
  }
`;

export const StyledHeaderWrapper = styled.div`
  width: 100%;
  box-shadow: inset 0 -1px 0 #21262d;
`;

export const StyledHeaderContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 768px;
  padding: 1rem;
`;
