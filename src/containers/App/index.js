import React, { Component } from 'react';
import NewBookForm from '../NewBookForm';
import BookList from '../BookList';
import AppTitle from '../../components/BookListAppTitle';
import BookFilterInput from '../../components/BookFilterInput';
import {
  getBooksFromFakeXHR,
  addBookToFakeXHR,
  getBookByIdFromFakeXHR
} from '../../lib/books.db.js';

class App extends Component {
  constructor(){
    super();

    this.setFilter = this.setFilter.bind(this);

    this.state = {
      books: [],
      testBooks: [],
      filteredBooks: [],
      AppTitle: 'Reactive Book List'
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
        books: [...this.state.books],
        testBooks: [...this.state.books]
      });
    })
  }

  setFilter(event){
    if(event.target.value){
      let filteredBooks = this.state.books.filter((book) => {
        let title = book.title.toLowerCase();
        let author = book.author.toLowerCase();
        return title.includes((event.target.value).toLowerCase()) || author.includes((event.target.value).toLowerCase());
      });
      this.setState({
        testBooks: filteredBooks
      });
    }else{
      this.setState({
        testBooks: [...this.state.books]
      })
    }
  }

  componentWillMount(){
    getBooksFromFakeXHR()
    .then((fakeBooks) => {
      this.setState({
        books: fakeBooks,
        testBooks: fakeBooks
      })
    })
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="App">

        <AppTitle title={this.state.AppTitle}/>

        <BookFilterInput setFilter={this.setFilter}/>

        <BookList books={this.state.testBooks} />

        <NewBookForm
          prompt="Fill in Title and Author"
          addNewBook={this.addNewBook.bind(this)}
        />


      </div>
    );
  }
}

export default App;
