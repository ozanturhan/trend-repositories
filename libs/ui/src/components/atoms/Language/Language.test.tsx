import { renderWithProvider } from '@trend-repositories/ui/utils';
import Language from './Language';

describe('Language Component', () => {
  it('should be rendered correctly', () => {
    const { asFragment } = renderWithProvider(
      <Language color="yellow">Javascript</Language>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should be rendered without color', () => {
    const { asFragment } = renderWithProvider(<Language>Javascript</Language>);

    expect(asFragment()).toMatchSnapshot();
  });
});
