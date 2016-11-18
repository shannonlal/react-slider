import React from 'react';
import Slider from 'react-slider';
import './style.scss';


/**
 *  Main Page Slider
 */
class Swiper extends React.Component{
  //state...
  //lifecycle -- hooks

  constructor( props ){
    super(props);
    this.state = {
    };
    

  }

  render(){
  	let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      swipeToSlide:true
    }
    return (
        <div >
            <Slider {...settings}>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
                <div><h3>5</h3></div>
                <div><h3>6</h3></div>
            </Slider>
        </div>

    );
  }
};


export default Swiper;