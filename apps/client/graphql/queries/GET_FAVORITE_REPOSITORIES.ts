import { gql } from '@apollo/client';

const GET_TREND_REPOSITORIES = gql`
  query GetFavoriteRepositories {
    FavoriteRepositories @client {
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
      isStarred
    }
  }
`;

export default GET_TREND_REPOSITORIES;
