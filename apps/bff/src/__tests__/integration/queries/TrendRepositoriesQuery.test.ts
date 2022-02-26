import { ApolloServer, gql } from 'apollo-server';

import typeDefs from '../../../typeDefs';
import resolvers from '../../../resolvers';
import { GithubApi } from '../../../dataSources/GithubApi';
import { Language } from '../../../dataSources/Language';
import { initCache } from '../../../utils/cache';
import { languagesMock, repositoriesMock } from '../../../__mocks__';

const QUERY = gql`
  query GetTrendRepositories($params: TrendRepositoriesParams) {
    TrendRepositories(params: $params) {
      total
      items {
        id
        name
        description
        topics
        license
        stars
        forks
        language
        languageColor
        url
      }
    }
  }
`;
describe('[Query - TrendRepositories]', () => {
  let server;
  const dataSources = {
    GithubApi: new GithubApi(),
    Language: new Language(),
  };

  (dataSources.GithubApi as any).get = jest.fn(() =>
    Promise.resolve(repositoriesMock)
  );

  (dataSources.Language as any).get = jest.fn(() =>
    Promise.resolve(languagesMock)
  );

  (Date.now as unknown) = jest.fn(() => new Date('2022-02-20T12:33:37.000Z'));

  beforeEach(() => {
    initCache();
    server = new ApolloServer({
      typeDefs,
      resolvers,
      dataSources: () => dataSources,
    });
  });

  it('should fetch repositories with default parameters', async () => {
    // Arrange
    const { GithubApi } = dataSources;

    // Act
    const response = await server.executeOperation({
      query: QUERY,
    });

    // Assertion
    expect((GithubApi as any).get).toHaveBeenCalledWith(
      'search/repositories',
      {
        page: 1,
        per_page: 20,
        q: 'created:>=2022-02-13',
        sort: 'star',
      },
      { headers: { Accept: 'application/vnd.github.v3+json' } }
    );

    expect(response?.data).toEqual({
      TrendRepositories: {
        items: [
          {
            description: 'Laravel Debugbar (Integrates PHP Debug Bar)',
            forks: 1341,
            id: 12615154,
            language: 'PHP',
            languageColor: '#4F5D95',
            license: 'MIT',
            name: 'laravel-debugbar',
            stars: 13738,
            topics: ['debugbar', 'hacktoberfest', 'laravel'],
            url: 'https://github.com/barryvdh/laravel-debugbar',
          },
          {
            description: 'The Go programming language',
            forks: 14296,
            id: 23096959,
            language: 'Go',
            languageColor: '#00ADD8',
            license: 'NOASSERTION',
            name: 'go',
            stars: 95704,
            topics: ['go', 'golang', 'language', 'programming-language'],
            url: 'https://github.com/golang/go',
          },
        ],
        total: null,
      },
    });
  });

  it('should fetch repositories with variables', async () => {
    // Arrange
    const { GithubApi } = dataSources;

    // Act
    await server.executeOperation({
      query: QUERY,
      variables: {
        params: {
          page: 1,
          limit: 30,
          language: 'PHP',
          sort: 'name',
        },
      },
    });

    // Assertion
    expect((GithubApi as any).get).toHaveBeenCalledWith(
      'search/repositories',
      {
        page: 1,
        per_page: 30,
        q: 'created:>=2022-02-13 language:PHP',
        sort: 'name',
      },
      { headers: { Accept: 'application/vnd.github.v3+json' } }
    );
  });

  describe('[filter by date]', () => {
    const executeOperationWithDate = async (date) =>
      await server.executeOperation({
        query: QUERY,
        variables: {
          params: {
            page: 1,
            limit: 30,
            sort: 'name',
            date: date,
          },
        },
      });

    it('today', async () => {
      // Arrange
      const { GithubApi } = dataSources;

      // Act
      await executeOperationWithDate('today');

      // Assertion
      expect((GithubApi as any).get).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          q: 'created:>=2022-02-19',
        }),
        expect.anything()
      );
    });

    it('last week', async () => {
      // Arrange
      const { GithubApi } = dataSources;

      // Act
      await executeOperationWithDate('last_week');

      // Assertion
      expect((GithubApi as any).get).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          q: 'created:>=2022-02-13',
        }),
        expect.anything()
      );
    });

    it('last month', async () => {
      // Arrange
      const { GithubApi } = dataSources;

      // Act
      await executeOperationWithDate('last_month');

      // Assertion
      expect((GithubApi as any).get).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          q: 'created:>=2022-01-21',
        }),
        expect.anything()
      );
    });
  });
});
