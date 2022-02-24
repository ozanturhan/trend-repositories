import { renderWithProvider } from '@trend-repositories/ui/utils';
import Icon from './Icon';

describe('Icon Component', () => {
  it('should be rendered correctly', () => {
    const { asFragment } = renderWithProvider(
      <Icon name="fork" fill="#000000" />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
