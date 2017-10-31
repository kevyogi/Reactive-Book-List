import React from 'react';
//import Book from './BookListItem';

const BookFilterInput = ( props ) => {
//console.log(props);
  return (
    <div>
      <h4>Type to Filter</h4>
      <form>
        <input type="text" placeholder="title or author" onChange={props.setFilter}/>
      </form>
    </div>
  )
}

export default BookFilterInput;