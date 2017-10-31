import React from 'react';
//import Book from './BookListItem';

const BookFilterInput = ( props ) => {
//console.log(props);
  return (
    <div>
      <form>
        <input type="text" placeholder="title/author" onChange={props.setFilter}/>
      </form>
    </div>
  )
}

export default BookFilterInput;