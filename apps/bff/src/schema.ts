import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers,
});
export default schema;
