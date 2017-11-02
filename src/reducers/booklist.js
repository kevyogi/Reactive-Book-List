import { LOAD_BOOKS } from '../actions/books';
import { ADD_BOOK } from '../actions/books';

const initialState = [];

//ES6 if state is truthy use state, if state is null set it to initialState
const bookList = (state = initialState, action) => {
  console.log('REDUCERS: activated')
  console.log('REDUCERS: ', action)
  switch (action.type){
    case LOAD_BOOKS:
      console.log("LOADING THE BOOK")
      return [...action.books];
      //return Object.assign({}, state, { bookList: [...action.books] })
    case ADD_BOOK:
      return [...state, action.book];
      //return Object.assign({}, state, {bookList: [...state.bookList, action.book]});
    default:
      return state
  }
}

export default bookList;