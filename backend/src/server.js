import * as fs from 'fs'
import { createSchema, createYoga } from 'graphql-yoga'
import {UserModel, MapModel} from './models'
import express from 'express'
import path from 'path'

import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';

const server = express()    

const yoga = createYoga({
  schema: createSchema({
  typeDefs: fs.readFileSync('./src/schema.graphql', 'utf-8'),
  resolvers: {
    Query,
    Mutation,   
  },
  }),
  context: {
    MapModel,
    UserModel,
  },
  graphqlEndpoint: '/',
});

if (process.env.NODE_ENV === "production") {
  console.log("enter to production field")
  const __dirname = path.resolve();
  server.use(express.static(path.join(__dirname, "../frontend", "build")));
  server.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
  });
}

server.use('/', yoga);
export default server;
