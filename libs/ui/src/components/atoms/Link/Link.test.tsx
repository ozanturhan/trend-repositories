import Link from './Link';
import { renderWithProvider } from '@trend-repositories/ui/utils';
import { fireEvent, screen } from '@testing-library/react';

describe('Link Component', () => {
  it('should be rendered correctly', () => {
    const { asFragment } = renderWithProvider(
      <Link href="https://github.com">linguistic</Link>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should be work with callback', () => {
    // Arrange
    const handleClick = jest.fn();
    renderWithProvider(<Link onClick={handleClick}>linguistic</Link>);

    const link = screen.getByText(/linguistic/);

    //Act
    fireEvent.click(link);

    // Assertion
    expect(handleClick).toHaveBeenCalled();
  });
});
