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
  
  switchSlide(){
      
      //1. TODO Need to switch state.  
      //Switch state before load
      //2. Load pages from 
  }


  
  render(){

    return (
          <div className="pageSlider">
            <PageSlide  sliderTitle="Slide 1" sliderDescription="Hello World Description 1" slideVisible="false" />
            <PageSlide  sliderTitle="Slide 2" sliderDescription="Hello World Description 2" slideVisible="true" />
            <PageSlide  sliderTitle="Slide 3" sliderDescription="Hello World Description 3" slideVisible="false" />
            <button id="switch" >Switch</button> 
          
          </div>
    );
  }
};

export default Slider;