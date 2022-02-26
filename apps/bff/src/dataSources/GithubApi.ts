import { RESTDataSource } from 'apollo-datasource-rest';
import {
  GithubRepositoryRequest,
  GithubRepositoryResponse,
} from '@trend-repositories/api-interfaces';
import { URLSearchParams } from 'apollo-server-env/dist/url';

export class GithubApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.github.com/';
  }

  async searchRepositories(
    request: GithubRepositoryRequest
  ): Promise<GithubRepositoryResponse> {
    return this.get(
      'search/repositories',
      request as unknown as URLSearchParams,
      { headers: { Accept: 'application/vnd.github.v3+json' } }
    );
  }
}
