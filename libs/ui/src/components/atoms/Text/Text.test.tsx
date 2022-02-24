import Text from './Text';
import { renderWithProvider } from '../../../utils';

describe('Text Component', () => {
  it('should be rendered correctly', () => {
    const { asFragment } = renderWithProvider(
      <Text size="small">linguistic</Text>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should be rendered as a paragraph', () => {
    const { asFragment } = renderWithProvider(
      <Text elementType="p" size="small">
        linguistic
      </Text>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
