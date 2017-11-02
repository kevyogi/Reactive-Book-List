import { getBooksFromFakeXHR, addBookToFakeXHR } from '../lib/books.db.js';

export const LOAD_BOOKS = 'LOAD_BOOKS';
export const ADD_BOOK = 'ADD_BOOK';

export const loadBooks = () => {
  console.log('ACTION: loadBooks is invoked')
  //console.log('ACTION: ', books)
  return function(dispatch){
    return getBooksFromFakeXHR().then((books) => {
      dispatch({
        type: LOAD_BOOKS,
        books: books
      });
    });
  }
  // return {
  //   type: LOAD_BOOKS,
  //   books: books
  // }
}

export const addBook = (newBook) => {
  return function(dispatch){
    return addBookToFakeXHR(newBook).then((book) => {
      dispatch({
        type: ADD_BOOK,
        book: book
      });
    });
  }
  // return {
  //   type: ADD_BOOK,
  //   book: book
  // }
}