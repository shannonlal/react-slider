import React from 'react';
import PageSlide from './PageSlide';
import NavigationIndicator from './NavigationIndicator';
import NavigationBullet from './NavigationBullet';

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
      slideVisible: [true, false, false],
      startSlide: true,
      endSlide:false
    };

    this.switchSlide = this.switchSlide.bind( this );
    this.navigationClicked = this.navigationClicked.bind( this );
  }
  
  switchSlide(){
      let nextSlide = this.state.currentSlide+1;

      let slideState = this.state.slideVisible.slice();
      slideState[ nextSlide  ] = true;
      slideState[ nextSlide -1 ] = false;


      this.setState({
        currentSlide: nextSlide,
        slideVisible: slideState,
        startSlide: (nextSlide === 0),
        endSlide: (nextSlide === 3)
        });
  }

  slideVisible(){
    console.log( 'The Id ->' + this.props.slideId );
    let slideVisible = 'slideNotVisible';

    if( this.props.slideVisible  === "true" ){
      slideVisible = 'slideVisible';
    }
  }

  navigationClicked( direction ){
    if( direction === 'right'){

      if( this.state.currentSlide < 3){
        let nextSlide = this.state.currentSlide+1;

        let slideState = this.state.slideVisible.slice();
        slideState[ nextSlide  ] = true;
        slideState[ nextSlide -1 ] = false;

        this.setState({
          currentSlide: nextSlide,
          slideVisible: slideState,
          startSlide: (nextSlide === 0),
          endSlide: (nextSlide === 3)
        });
      }else{
        this.setState({
          currentSlide: 0,
          slideVisible: [true, false, false],
          startSlide: false,
          endSlide: true
        });
      }

    }else{

      if( this.state.currentSlide > 0 ){
        let nextSlide = this.state.currentSlide-1;

        let slideState = this.state.slideVisible.slice();
        slideState[ nextSlide  ] = true;
        slideState[ nextSlide + 1 ] = false;

        this.setState({
          currentSlide: nextSlide,
          slideVisible: slideState,
          startSlide: (nextSlide === 0),
          endSlide: (nextSlide === 3)
        });
      }else{
        this.setState({
          currentSlide: 3,
          slideVisible: [fa,se, false, true],
          startSlide: true,
          endSlide: false
        });
      }
    }
  }

  render(){

    return (
      <div>
          <div className="pageSlider">
            <div className="slideSection">
              <NavigationIndicator 
                            navigationClassName="navigationLeft" 
                            positionFlag={this.state.startSlide} 
                            navigationType="left" 
                            displayIndicator={this.state.startSlide}
                            navigationClicked={this.navigationClicked}/>
                <div className="slides">
                  <PageSlide  slideVisible={this.state.slideVisible[0]} onChange={this.switchSlide} slideId="1"> 
                        <p>Inside Slide {this.state.currentSlide}</p>
                    
                  </PageSlide>
                  <PageSlide  slideVisible={this.state.slideVisible[1]} onChange={this.switchSlide} slideId="2">
                    <div>
                      <p>Hello Slide 2 {this.state.currentSlide}</p>
                      <p>Hello World 2</p>
                    </div>
                  </PageSlide>
                  <PageSlide  slideVisible={this.state.slideVisible[2]} onChange={this.switchSlide} slideId="3">
                    <div>
                      <p>Hello Slide 3 {this.state.currentSlide}</p>
                      <p>Hello World 3</p>
                    </div>
                  </PageSlide>  
                </div>
              <NavigationIndicator 
                      navigationClassName= "navigationRight" 
                      positionFlag={this.state.endSlide} 
                      navigationType="right"
                      displayIndicator={this.state.endSlide}
                      navigationClicked={this.navigationClicked}/>
            </div>
            <div className="paginationSection">
              <NavigationBullet />
            </div>

            </div>
          </div>

    );
  }
};

export default Slider;