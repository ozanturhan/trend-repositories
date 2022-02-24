import { FC } from 'react';
import { Icon } from '../../atoms';
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderWrapper,
} from './style';

const Header: FC = ({ children }) => {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderContainer>
        <StyledHeader>
          <Icon name="github" fill="white" />
          {children}
        </StyledHeader>
      </StyledHeaderContainer>
    </StyledHeaderWrapper>
  );
};

export default Header;
