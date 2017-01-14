import React from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import UserStatus from './UserStatus';

class Header extends React.Component {

  render() {
    return (
      <header>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">Logo</Link>
            </div>
            <div className="navbar-right">
              <UserStatus user={this.props.user} signOutUser={this.props.signOutUser}/>
            </div>
          </div>
        </nav>
      </header>
    );
  }

}

export default Header;
