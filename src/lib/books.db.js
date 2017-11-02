const booksFromFakeDB = [{
    _id : 1,
    title : 'Talion: The Revenant from DB',
    author : 'Michael A. Stackpole'
  },
  {
    _id : 2,
    title : 'Ready Player One from DB',
    author : 'Ernest Cline'
  },
  {
    _id : 3,
    title : 'Enders Game from DB',
    author : 'Orson Scott Card'
  }
];

export const getBooksFromFakeXHR = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(booksFromFakeDB), 500);
});

export const addBookToFakeXHR = (book) => new Promise((resolve, reject) => {
  setTimeout(() => {
    book._id = Math.random();
    booksFromFakeDB.push(book);
    resolve(book);
  }, 500);
});

export const getBookByIdFromFakeXHR = (bookId) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const bookResponse = booksFromFakeDB.find(book => book._id === bookId);
    if (bookResponse) resolve(bookResponse);
    else reject({status: 404, message: 'Book Not Found'});
  }, 500);
});
