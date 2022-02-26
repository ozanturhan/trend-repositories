import React from 'react';
import {
  renderWithMockProvider,
  waitForResponse,
  screen,
  fireEvent,
} from '@trend-repositories/ui/utils';

import Index from '../pages/index';
import { GET_LANGUAGES, GET_TREND_REPOSITORIES } from '../graphql';
import { cache } from '../lib/apollo-client';

jest.mock('next/dist/client/router', () => require('next-router-mock'));
const languageMock = {
  request: {
    query: GET_LANGUAGES,
  },
  result: {
    data: {
      Languages: [
        {
          text: 'PHP',
          color: 'red',
        },
        {
          text: 'Javascript',
          color: 'yellow',
        },
      ],
    },
  },
};

const repositoryMock = {
  request: {
    query: GET_TREND_REPOSITORIES,
    variables: {
      params: {
        page: 1,
      },
    },
  },
  result: {
    data: {
      TrendRepositories: {
        total: 44407,
        items: [
          {
            description:
              'A PHP coroutine client for distributed transaction manager DTM. 分布式事务管理器 DTM 的 PHP 协程客户端',
            forks: 16,
            id: 456463736,
            isStarred: false,
            language: 'PHP',
            languageColor: '#4F5D95',
            license: 'MIT',
            name: 'dtm-client',
            stars: 217,
            topics: ['test', 'php'],
            url: 'https://github.com/dtm-php/dtm-client',
            __typename: 'Repository',
          },
        ],
      },
    },
  },
};

describe('Index', () => {
  beforeEach(() => {
    cache.restore({});
  });

  it('should render successfully', async () => {
    const { asFragment } = renderWithMockProvider(<Index />, null, [
      languageMock,
      repositoryMock,
    ]);

    await waitForResponse();

    expect(asFragment()).toMatchSnapshot();
  });

  it('should save repository to favorites', async () => {
    // Arrange
    renderWithMockProvider(<Index />, cache, [languageMock, repositoryMock]);

    await waitForResponse();

    const starButton = screen.getByText('Star');

    // Act
    fireEvent.click(starButton);

    await waitForResponse();

    const data = cache.extract();

    // Assertion
    expect(data['Repository:456463736'].isStarred).toBeTruthy();
  });

  it('should delete repository from favorites', async () => {
    // Arrange
    renderWithMockProvider(<Index />, cache, [languageMock, repositoryMock]);

    await waitForResponse();

    // first click
    fireEvent.click(screen.getByText('Star'));

    await waitForResponse();

    // Act - second click
    fireEvent.click(screen.getByText('Star'));
    await waitForResponse();

    const data = cache.extract();

    // Assertion
    expect(data['Repository:456463736'].isStarred).toBeFalsy();
  });
});
