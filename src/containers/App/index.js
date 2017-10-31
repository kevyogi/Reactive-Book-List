import React, { Component } from 'react';
import NewBookForm from '../NewBookForm';
import BookList from '../BookList';
import AppTitle from '../../components/BookListAppTitle';
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
    addBookToFakeXHR(newBook)
    .then(() => {
      this.setState({
        books: [...this.state.books]
      });
    })
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

        <AppTitle title="Reactive Book List"/>

        <BookList books={this.state.books} />

        <NewBookForm
          prompt="Fill in Title and Author"
          addNewBook={this.addNewBook.bind(this)}
        />


      </div>
    );
  }
}

export default App;
