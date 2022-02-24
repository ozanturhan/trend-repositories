import createStarRepository from './starRepository';
import { favoriteRepositoriesVar } from '../../lib/apollo-client';

export const Mutations = {
  starRepository: createStarRepository(favoriteRepositoriesVar),
};
