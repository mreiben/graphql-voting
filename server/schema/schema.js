const _ = require('lodash');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const RootQueryType = require('./types/root_query_type');
const mutations = require('./mutations/mutations');

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: mutations
});
