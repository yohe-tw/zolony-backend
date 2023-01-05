import * as fs from 'fs'
import { createServer } from 'node:http'
import { createSchema, createYoga } from 'graphql-yoga'
import {UserModel, MapModel} from './models'
import path from "path"
import express from "express"

import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';

const app = express();

    
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
app.use(express.static(path.join(__dirname, "../frontend", "build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
});

const APP_PORT = process.env.PORT + '/api'
app.listen(APP_PORT, () => { 
  console.log(`Example app listening on port ${APP_PORT}!`)
});

export default server;
