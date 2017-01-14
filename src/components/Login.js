import React, { PropTypes } from 'react'
import { Match, Miss, Link,History,Redirect } from 'react-router'
import Router from 'react-router/BrowserRouter'

class Login extends React.Component {

  validateEmail = () => {
    return true;
  }

  validatePassword = () => {
    return true;
  }

  submitLogin = (e) => {
    e.preventDefault();
    if (this.validateEmail() === true && this.validatePassword() === true) {
      this.props.signInUser({email: this.refs.logEmail.value, password: this.refs.logPass.value}, () => {
        Router.transitionTo('/asda')
      });
    } else {
    }
  }

  render() {
    return (
      <div>
        <div id="login-page">
          <h1>Sign In</h1>
          <div>
            <form onSubmit={(e) => this.submitLogin(e)}>
              <input ref="logEmail" type="email" onChange={this.validateEmail}/>
              <input ref="logPass" type="password" onChange={this.validatePassword}/>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default Login;
