import { gql } from 'apollo-server'

import exampleSchema from "./example";

const typeDefs = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

const schemas = [
    typeDefs,
    exampleSchema
];

export default schemas
