import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import {
  GET_FAVORITE_REPOSITORIES,
  GET_TREND_REPOSITORIES,
} from '../../graphql';
import { useEffect, useState } from 'react';

export const useGetRepositories = () => {
  const router = useRouter();

  const [params, setParams] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      setParams({
        language: router.query.language,
        date: router.query.date,
        page: +router.query.page || 1,
      });
    }
  }, [router.isReady, router.query]);

  const isStar = !!router.query.filter && router.query.filter !== 'all';

  const { data: repositories, loading } = useQuery(GET_TREND_REPOSITORIES, {
    variables: {
      params,
    },
    skip: isStar || !params,
  });

  const { data: favorites } = useQuery(GET_FAVORITE_REPOSITORIES);

  return {
    response: {
      items:
        router.query.filter === 'star'
          ? favorites?.FavoriteRepositories
          : repositories?.TrendRepositories?.items,
      total: repositories?.TrendRepositories?.total,
    },
    loading,
    filter: isStar ? 'star' : 'all',
  };
};
