/*
1. Take the books array and generate an array called recentBooks
which stores objects with ONLY the title and author properties 
of books published in the last 5 years. The author property 
should include both the first name and last name of the author.
*/
const books = [
  {
    id: 1,
    title: 'the God afther',
    author: {
            first_name: 'kwame',
            lastname: 'adu'
    },
    id: 2,
    title: 'the God afther',
    author: {
            first_name: 'maxwell',
            lastname: 'A'
    },
    id: 3,
    title: 'the God afther',
    author: {
            first_name: 'kwame',
            lastname: 'adu'
    },
    id: 4,
    title: 'the God afther',
    author: {
            first_name: 'kwame',
            lastname: 'adu'
    }
  },
];

const recentBooks = books.filter((book) => book.author.first_name)
console.log(recentBooks)
