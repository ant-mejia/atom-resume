import React from 'react';
import {Scrollspy} from 'react-scrollspy';

class SideNav extends React.Component {

  render() {
    return (
      <div>
        <div className="uk-visible@m uk-position-center-right uk-position-fixed uk-position-z-index uk-position-medium">
          <Scrollspy className="uk-list uk-text-uppercase sidenav" componentTag="ul" items={['intro1', 'intro2', 'intro3']} currentClassName="active" offset={-200}>
            <li>
              <a className="uk-link-reset" href="#intro1" data-uk-scroll>Home</a>
            </li>
            <li>
              <a className="uk-link-reset" href="#intro2" data-uk-scroll>About</a>
            </li>
            <li>
              <a className="uk-link-reset" href="#intro3" data-uk-scroll>Contact</a>
            </li>
          </Scrollspy>
        </div>
        <div className="uk-hidden@m uk-position-bottom-right uk-position-fixed uk-position-z-index uk-position-medium">
          Hello
        </div>
      </div>
    );
  }

}

export default SideNav;
