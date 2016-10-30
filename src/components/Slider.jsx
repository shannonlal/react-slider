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
          <div className="pageSlider">
            <PageSlide  sliderTitle="Slide 1" sliderDescription="Hello World Description 1" slideVisible="false" />
            <PageSlide  sliderTitle="Slide 2" sliderDescription="Hello World Description 2" slideVisible="true" />
            <PageSlide  sliderTitle="Slide 3" sliderDescription="Hello World Description 3" slideVisible="false" />
          </div>
    );
  }
};

export default Slider;