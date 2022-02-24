import { Icon, Language, Link, Text } from '../../atoms';
import { Info, StyledRepositoryInformatin } from './style';
import { FC } from 'react';
import { GithubRepository } from '@trend-repositories/api-interfaces';

const RepositoryInformation: FC<
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
> = ({ url, stars, license, languageColor, forks, language, name }) => {
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
        <Link href={`${url}/stargazers`}>
          <Icon name="star" fill="#cdcdcd" />
          <Text size="small">{stars}</Text>
        </Link>
      </Info>

      <Info>
        <Link href={`${url}/network/members.${name}`}>
          <Icon name="fork" fill="#cdcdcd" />
          <Text size="small">{forks}</Text>
        </Link>
      </Info>
    </StyledRepositoryInformatin>
  );
};

export default RepositoryInformation;
