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
    return (
        <div className="mySlides">
            <h1><b>Did You Know?</b></h1>
            <h1><i>We plan to sell trips to the moon in the 2020s</i></h1>
        </div>
    );
  }
};

export default PageSlide;