import { gql } from 'apollo-server';

const typeDefs = gql`
    # Queries
    extend type Query {
      books: [Book]
    }
  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }
`;

export default typeDefs;