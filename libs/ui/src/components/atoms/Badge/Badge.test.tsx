import { renderWithProvider } from '@trend-repositories/ui/utils';
import Badge from './Badge';

describe('Badge Component', () => {
  it('should be rendered correctly', () => {
    const { asFragment } = renderWithProvider(
      <Badge href="https://github.com">linguistic</Badge>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
