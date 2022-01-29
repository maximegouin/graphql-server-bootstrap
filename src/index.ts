import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import dotenv from 'dotenv';
import http from 'http'

import resolvers from './resolvers'
import schemas from './schemas';

dotenv.config()

const corsOptions = {
  origin: '*',
  credentials: true,
};

const PORT = process.env.PORT || 4000;

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: schemas,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app, path: '/', cors: corsOptions });
  await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}

startApolloServer();