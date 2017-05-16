const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql;

const PollType = new GraphQLObjectType({
  name: 'PollType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    users: { type: new GraphQLList(GraphQLString) },
    options: { type: new GraphQLList(GraphQLString) }
  })
});

module.exports = PollType;
