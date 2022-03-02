import { cache } from '../utils/cache';
import * as yaml from 'yaml';
import { Language } from '@trend-repositories/api-interfaces';

class LanguageResolver {
  // query resolver
  static async Languages(_, __, { dataSources }): Promise<Language[]> {
    const languages = await LanguageResolver.getLanguages(dataSources);
    return Object.values(languages);
  }

  // field resolver
  static async LanguageColor(parent, _, { dataSources }): Promise<string> {
    const languages = await LanguageResolver.getLanguages(dataSources);

    return languages?.[parent.language]?.color;
  }

  static async getLanguages(dataSources) {
    let languages = cache.get('languages');

    if (!languages) {
      languages = await dataSources.Language.getLanguages().then((response) => {
        const languagesObj = yaml.parse(response);

        return Object.entries(languagesObj).reduce((acc, [key, val]) => {
          return {
            ...acc,
            [key]: {
              text: key,
              color: val['color'],
            },
          };
        }, {});
      });

      cache.set('languages', languages);
    }

    return languages;
  }
}

export default LanguageResolver;
