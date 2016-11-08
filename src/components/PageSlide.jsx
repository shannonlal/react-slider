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

    let cssClasses = `slideVisible`

    return (
        <div className={cssClasses} onClick={this.props.onChange}>
          
            {this.props.children}

        </div>
    );
  }
};

export default PageSlide;