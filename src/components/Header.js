import React, {PropTypes} from 'react'
import Match from 'react-router/Match'
import Link from 'react-router/Link'
import Redirect from 'react-router/Redirect'
import Router from 'react-router/BrowserRouter'

class Header extends React.Component {

  render() {
    return (
      <header>
        <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
          <div className="uk-navbar-left">
            <div className="uk-navbar-item uk-logo">
              <Link className="navbar-brand" to="/">Resumatic</Link>
            </div>
          </div>
          <div className="uk-navbar-right">
            <div className="uk-navbar-item">
              {this.props.isUserAuth()
                ? (
                  <Link to="/profile">
                    <h4 className="navbar-text">
                      {this.props.user.displayName || this.props.user.email}
                    </h4>
                  </Link>
                )
                : (
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
