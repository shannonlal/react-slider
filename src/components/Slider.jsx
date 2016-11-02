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
      numberOfSlides: 0,
      slideVisible: [true, false, false]
    };

    this.switchSlide = this.switchSlide.bind( this );
  }

  componentWillMount(){
    console.log("Component Will Mount");
  }

  componentDidMount(){
    console.log( "Component Did Mount");
  }

  componentDidUpdate(){
    console.log("Slider Did Update", this.state.slideVisible);
  }
  
  switchSlide(){
      console.log( 'Switching Slide');
      let nextSlide = this.state.currentSlide+1;


      let slideState = this.state.slideVisible.splice(0, this.state.slideVisible.length );

       console.log( 'Current slider State', slideState);
       console.log( 'Next Slide '+ nextSlide);

      slideState[ nextSlide -2 ] = false;
      slideState[ nextSlide -1 ] = true;

      console.log( 'Updating new Slider State', slideState);

      this.setState({
        currentSlide: nextSlide,
        sldieVisible: slideState
        });
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
            <PageSlide  slideVisible={this.state.slideVisible[0]} onChange={this.slideVisible} slideId="1"> 
                  <p>Inside Slide {this.state.currentSlide}</p>
              
            </PageSlide>
            <PageSlide  slideVisible={this.state.slideVisible[1]} onChange={this.slideVisible} slideId="2">
              <div>
                <p>Hello Slide 2 {this.state.currentSlide}</p>
                <p>Hello World 2</p>
              </div>
            </PageSlide>
            <PageSlide  slideVisible={this.state.slideVisible[2]} onChange={this.slideVisible} slideId="3">
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