import './PageSlider.scss';

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/**
 *  Main Page Slider
 */
class PageSlide extends React.Component{

  constructor( props ){
    super(props);
    console.log( ' Id '+ this.props.slideId );

  }


  /**
   * render
   * @return {ReactElement} markup
   */
  render(){

    console.log( 'Shannon ', this.props.slideVisible );

    let slideVisible = 'slideNotVisible';
    if( this.props.slideVisible === true ){
      slideVisible = 'slideVisible';
    }

    return (
        <div className={slideVisible} onClick={this.props.onChange}>
          <ReactCSSTransitionGroup transitionName="example" 
          transitionEnterTimeout={2000} transitionLeaveTimeout={300} 
          transitionAppear={true} transitionAppearTimeout={2000}>
            {this.props.children}
          </ReactCSSTransitionGroup>
        </div>
    );
  }
};

export default PageSlide;