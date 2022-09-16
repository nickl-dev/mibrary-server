import { v4 as uuidv4 } from 'uuid';

export default [
  { 
    id: uuidv4(), 
    name: "John", 
    email_address: "john1@gmail.com", 
    password: 'personal-reading-list', 
    books: [
      {
        title: 'The Alchemist', 
        author: 'Paulo Coehlo', 
        genre: 'Drama, Quest, Fantasy Fiction, Adventure Fiction',
        description: 'Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations. Paulo Coelho\'s masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago\'s journey teaches us about the essential wisdom of listening to our hearts, of recognizing opportunity and learning to read the omens strewn along life\'s path, and, most importantly, to follow our dreams.'
      }
    ]
  }
];