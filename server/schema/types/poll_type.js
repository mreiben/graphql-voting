const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql;

const UserType = require('./user_type')

const PollType = new GraphQLObjectType({
  name: 'PollType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    author: { type: UserType },
    users: { type: new GraphQLList(UserType) },
    options: { type: new GraphQLList(GraphQLString) }
  })
});

module.exports = PollType;
