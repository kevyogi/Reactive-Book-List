import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../../actions/books';

class NewBookForm extends Component{
  constructor(props){
    super(props);

    this.state = {
        titleInput: '',
        authorInput: ''
    }
  }

  handleChangeTitle(event){
    this.setState({
      titleInput:event.target.value
    });
  }

  handleChangeAuthor(event){
    this.setState({
      authorInput:event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    let newBook = {
      title: this.state.titleInput,
      author: this.state.authorInput
    }
    this.props.addBook(newBook);
    this.setState({
      titleInput: '',
      authorInput: ''
    })
  }

  render(){
    console.log(this.props.addBook);
    return (
      <div>
        <h4>{this.props.prompt}</h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="title" value={this.state.titleInput} onChange={this.handleChangeTitle.bind(this)} />
          <input type="text" placeholder="author" value={this.state.authorInput} onChange={this.handleChangeAuthor.bind(this)}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (book) => {
      dispatch(addBook(book))
    }
  }
}

const ConnectedNewBookForm = connect(
  null,
  mapDispatchToProps
)(NewBookForm)

export default ConnectedNewBookForm;