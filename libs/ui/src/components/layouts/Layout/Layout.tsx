import { Content, StyledLayout } from './style';
import { FC } from 'react';
import { Header } from '../../molecules';

const Layout: FC = ({ children }) => {
  return (
    <StyledLayout>
      <Header>GitHub Trend Repositories</Header>
      <Content>{children}</Content>
    </StyledLayout>
  );
};

export default Layout;
