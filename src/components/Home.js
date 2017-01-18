import React from 'react';

class Home extends React.Component {

  render() {
    return (
      <div id="home-page">
        {/* <img src="assets/resumatic.jpg"/> */}
        <div className="jumbotron">
          <h1>HomePage</h1>
          <h2>This is a Home Page</h2>
        </div>
        <div className="main-wrapper mh100 container">
          <div className="side-nav">
            <nav id="vertical-nav" >
              <ul>
                <li>
                  <a href="#section1" data-number="1">
                    <span className="cd-dot"></span>
                    <span className="cd-label">Item 1</span>
                  </a>
                </li>
                <li>
                  <a href="#section2" data-number="2">
                    <span className="cd-dot"></span>
                    <span className="cd-label">Item 2</span>
                  </a>
                </li>
                <li>
                  <a href="#section3" data-number="3">
                    <span className="cd-dot"></span>
                    <span className="cd-label">Item 3</span>
                  </a>
                </li>
                <li>
                  <a href="#section4" data-number="4">
                    <span className="cd-dot"></span>
                    <span className="cd-label">Item 4</span>
                  </a>
                </li>
                {/* <!-- other navigation items here--> */}
              </ul>
            </nav>
          </div>
          <div className="main-section row" id="intro">
            <h1 className="section-title f50 ct">Reinvent Professional<span className="mc"></span></h1>
          </div>
        </div>
      </div>
    );
  }

}

export default Home;
