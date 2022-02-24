import { useQuery } from '@apollo/client';
import { GET_LANGUAGES } from '../../graphql';
import { Language } from '@trend-repositories/api-interfaces';

export const useGetLanguages = () => {
  const { data, loading } = useQuery(GET_LANGUAGES);

  return {
    languages: (data?.Languages as Language[]) || [],
    loading,
  };
};
