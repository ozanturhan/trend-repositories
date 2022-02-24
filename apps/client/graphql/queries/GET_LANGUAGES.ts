import { gql } from '@apollo/client';

const GET_LANGUAGES = gql`
  query GetLanguages {
    Languages {
      text
      color
    }
  }
`;

export default GET_LANGUAGES;
