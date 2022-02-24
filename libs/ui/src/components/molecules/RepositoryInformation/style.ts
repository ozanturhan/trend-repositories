import styled from 'styled-components';

export const StyledRepositoryInformatin = styled.div`
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 10px;

  > svg {
    margin-right: 5px;
  }

  & > a {
    display: inline-flex;
    > svg {
      margin-right: 5px;
    }

    :hover {
      color: ${(props) => props.theme.colors.blue_2};
      text-decoration: none;
      > svg {
        fill: ${(props) => props.theme.colors.blue_2};
      }

      > span {
        color: ${(props) => props.theme.colors.blue_2};
      }
    }
  }
`;
