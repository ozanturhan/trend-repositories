import styled from 'styled-components';

export const StyledFilter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.sizes.medium};
  background-color: ${(props) => props.theme.colors.black_2};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;

    > div:first-child {
      margin-bottom: 9px;
    }
  }
`;

export const ButtonContainer = styled.div`
  a:nth-child(1) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-right: none;
  }

  a:nth-child(2) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-left: none;
  }

  a:hover {
    text-decoration: none;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;

  select {
    background-color: ${(props) => props.theme.colors.grey_2};
    color: ${(props) => props.theme.colors.white_2};
    border-radius: 6px;
    padding: 0.25rem 0.5rem 0.25rem 1rem;
    max-width: 100px;
    margin-right: 10px;
  }
`;
