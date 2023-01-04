import * as fs from 'fs'
import { createServer } from 'node:http'
import { createSchema, createYoga } from 'graphql-yoga'
import {UserModel, MapModel} from './models'
import path from "path"

import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';

    
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

const server = createServer(yoga);

const __dirname = path.resolve();
server.use(express.static(path.join(__dirname, "../frontend", "build")));
server.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
});


export default server;