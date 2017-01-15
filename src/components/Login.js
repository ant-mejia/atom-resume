import React, { PropTypes } from 'react'
import Match from 'react-router/Match'
import Link from 'react-router/Link'
import Redirect from 'react-router/Redirect'
import Router from 'react-router/BrowserRouter'


class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    // const { from } =  '/'
    // const { redirectToReferrer } = this.state
    if (this.props.isUserAuth() === true) {
      return <Redirect to={'/profile'}/>
    }
    return (
      <div>
        <button>Log in</button>
      </div>
    )
  }
}

export default Login;
