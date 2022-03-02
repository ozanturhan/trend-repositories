import { GithubApi } from './GithubApi';
import { Language } from './Language';

const dataSources = () => ({
  GithubApi: new GithubApi(),
  Language: new Language(),
});

export default dataSources;
export * from './GithubApi'
export * from './Language'
