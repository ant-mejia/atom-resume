import React from 'react';

class Jumbotron extends React.Component {

  render() {
    return (
      <div className="uk-margin-large-bottom jumbotron">
        <div className="uk-cover-container" data-uk-height-viewport>
          <video data-uk-cover autoPlay loop muted>
            <source src="//www.quirksmode.org/html5/videos/big_buck_bunny.mp4?test1" type="video/mp4"/>
            <source src="//www.quirksmode.org/html5/videos/big_buck_bunny.ogv?test1" type="video/ogg"/>
          </video>
        </div>
      </div>
    );
  }

}

export default Jumbotron;
