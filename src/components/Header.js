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
              <Link className="navbar-brand" to="/">Logo</Link>
            </div>
            <div className="navbar-right">
              {this.props.isUserAuth() ? (
                <p>
                  Welcome! {'Anthony'}
                  <button onClick={() => {
                    this.props.fakeAuth.signout(() => {
                      this.props.router.transitionTo('/')
                    })
                  }}>Sign out</button>
                </p>
              ) : (
                <Link to="/login">
                  <button>Sign In</button>
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
