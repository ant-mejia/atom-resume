import React from 'react';
import SideNav from './SideNav';
import Jumbotron from './Jumbotron';
import Panel from './Panel';

class Home extends React.Component {

  render() {
    return (
      <div id="home-page">
        <SideNav/>
        <Jumbotron/>
        <div className="main-wrapper mh100 container">
          <div className="main-section row" id="intro1" data-uk-height-viewport>
            <h1 className="section-title f50 uk-text-center">Reinvent Professional</h1>
            <div className="uk-margin-xlarge-top uk-grid-match uk-child-width-1-3@m uk-text-center uk-grid" data-uk-grid>
              <Panel text="Panel Text" icon="target"/>
              <Panel text="Panel Text" icon="globe"/>
              <Panel text="Panel Text" icon="globe"/>
            </div>
          </div>
          <div className="main-section row" id="intro2" data-uk-height-viewport>
            <h1 className="section-title f50 uk-text-center">Reinvent Professional</h1>
            <div className="uk-margin-xlarge-top uk-grid-match uk-child-width-1-3@m uk-text-center uk-grid" data-uk-grid>
              <Panel text="Panel Text" icon="globe"/>
              <Panel text="Panel Text" icon="globe"/>
              <Panel text="Panel Text" icon="globe"/>
            </div>
          </div>
          <div className="main-section row" id="intro3" data-uk-height-viewport>
            <h1 className="section-title f50 uk-text-center">Reinvent Professional</h1>
            <div className="uk-margin-xlarge-top uk-grid-match uk-child-width-1-3@m uk-text-center uk-grid" data-uk-grid>
              <Panel text="Panel Text" icon="globe"/>
              <Panel text="Panel Text" icon="globe"/>
              <Panel text="Panel Text" icon="globe"/>
            </div>
          </div>
          <div className="main-section row" id="intro4" data-uk-height-viewport>
            <h1 className="section-title f50 uk-text-center">Reinvent Professional</h1>
            <div className="uk-margin-xlarge-top uk-grid-match uk-child-width-1-3@m uk-text-center uk-grid" data-uk-grid>
              <Panel text="Panel Text" icon="globe"/>
              <Panel text="Panel Text" icon="globe"/>
              <Panel text="Panel Text" icon="globe"/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Home;
