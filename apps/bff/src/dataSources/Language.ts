import { RESTDataSource } from 'apollo-datasource-rest';

export class Language extends RESTDataSource {
  constructor() {
    super();
    this.baseURL =
      'https://raw.githubusercontent.com/github/linguist/master/lib/linguist/';
  }

  async getLanguages() {
    return this.get('languages.yml', null);
  }
}
