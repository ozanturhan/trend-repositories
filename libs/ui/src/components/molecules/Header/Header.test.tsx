import { renderWithProvider } from '@ui/utils';
import Header from './Header';

describe('Header Component', () => {
  it('should be rendered correctly', () => {
    const { asFragment } = renderWithProvider(
      <Header>GitHub Trend Repositories</Header>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
