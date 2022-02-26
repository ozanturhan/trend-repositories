import { renderWithThemeProvider, screen } from '@ui/utils';
import RepositoryInformation from './RepositoryInformation';

describe('RepositoryInformation Component Test', () => {
  it('should be rendered correctly', () => {
    const { asFragment } = renderWithThemeProvider(
      <RepositoryInformation
        name="test"
        license="MIT"
        stars={100}
        forks={100}
        language="JavaScript"
        languageColor="yellow"
        url="http://fake-url"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should be rendered without language and licence', () => {
    const { asFragment } = renderWithThemeProvider(
      <RepositoryInformation
        name="test"
        stars={100}
        forks={100}
        url="http://fake-url"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should be have star and fork url', () => {
    renderWithThemeProvider(
      <RepositoryInformation
        name="test"
        stars={100}
        forks={100}
        url="http://fake-url"
      />
    );

    expect(screen.getByTestId('forks-url').getAttribute('href')).toEqual(
      'http://fake-url/network/members.test'
    );

    expect(screen.getByTestId('stargazers-url').getAttribute('href')).toEqual(
      'http://fake-url/stargazers'
    );
  });
});
