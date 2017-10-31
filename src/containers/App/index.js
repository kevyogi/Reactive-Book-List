import React, { Component } from 'react';
import NewBookForm from '../NewBookForm';
import BookList from '../BookList';
import {
  getBooksFromFakeXHR,
  addBookToFakeXHR,
  getBookByIdFromFakeXHR
} from '../../lib/books.db.js';

class App extends Component {
  constructor(){
    super();

    this.state = {
      books: []
    }
  }

  addNewBook(bookTitle, bookAuthor){
    let newBook = {
      title: bookTitle,
      author: bookAuthor
    }

    this.setState({
      books: [...this.state.books, newBook]
    });
  }

  componentWillMount(){
    getBooksFromFakeXHR()
    .then((fakeBooks) => {
      this.setState({
        books: fakeBooks
      })
    })
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        <NewBookForm
          prompt="Fill in Title and Author"
          addNewBook={this.addNewBook.bind(this)}
        />

        <BookList books={this.state.books} />

      </div>
    );
  }
}

export default App;
