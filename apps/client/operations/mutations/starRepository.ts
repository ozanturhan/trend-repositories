import { gql, ReactiveVar } from '@apollo/client';
import { GithubRepository } from '@trend-repositories/api-interfaces';
import { cache } from '@app/lib';

export default function createStarRepository(
  favoriteRepositoriesVar: ReactiveVar<GithubRepository[]>
) {
  return (repository: GithubRepository) => {
    const favoriteRepositories = favoriteRepositoriesVar();

    const existingRepository = favoriteRepositories.find(
      (favoriteRepo) => favoriteRepo.id === repository.id
    );

    if (existingRepository) {
      favoriteRepositoriesVar(
        favoriteRepositories.filter((fr) => fr.id !== repository.id)
      );
    } else {
      favoriteRepositoriesVar(
        favoriteRepositories.concat([{ ...repository, isStarred: true }])
      );
    }

    cache.writeFragment({
      id: `Repository:${repository.id}`,
      fragment: gql`
        fragment StarFragment on Repository {
          isStarred
        }
      `,
      data: {
        isStarred: !repository.isStarred,
      },
    });

    localStorage.setItem(
      'favorites',
      JSON.stringify(favoriteRepositoriesVar())
    );
  };
}
