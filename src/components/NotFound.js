import React from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router'


class NotFound extends React.Component {

  render() {
    console.log(this.props.location.pathname);
    return (
      <div>
        <code>{this.props.location.pathname}</code> Not Found.
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    );
  }

}

export default NotFound;
