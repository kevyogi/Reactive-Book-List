import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBooks } from '../../actions/books';
import NewBookForm from '../NewBookForm';
import BookList from '../BookList';
import AppTitle from '../../components/BookListAppTitle';
import BookFilterInput from '../../components/BookFilterInput';


class App extends Component {
  constructor(){
    super();

    this.setFilter = this.setFilter.bind(this);

    this.state = {
      books: [],
      displayBooks: [],
      filteredBooks: [],
      AppTitle: 'Reactive Book List'
    }
  }

  //addNewBook(book){
    // let newBook = {
    //   title: bookTitle,
    //   author: bookAuthor
    // }
    // addBookToFakeXHR(newBook)
    // .then(() => {
    //   this.setState({
    //     books: this.state.books,
    //     displayBooks: this.state.books
    //   });
    // })
  //}

  setFilter(event){
    if(event.target.value){
      let filteredBooks = this.state.books.filter((book) => {
        let title = book.title.toLowerCase();
        let author = book.author.toLowerCase();
        return title.includes((event.target.value).toLowerCase()) || author.includes((event.target.value).toLowerCase());
      });
      this.setState({
        displayBooks: filteredBooks
      });
    }else{
      this.setState({
        displayBooks: this.state.books
      })
    }
  }

  componentWillMount(){
  }

  componentDidMount(){
    this.props.loadBooks()

    // getBooksFromFakeXHR()
    // .then((fakeBooks) => {
    //   console.log('invoking function loadBooks in props')
    //   this.props.loadBooks(fakeBooks)
    //   // this.setState({
    //   //   books: fakeBooks,
    //   //   displayBooks: fakeBooks
    //   // })
    // })

  }

  render() {
    console.log('line 74', this.props.books);
    return (
      <div className="App">

        <AppTitle title={this.state.AppTitle}/>

        <BookFilterInput setFilter={this.setFilter}/>

        <BookList books={this.props.books} />

        <NewBookForm
          // prompt="Fill in Title and Author"
          // addNewBook={this.addNewBook.bind(this)}
        />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.bookList
  }
}

//if action is async you don't need to dispatch again by loadBooks
const mapDispatchToProps = (dispatch) => {
  return {
    loadBooks: () => {
      console.log('dispatching the action')
      dispatch(loadBooks());
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;

