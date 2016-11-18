import './PageSlider.scss';

import React from 'react';


/**
 *  @desc The following is the navigation bullet for the slider.  It will 
 * require 3 params to:
 * 
 * @param navigationClassName - class name to use
 * @param navigationType - left navigation or right navigation
 * @param navigationClicked - function to be called when navigation clicked
 */
class NavigationBullet extends React.Component{

  constructor( props ){
    super(props);
    this.clicked = this.clicked.bind( this );
  }

  clicked(){
      console.log( 'Calling Navigation Bullet Clicked',  this.props.navigationType );
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

    let navigationSlider = 'navigationNone';

    if( !this.props.displayIndicator){
      if( this.props.navigationType === 'right') {
        navigationSlider = 'navigationRight';
      }else{
        navigationSlider = 'navigationLeft';
      }
    }

    return (
        <div className="navigationBulletStyle navigationBulletStyle-fillup">
            <ul>
                <li className="current"><a href="#">Home</a></li>
                <li><a href="#" onClick={this.clicked}>About</a></li>
                <li><a href="#" onClick={this.clicked}>Products</a></li>
                <li><a href="#" onClick={this.clicked}>Portfolio</a></li>
                <li><a href="#" onClick={this.clicked}>Blog</a></li>
                <li><a href="#" onClick={this.clicked}>Contact</a></li>
            </ul>
        </div>
    );
  }
};


/*NavigationIndicator.propTypes = {
      navigationClassName: React.PropTypes.string.isRequired,
      navigationType: React.PropTypes.oneOf( ['left', 'right']),
      navigationClicked: React.PropTypes.func.isRequired
  }*/
export default NavigationBullet;