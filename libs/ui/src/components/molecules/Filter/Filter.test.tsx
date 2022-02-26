import singletonRouter from 'next/router';
import mockRouter from 'next-router-mock';
import { renderWithThemeProvider, screen, fireEvent } from '@ui/utils';
import Filter from './Filter';

jest.mock('next/dist/client/router', () => require('next-router-mock'));

const languages = [
  { color: 'yellow', text: 'Javascript' },
  { color: 'red', text: 'PHP' },
];

describe('Filter Component Test', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/');
  });

  it('should be rendered correctly', () => {
    // Arrange && Act
    const { asFragment } = renderWithThemeProvider(
      <Filter languages={languages} />
    );

    // Assertion
    expect(asFragment()).toMatchSnapshot();
  });

  it('should filter all repositories', () => {
    // Arrange
    renderWithThemeProvider(<Filter languages={languages} />);

    const repositoriesButton = screen.getByRole('link', {
      name: 'Repositories',
    });

    // Act
    fireEvent.click(repositoriesButton);

    // Assertion
    expect(singletonRouter).toMatchObject({
      asPath: '/?filter=all',
      pathname: '/',
      query: { filter: 'all' },
    });
  });

  it('should filter starred repositories', () => {
    // Arrange
    renderWithThemeProvider(<Filter languages={languages} />);

    const repositoriesButton = screen.getByRole('link', {
      name: 'Favorite Repositories',
    });

    // Act
    fireEvent.click(repositoriesButton);

    // Assertion
    expect(singletonRouter).toMatchObject({
      asPath: '/?filter=star',
      pathname: '/',
      query: { filter: 'star' },
    });
  });

  it('should filter by language', () => {
    // Arrange
    renderWithThemeProvider(<Filter languages={languages} />);

    const languageCombo = screen.getByRole('combobox', {
      name: 'language-selection',
    });

    // Act
    fireEvent.change(languageCombo, { target: { value: 'PHP' } });

    // Assertion
    expect(singletonRouter).toMatchObject({
      asPath: '/?language=PHP&page=1',
      pathname: '/',
      query: { language: 'PHP', page: 1 },
    });
  });

  it('should filter by date', () => {
    // Arrange
    renderWithThemeProvider(<Filter languages={languages} />);

    const languageCombo = screen.getByRole('combobox', {
      name: 'date-selection',
    });

    // Act
    fireEvent.change(languageCombo, { target: { value: 'last_month' } });

    // Assertion
    expect(singletonRouter).toMatchObject({
      asPath: '/?date=last_month&page=1',
      pathname: '/',
      query: { page: 1 },
    });
  });
});
