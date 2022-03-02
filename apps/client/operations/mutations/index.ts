import createStarRepository from './starRepository';
import { favoriteRepositoriesVar } from '@app/lib';

export const Mutations = {
  starRepository: createStarRepository(favoriteRepositoriesVar),
};
