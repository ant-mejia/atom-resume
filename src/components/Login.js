import React, { PropTypes } from 'react'
import Match from 'react-router/Match'
import Link from 'react-router/Link'
import Redirect from 'react-router/Redirect'
import Router from 'react-router/BrowserRouter'


class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    this.props.fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || '/'
    const { redirectToReferrer } = this.state
    console.log(from);
    return (
      <div>
        {redirectToReferrer && (
          <Redirect to={from || '/'}/>
        )}
        {from && (
          <p>
            You must log in to view the page at
            <code>{from.pathname}</code>
          </p>
        )}
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export default Login;
