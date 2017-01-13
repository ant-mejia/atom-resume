import React from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router'


class NotFound extends React.Component {

  render() {
    return (
      <div>
        Not Found
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    );
  }

}

export default NotFound;
