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
            <PageSlide  sliderTitle="Slide 1" sliderDescription="Hello World Description 1" slideVisible="false"> 
                  <p>Inside Slide</p>
              
            </PageSlide>
            <PageSlide  slideVisible="true" >
              <div>
                <p>Hello Slide 2</p>
                <p>Hello World 2</p>
              </div>
            </PageSlide>
            <PageSlide  sliderTitle="Slide 3" sliderDescription="Hello World Description 3" slideVisible="false" >
              <div>
                <p>Hello Slide 2</p>
                <p>Hello World 2</p>
              </div>
            </PageSlide>  
            <button id="switch" >Switch</button> 
          
          </div>
    );
  }
};

export default Slider;