import TrendRepositoriesResolver from './TrendRepositoriesResolver';
import LanguageResolver from './LanguageResolver';

const index = {
  Query: {
    TrendRepositories: TrendRepositoriesResolver.TrendRepositories,
    Languages: LanguageResolver.Languages,
  },
  Repository: {
    languageColor: LanguageResolver.LanguageColor,
  },
};
export default index;
