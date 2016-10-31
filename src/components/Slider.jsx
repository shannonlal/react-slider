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
    this.state = {
      currentSlide :0,
      numberOfSlides: 0
    };

    this.switchSlide = this.switchSlide.bind( this );
  }

  componentWillMount(){
    console.log("Component Will Mount");
  }

  componentDidMount(){
    console.log( "Component Did Mount");
  }
  
  switchSlide(){
      console.log( 'Switching Slide');
      let nextSlide = this.state.currentSlide+1;
      this.setState({currentSlide: nextSlide});
  }

  slideVisible(){
    console.log( 'The Id ->' + this.props.slideId );
    let slideVisible = 'slideNotVisible';

    if( this.props.slideVisible  === "true" ){
      slideVisible = 'slideVisible';
    }
  }


  
  render(){

    return (
          <div className="pageSlider">
            <PageSlide  slideVisible="true" onChange={this.slideVisible} slideId="1"> 
                  <p>Inside Slide {this.state.currentSlide}</p>
              
            </PageSlide>
            <PageSlide  slideVisible="true" onChange={this.slideVisible} slideId="2">
              <div>
                <p>Hello Slide 2 {this.state.currentSlide}</p>
                <p>Hello World 2</p>
              </div>
            </PageSlide>
            <PageSlide  slideVisible="true" onChange={this.slideVisible} slideId="3">
              <div>
                <p>Hello Slide 3 {this.state.currentSlide}</p>
                <p>Hello World 3</p>
              </div>
            </PageSlide>  
            <div className="switchButton">
              <button id="switch" onClick={ this.switchSlide }>Switch</button> 
            </div>
          </div>

    );
  }
};

export default Slider;