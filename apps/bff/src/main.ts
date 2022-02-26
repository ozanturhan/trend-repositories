import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import responseCachePlugin from 'apollo-server-plugin-response-cache';

import schema from './schema';
import dataSources from './dataSources';
import { initCache } from './utils/cache';
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    schema,
    dataSources,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground,
      responseCachePlugin(),
    ],
  });
  await server.start();
  server.applyMiddleware({ app, path: '/' });

  await new Promise<void>((resolve) => app.listen({ port: 3333 }, resolve));

  console.log(`🚀 Server ready at http://localhost:3333${server.graphqlPath}`);
}

(async () => {
  initCache();
  await startApolloServer();
})();
