const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql;

const PollType = require('.poll_type')

const OptionType = new GraphQLObjectType({
  name: 'PollType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    author: { type: UserType },
    users: { type: new GraphQLList(UserType) },
    options: { type: new GraphQLList(OptionType) }

  })
});

module.exports = PollType;
