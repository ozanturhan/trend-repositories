import { StyledPagination } from './style';
import { Button } from '../../atoms';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

const Pagination: FC<{ total: number }> = ({ total }) => {
  const router = useRouter();

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (router?.query['page']) {
      setPage(+router.query['page']);
    }
  }, [router?.query]);

  const totalPage = Math.ceil(total / 20);
  const previous = page === 1 ? page : page - 1;
  const next = page + 1 < totalPage ? page + 1 : page;

  return (
    <StyledPagination>
      <Button
        data-cy="previous-page"
        disabled={previous === 1 && page === 1}
        href={{
          pathname: '/',
          query: { ...router.query, page: previous },
        }}
      >
        {`< Prev`}
      </Button>

      <Button
        data-cy="next-page"
        disabled={next === totalPage && page === totalPage}
        href={{
          pathname: '/',
          query: { ...router.query, page: next },
        }}
      >
        {`Next >`}
      </Button>
    </StyledPagination>
  );
};

export default Pagination;
