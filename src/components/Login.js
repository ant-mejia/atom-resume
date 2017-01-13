import React from 'react';

class Login extends React.Component {

  validateEmail = () => {
    console.log('email');
  }

  validatePassword = () => {
    console.log('password');
  }

  submitForm = () => {
    if (this.validateEmail() === true && this.validatePassword() === true) {
      
    } else {

    }
  }

  render() {
    return (
      <div id="login-page">
        <h1>Sign In</h1>
        <div>
          <form onSubmit={this.submitForm}>
            <input type="email" onChange={this.validateEmail}/>
            <input type="password" onChange={this.validatePassword}/>
          </form>
        </div>
      </div>
    );
  }

}

export default Login;
