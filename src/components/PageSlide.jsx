import './PageSlider.scss';

import React from 'react';

/**
 *  Main Page Slider
 */
class PageSlide extends React.Component{

  constructor( props ){
    super(props);

  }

  componentWillMount(){
    console.log("Component Will Mount");
  }

  componentDidMount(){
    console.log( "Component Did Mount");
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render(){

    console.log( 'Shannon ', this.props.slideVisible );

    let slideVisible = 'slideNotVisible'
    if( this.props.slideVisible  === "true" ){
      slideVisible = 'slideVisible';
    }

    return (
        <div className={slideVisible} >
            <h1><b>{this.props.sliderTitle}</b></h1>
            <h1><i>{this.props.sliderDescription}</i></h1>
        </div>
    );
  }
};

export default PageSlide;