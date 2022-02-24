import { gql } from '@apollo/client';

const GET_TREND_REPOSITORIES = gql`
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
        isStarred @client
      }
    }
  }
`;

export default GET_TREND_REPOSITORIES;
