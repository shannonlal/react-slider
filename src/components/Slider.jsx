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

    /*let leftImage = {
        background-image: 'url(images/left-arrow.png)'
    };

    let rightImage = {
        background-image: 'url(images/right-arrow.png)'
    };*/

    return (
          <div>
            <div className="sliderLeft"></div>
            <PageSlide />
            <div className="sliderRight"></div>
          </div>
    );
  }
};

export default Slider;