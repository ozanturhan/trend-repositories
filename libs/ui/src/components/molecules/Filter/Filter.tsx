import { Button } from '../../atoms';
import { ButtonContainer, SelectContainer, StyledFilter } from './style';
import { FC, SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import { Language } from '@trend-repositories/api-interfaces';

interface FilterProps {
  languages: Language[];
}

const Filter: FC<FilterProps> = ({ languages }) => {
  const router = useRouter();
  const { filter, language, date } = router.query;

  const handleLanguageChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    router.push({
      pathname: '/',
      query: { ...router.query, language: event.currentTarget.value, page: 1 },
    });
  };

  const handleDateChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    router.push({
      pathname: '/',
      query: { ...router.query, date: event.currentTarget.value, page: 1 },
    });
  };

  return (
    <StyledFilter>
      <ButtonContainer>
        <Button
          active={filter !== 'star'}
          href={{
            pathname: '/',
            query: { ...router.query, filter: 'all' },
          }}
        >
          Repositories
        </Button>
        <Button
          data-cy="filter-star"
          active={filter === 'star'}
          href={{
            pathname: '/',
            query: { ...router.query, filter: 'star' },
          }}
        >
          Favorite Repositories
        </Button>
      </ButtonContainer>

      <SelectContainer>
        <select
          data-cy="language-selection"
          aria-label="language-selection"
          onChange={handleLanguageChange}
          value={language}
        >
          <option value="all">All Language</option>
          {languages.map((lang) => (
            <option key={lang.text} value={lang.text}>
              {lang.text}
            </option>
          ))}
        </select>

        <select
          data-cy="date-selection"
          aria-label="date-selection"
          onChange={handleDateChange}
          value={date}
        >
          <option hidden>Date Range</option>
          <option value="today">Today</option>
          <option value="last_week">Last week</option>
          <option value="last_month">Last month</option>
        </select>
      </SelectContainer>
    </StyledFilter>
  );
};

export default Filter;
