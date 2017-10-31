import React, { Component } from 'react';

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
    this.props.addNewBook(this.state.titleInput, this.state.authorInput);
  }

  render(){
    return (
      <div>
        <h4>{this.props.prompt}</h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="title" onChange={this.handleChangeTitle.bind(this)} />
          <input type="text" placeholder="author" onChange={this.handleChangeAuthor.bind(this)}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }

}

export default NewBookForm;