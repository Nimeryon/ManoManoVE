var { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Object {
    id: ID!
    name: String!
    size: [String!]
    color: String!
    shape: [[Boolean!]]
  }

  type Query {
    object(id: ID!): Object
    objects: [Object]
  }

  type Mutation {
    createObject(name: String!, size: [String!], color: String!, shape: [[Boolean!]]): Object
    updateObject(id: ID!, name: String!, size: [String!], color: String!, shape: [[Boolean!]]): Boolean
    deleteObject(id: ID!): Boolean
  }
`);

module.exports = schema;