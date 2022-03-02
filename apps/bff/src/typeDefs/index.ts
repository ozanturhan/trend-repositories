const typeDefs = /* GraphQL */ `
  enum CacheControlScope {
    PUBLIC
    PRIVATE
  }

  directive @cacheControl(
    maxAge: Int
    scope: CacheControlScope
    inheritMaxAge: Boolean
  ) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION

  type Query {
    TrendRepositories(params: TrendRepositoriesParams): TrendRepositories
      @cacheControl(maxAge: 86400)
    Languages: [Language] @cacheControl(maxAge: 86400)
  }

  type TrendRepositories {
    total: Int
    items: [Repository] @cacheControl(inheritMaxAge: true)
  }

  type Repository {
    id: Int
    name: String
    description: String
    topics: [String]
    license: String
    stars: Int
    forks: Int
    language: String
    languageColor: String
    url: String
  }

  type Language {
    text: String
    color: String
  }

  input TrendRepositoriesParams {
    page: Int
    limit: Int
    language: String
    sort: Sort
    date: Date
  }

  enum Date {
    today
    last_week
    last_month
  }

  enum Sort {
    name
    star
  }

  schema {
    query: Query
  }
`;

export default typeDefs;
