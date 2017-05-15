const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const Poll = mongoose.model('poll');
const User = mongoose.model('user');
const PollType = require('./poll_type');
const UserType = require('./user_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPoll: {
      type: PollType,
      args: {
        title: { type: GraphQLString },
        author: { type: UserType }
      },
      resolve(parentValue, { title, author }) {
        return (new Poll({ title, author, options })).save()
      }
    }
    //
  }
});

module.exports = mutation;
