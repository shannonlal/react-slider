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
        <div className={slideVisible}>
          {this.props.children}
        </div>
    );
  }
};

export default PageSlide;