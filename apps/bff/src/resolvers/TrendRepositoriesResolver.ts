import {
  GithubRepositoryRequest,
  TrendRepositoryData,
} from '@trend-repositories/api-interfaces';
import * as moment from 'moment';

class TrendRepositoriesResolver {
  static async TrendRepositories(
    _,
    { params },
    { dataSources }
  ): Promise<TrendRepositoryData> {
    const request: GithubRepositoryRequest = {
      page: params?.page || 1,
      per_page: params?.limit || 20,
      sort: params?.sort || 'star',
    };

    let date;
    switch (params?.date) {
      case 'today':
        date = moment().subtract(1, 'd').format('YYYY-MM-DD');
        break;
      case 'last_month':
        date = moment().subtract(30, 'd').format('YYYY-MM-DD');
        break;
      case 'last_week':
      default:
        date = moment().subtract(7, 'd').format('YYYY-MM-DD');
    }

    const q = [`created:>=${date}`];

    if (params?.language && params?.language !== 'all') {
      q.push(`language:${params.language}`);
    }

    request.q = q.join(' ');

    return dataSources.GithubApi.searchRepositories(request).then(
      (response) => {
        const items = response.items.map((repository) => ({
          id: repository.id,
          name: repository.name,
          description: repository.description,
          topics: repository.topics,
          license: repository.license?.spdx_id,
          stars: repository.stargazers_count,
          language: repository.language,
          forks: repository.forks,
          url: repository.html_url,
          languageColor: '',
        }));

        return {
          total: response.total_count,
          items,
        };
      }
    );
  }
}

export default TrendRepositoriesResolver;
