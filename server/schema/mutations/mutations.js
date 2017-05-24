const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const mongoose = require('mongoose');
const Poll = mongoose.model('poll');
const User = mongoose.model('user');
const PollType = require('../types/poll_type');
const UserType = require('../types/user_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPoll: {
      type: PollType,
      args: {
        title: { type: GraphQLString },
        _author: { type: GraphQLID }
      },
      resolve(parentValue, { title, author }) {
        return User.findById(author)
          .then(author => {
            const poll = new Poll({title, author})
            console.log(poll)
            return poll.save().then((poll) => poll);
          });
      }
    },
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { name, email, password, polls }){
        return (new User({ name, email, password, polls })).save();
      }
    },
    addUserToPoll: {
      type: PollType,
      args: {
        pollId: { type: GraphQLString },
        userId: { type: GraphQLString }
      },
      resolve(parentValue, { pollId, userId }) {
        return Poll.addUserToPoll(pollId, userId);
      }
    }
    //
  }
});

module.exports = mutation;
