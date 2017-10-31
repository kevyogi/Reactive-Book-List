import React from 'react';

const Book = ( { title, author } ) => {
  return (
    <div className="book">
      <br/>
      <div>Title: { title }</div>
      <div>Author: { author }</div>
      <br/>
    </div>
  );
}

export default Book;