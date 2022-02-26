import { Icon, Language, Link, Text } from '@ui/atoms';
import { Info, StyledRepositoryInformatin } from './style';
import { FC } from 'react';
import { GithubRepository } from '@trend-repositories/api-interfaces';

type RepositoryInformationProps = Partial<
  Pick<
    GithubRepository,
    | 'name'
    | 'stars'
    | 'license'
    | 'language'
    | 'languageColor'
    | 'forks'
    | 'url'
  >
>;

const RepositoryInformation: FC<RepositoryInformationProps> = ({
  url,
  stars,
  license,
  languageColor,
  forks,
  language,
  name,
}) => {
  return (
    <StyledRepositoryInformatin>
      {language && <Language color={languageColor}>{language}</Language>}

      {license && (
        <Info>
          <Icon name="licence" fill="#cdcdcd" />
          <Text size="small">{license}</Text>
        </Info>
      )}

      <Info>
        <Link href={`${url}/stargazers`} data-testid="stargazers-url">
          <Icon name="star" fill="#cdcdcd" />
          <Text size="small">{stars}</Text>
        </Link>
      </Info>

      <Info>
        <Link href={`${url}/network/members.${name}`} data-testid="forks-url">
          <Icon name="fork" fill="#cdcdcd" />
          <Text size="small">{forks}</Text>
        </Link>
      </Info>
    </StyledRepositoryInformatin>
  );
};

export default RepositoryInformation;
