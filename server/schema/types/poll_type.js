const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql;
const mongoose = require('mongoose');
const Poll = mongoose.model('poll');
const User = mongoose.model('user');

const PollType = new GraphQLObjectType({
  name: 'PollType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    _author: {
      type: require('./user_type'),
      resolve(parentValue){
        console.log(parentValue._id)
        return Poll.findById(parentValue).populate('user')
          .then(poll => {
            console.log(poll)
            return poll.author
          });
      }
    },
    users: {
      type: new GraphQLList(require('./user_type')),
      resolve(parentValue){
        return Poll.findUsers(parentValue.id);
      }
    },
    options: { type: new GraphQLList(GraphQLString) }
  })
});

module.exports = PollType;
