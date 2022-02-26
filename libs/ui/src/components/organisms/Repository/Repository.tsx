import { FC } from 'react';
import { GithubRepository } from '@trend-repositories/api-interfaces';
import { Button, Icon, Link, Text } from '@ui/atoms';
import { RepositoryInformation, Topics } from '@ui/molecules';
import { RepositoryTitleContainer, StyledRepository } from './style';

const Repository: FC<GithubRepository & { onStar: () => void }> = ({
  name,
  description,
  stars,
  forks,
  license,
  languageColor,
  language,
  url,
  topics,
  isStarred,
  onStar,
}) => {
  return (
    <StyledRepository data-cy="repository">
      <RepositoryTitleContainer>
        <Link href={url}>{name}</Link>
        <Button
          data-cy="star-button"
          data-testid="star-button"
          onClick={onStar}
          color={isStarred ? 'blue_2' : undefined}
        >
          <Icon name="star" />
          Star
        </Button>
      </RepositoryTitleContainer>

      <Text elementType="p" size="medium">
        {description}
      </Text>
      <Topics topics={topics} />
      <RepositoryInformation
        name={name}
        url={url}
        stars={stars}
        license={license}
        forks={forks}
        languageColor={languageColor}
        language={language}
      />
    </StyledRepository>
  );
};
export default Repository;
