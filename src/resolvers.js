import users from "./db";

const resolvers = {
  Query: {
    user: (parent, { email }, context, info) => {
      return users.find(user => user.email === email);
    },
    users: (parent, args, context, info) => {
      return users;
    }
  },

  Mutation: {
    createUser: (parent, { id, name, email, password }, context, info) => {
      const userAlreadyExists = users.some(user => user.email === email);
      if (userAlreadyExists) throw new Error ('User already exists.');
      
      const newUser = { id, name, email, password };

      users.push(newUser);

      return newUser;
    },
    // updateUser: (parent, { id, name, email, age }, context, info) => {
    //   const newUser = users.find(user => user.id === id);

    //   newUser.name = name;
    //   newUser.email = email;
    //   newUser.age = age;

    //   return newUser;
    // },
    deleteUser: (parent, { email }, context, info) => {
      const userIndex = users.findIndex(user => user.email === email);

      if (userIndex === -1) throw new Error("User not found.");

      const deletedUsers = users.splice(userIndex, 1);

      return deletedUsers[0];
    },

    createBook: (parent, { email, title, author, genre, description }, context, info) => {
      const newBook = { title, author, genre, description };
      const user = users.find(user => user.email === email)

      const bookAlreadyExists = user.books.some(book => book.title.toLowerCase() === newBook.title.toLowerCase())
      if (bookAlreadyExists) throw new Error('Book already exists.')
      
      user.books.push(newBook)
    }
  }
};

export default resolvers;