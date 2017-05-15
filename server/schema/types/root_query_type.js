const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const PollType = require('./poll_type');
const UserType = require('./user_type');
const Poll = mongoose.model('poll');
const User = mongoose.model('user');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    polls: {
      type: new GraphQLList(PollType),
      resolve() {
        return Poll.find({});
      }
    },
    poll: {
      type: PollType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Poll.findById(id);
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return Users.find({});
      }
    },
    user: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return User.findById(id);
      }
    }
  })
});

module.exports = RootQuery;
