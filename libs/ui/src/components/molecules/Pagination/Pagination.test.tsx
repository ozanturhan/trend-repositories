import mockRouter from 'next-router-mock';
import singletonRouter from 'next/router';
import { renderWithThemeProvider, screen, fireEvent } from '@ui/utils';
import Pagination from './Pagination';

describe('RepositoryInformation Component Test', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/?page=1');
  });

  it('should be rendered correctly', () => {
    const { asFragment } = renderWithThemeProvider(<Pagination total={100} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should be previous button disabled', () => {
    // Arrange && Act
    renderWithThemeProvider(<Pagination total={100} />);

    const previous = screen.getByRole('link', { name: /< Prev/ });

    // Assertion
    expect(previous).toHaveStyle('cursor: not-allowed');
  });

  it('should be previous button enabled when page greater then 1', () => {
    // Arrange && Act
    renderWithThemeProvider(<Pagination total={100} />);

    const previous = screen.getByRole('link', { name: /< Prev/ });
    const next = screen.getByRole('link', { name: /Next >/ });

    // Act
    fireEvent.click(next);

    // Assertion
    expect(previous).not.toHaveStyle('cursor: not-allowed');
    expect(singletonRouter).toMatchObject({
      asPath: '/?page=2',
      pathname: '/',
      query: { page: '2' },
    });
  });

  it('should be previous button worked', () => {
    // Arrange && Act
    renderWithThemeProvider(<Pagination total={100} />);

    const previous = screen.getByRole('link', { name: /< Prev/ });
    const next = screen.getByRole('link', { name: /Next >/ });

    fireEvent.click(next);
    expect(previous).not.toHaveStyle('cursor: not-allowed');

    // Act
    fireEvent.click(previous);

    // Assertion
    expect(previous).toHaveStyle('cursor: not-allowed');
    expect(singletonRouter).toMatchObject({
      asPath: '/?page=1',
      pathname: '/',
      query: { page: '1' },
    });
  });

  it('should be next button disabled', () => {
    // Arrange && Act
    mockRouter.setCurrentUrl('/?page=5');

    renderWithThemeProvider(<Pagination total={100} />);

    const next = screen.getByRole('link', { name: /Next >/ });

    // Assertion
    expect(next).toHaveStyle('cursor: not-allowed');
  });
});
