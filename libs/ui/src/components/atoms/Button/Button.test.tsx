import { renderWithProvider } from '@trend-repositories/ui/utils';
import Button from './Button';

describe('Button Component', () => {
  it('should be rendered correctly', () => {
    const { asFragment } = renderWithProvider(
      <Button href="https://github.com">linguistic</Button>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
