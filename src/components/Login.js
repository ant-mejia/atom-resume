import React, { PropTypes } from 'react'
import Match from 'react-router/Match'
import Link from 'react-router/Link'
import Redirect from 'react-router/Redirect'
import Router from 'react-router/BrowserRouter'


class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.signInUser({email: this.refs.email.value, password: this.refs.password.value})
  }

  render() {

    // const { from } =  '/'
    // const { redirectToReferrer } = this.state
    if (this.props.isUserAuth() === true) {
      return <Redirect to={'/profile'}/>
    }
    return (
      <div id="login-page" className="container">
        <div className="login-wrapper mc">
          <form onSubmit={(e) => this.submitForm(e)}>
            <input type="email" ref="email" placeholder="Email"/>
            <input type="password" ref="password" placeholder="Password"/>
            <button className="login mc btn" type="submit">Log in</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
