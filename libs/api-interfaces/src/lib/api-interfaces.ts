export interface Message {
  message: string;
}

export interface GithubRepositoryRequest {
  page: number;
  per_page: number;
  sort: 'star' | 'name';
  q?: string;
}

export interface GithubApiRepository {
  id: number;
  name: string;
  description: string;
  topics: string[];
  license?: {
    spdx_id: string;
  };
  stars: number;
  forks: number;
  language: string;
  html_url: string;
}

export interface GithubRepository {
  id: number;
  name: string;
  description: string;
  topics: string[];
  license: string;
  stars: number;
  forks: number;
  language: string;
  languageColor: string;
  url: string;
  isStarred?: boolean;
}

export interface GithubRepositoryResponse {
  items: GithubApiRepository[];
  total_count: number;
}

export interface TrendRepositoryData {
  TrendRepositories: {
    total: number;
    items: GithubRepository[];
  };
}

export interface LanguagesData {
  Languages: [Language];
}

export interface Language {
  text: string;
  color: string;
}
