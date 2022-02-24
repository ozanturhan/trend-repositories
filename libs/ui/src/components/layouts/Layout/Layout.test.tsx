import { renderWithProvider } from '@trend-repositories/ui/utils';
import Layout from './Layout';

describe('Layout Component', () => {
  it('should be rendered correctly', () => {
    const { asFragment } = renderWithProvider(<Layout>Hello Github</Layout>);

    expect(asFragment()).toMatchSnapshot();
  });
});
