/* istanbul ignore file */
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { ReactNode } from 'react';
import { render, act } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { MockedResponse } from '@apollo/client/testing/core';
import { InMemoryCache } from '@apollo/client/cache';

export const renderWithProvider = (node: ReactNode) => {
  return render(<ThemeProvider theme={theme}>{node}</ThemeProvider>);
};

export const renderWithMockProvider = (
  node: ReactNode,
  cache: InMemoryCache,
  mocks: ReadonlyArray<MockedResponse>
) => {
  return render(
    <ThemeProvider theme={theme}>
      <MockedProvider cache={cache} mocks={mocks}>
        {node}
      </MockedProvider>
    </ThemeProvider>
  );
};

export const renderWithThemeProvider = (node: ReactNode) => {
  return render(<ThemeProvider theme={theme}>{node}</ThemeProvider>);
};

export const waitForResponse = async () =>
  await act(async () => await new Promise((resolve) => setTimeout(resolve, 0)));
export * from '@testing-library/react';
