import React, { PropTypes } from 'react'
import Match from 'react-router/Match'
import Link from 'react-router/Link'
import Redirect from 'react-router/Redirect'
import Router from 'react-router/BrowserRouter'

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
              <Link className="navbar-brand" to="/">Resumatic</Link>
            </div>
            <div className="navbar-right">
              {this.props.isUserAuth() ? (
                <Link to="/profile">
                  <p className="navbar-text">
                    {this.props.user.displayName || this.props.user.email}
                  </p>
                </Link>
              ) : (
                <Link to="/login">
                  <button type="button" className="btn navbar-btn">Sign in</button>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>
    );
  }

}

export default Header;
