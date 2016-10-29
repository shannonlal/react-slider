import React from 'react';
import PageSlide from './PageSlide';

/**
 *  Main Page Slider
 */
class Slider extends React.Component{
  //state...
  //lifecycle -- hooks

  constructor( props ){
    super(props);
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
            <PageSlide />
          </ul>
    );
  }
};

export default Slider;