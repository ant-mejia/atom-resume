import React from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router'

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
            <Link to="/login">
              <button type="button" className="btn btn-default navbar-btn navbar-right">Sign in</button>
            </Link>
          </div>
        </nav>
      </header>
    );
  }

}

export default Header;
