import { renderWithProvider } from '@trend-repositories/ui/utils';
import Loading from './Loading';

describe('Loading Component', () => {
  it('should be rendered correctly', () => {
    const { asFragment } = renderWithProvider(<Loading />);

    expect(asFragment()).toMatchSnapshot();
  });
});
