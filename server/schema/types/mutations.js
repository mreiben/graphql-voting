const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
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
        author: { type: GraphQLID }
      },
      resolve(parentValue, { title, author }) {
        return (new Poll({ title, author })).save()
      }
    },
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        //id: { type: GraphQLID },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { name, email, password, polls }){
        return (new User({ name, email, password, polls })).save();
      }
    }
    //
  }
});

module.exports = mutation;
