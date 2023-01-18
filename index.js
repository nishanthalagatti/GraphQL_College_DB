import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import fs from "fs";

const resolvers = {};

const server = new ApolloServer({
  typeDefs: fs.readFileSync("./src/schema.graphql", "utf-8"),
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
