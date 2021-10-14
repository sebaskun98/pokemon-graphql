const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("./resolvers/index");
const schema = require("./src/schema.graphql");

const server = new GraphQLServer({
    typeDefs: schema,
    resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
