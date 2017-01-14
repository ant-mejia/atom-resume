import React from 'react';
import {Match, Miss, Link } from 'react-router'

class UserStatus extends React.Component {

  render() {
    if (this.props.user.uid) {
      return (
        <div>

          <button type="button" className="btn btn-default navbar-btn navbar" onClick={() => this.props.signOutUser()}>{this.props.user.displayName || this.props.user.email}</button>
        </div>
      )
    }
    return (
      <div>
        <Link to="/login">
          <button type="button" className="btn btn-default navbar-btn navbar">Sign in</button>
        </Link>
      </div>
    );
  }

}

export default UserStatus;
