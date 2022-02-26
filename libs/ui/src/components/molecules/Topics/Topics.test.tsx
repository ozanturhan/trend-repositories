import { renderWithThemeProvider, screen } from '@ui/utils';
import Topics from './Topics';

describe('Topics Component Test', () => {
  it('should be rendered correctly', () => {
    const { asFragment } = renderWithThemeProvider(
      <Topics topics={['topic1', 'topic2']} />
    );

    expect(
      screen.getByRole('link', { name: 'topic1' }).getAttribute('href')
    ).toEqual('https://github.com/search?q=topic:topic1&type=Repositories');

    expect(asFragment()).toMatchSnapshot();
  });
});
