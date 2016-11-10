import './PageSlider.scss';

import React from 'react';


/**
 *  @desc The following is the navigation indicator for the slider.  It will 
 * require 3 params to:
 * 
 * @param navigationClassName - class name to use
 * @param navigationType - left navigation or right navigation
 * @param navigationClicked - function to be called when navigation clicked
 */
class NavigationIndicator extends React.Component{

  constructor( props ){
    super(props);
    this.clicked = this.clicked.bind( this );
  }

  clicked(){
      console.log( 'Calling Navigation Clicked',  this.props.navigationType );
      this.props.navigationClicked( this.props.navigationType);
  }

  componentDidUpdate(){
    console.log( 'Properties updated', this.props);
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render(){
    return (
        <div className={this.props.navigationClassName} 
                onClick={this.clicked}>
        </div>
    );
  }
};


NavigationIndicator.propTypes = {
      navigationClassName: React.PropTypes.string.isRequired,
      navigationType: React.PropTypes.oneOf( ['left', 'right']),
      navigationClicked: React.PropTypes.func.isRequired
  }
export default NavigationIndicator;