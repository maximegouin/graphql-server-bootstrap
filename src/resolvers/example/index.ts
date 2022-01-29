import {books} from './__mocks__/index'

const resolvers = {
    Query: {
      books: () => books,
    },
};

export default resolvers;