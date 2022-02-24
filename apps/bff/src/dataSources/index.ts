import { GithubApi } from './GithubApi';
import { Language } from './Language';

const dataSources = () => ({
  GithubApi: new GithubApi(),
  Language: new Language(),
});

export default dataSources;
