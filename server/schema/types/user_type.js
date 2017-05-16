const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql;

const PollType = require('./poll_type');
//console.log(PollType);

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    name: { type: GraphQLString },
    _id: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    polls: { type: new GraphQLList(PollType) }
  })
});

module.exports = UserType;


// const UserType = require('./user_type');
// console.log(UserType);
//
// const PollType = new GraphQLObjectType({
//   name: 'PollType',
//   fields: () => ({
//     id: { type: GraphQLID },
//     title: { type: GraphQLString },
//     author: { type: UserType },
//     users: { type: new GraphQLList(UserType) },
//     options: { type: new GraphQLList(GraphQLString) }
//   })
// });
//
// module.exports = PollType;
