import React from 'react';
import Book from './Book';

class Slider extends React.Component{
  //state...
  //lifecycle -- hooks

  constructor( props ){
    super(props);
    this.state = {
      books:this.props.books
    };

  }

  componentWillMount(){
    console.log("Component Will Mount");
  }

  componentDidMount(){
    console.log( "Component Did Mount");
  }
  render(){
    return (
          <ul>
            {this.state.books.map( (book)=> {
              return <Book key={book.id} { ...book} />
      
            })}
          </ul>
    );
  }
};

export default Slider;