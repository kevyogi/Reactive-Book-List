import React from 'react';
import Book from '../../components/BookListItem';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {
        books.map((book) => {
          return(
            <Book title={book.title} author={book.author} key={book._id}/>
          );
        })
      }
    </div>
  );
}

export default BookList;