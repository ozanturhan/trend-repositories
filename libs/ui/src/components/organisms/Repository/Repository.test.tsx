import { renderWithThemeProvider, screen } from '@ui/utils';
import Repository from './Repository';
import { fireEvent } from '@testing-library/react';

describe('Repository Component Test', () => {
  it('should be rendered correctly', () => {
    const handleStar = jest.fn();
    const { asFragment } = renderWithThemeProvider(
      <Repository
        id={1}
        name="test"
        description="test"
        topics={['topic1', 'topic2']}
        license="MIT"
        stars={100}
        forks={100}
        language="Javascript"
        languageColor="yellow"
        url="http://fake-url"
        onStar={handleStar}
      />
    );

    const starButton = screen.getByTestId('star-button');

    fireEvent.click(starButton);

    expect(handleStar).toHaveBeenCalled();
    expect(asFragment()).toMatchSnapshot();
  });
});
