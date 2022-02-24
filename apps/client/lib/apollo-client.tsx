import fetch from 'node-fetch';
import {
  ApolloClient,
  InMemoryCache,
  makeVar,
  ReactiveVar,
  createHttpLink,
} from '@apollo/client';
import { GithubRepository } from '@trend-repositories/api-interfaces';

export const createCache = () =>
  new InMemoryCache({
    typePolicies: {
      Repository: {
        fields: {
          isStarred: {
            read(isStarred) {
              return isStarred || false;
            },
          },
        },
      },
      Query: {
        fields: {
          FavoriteRepositories: {
            read() {
              return favoriteRepositoriesVar();
            },
          },
        },
      },
    },
  });

export const cache: InMemoryCache = createCache();

const favorites =
  typeof window !== 'undefined' && localStorage.getItem('favorites');

const initialData = favorites ? JSON.parse(favorites) : [];

export const favoriteRepositoriesVar: ReactiveVar<GithubRepository[]> =
  makeVar<GithubRepository[]>(initialData);

export const client = new ApolloClient({
  link: createHttpLink({
    uri: '/graphql',
    fetch: fetch,
  }),
  cache,
});
