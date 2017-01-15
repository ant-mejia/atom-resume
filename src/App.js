/*eslint-disable import/no-unresolved*/
import React, { PropTypes } from 'react'
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'
import Link from 'react-router/Link'
import Redirect from 'react-router/Redirect'
import Router from 'react-router/BrowserRouter'
import Dash from './components/Dashboard'
import Home from './components/Home'
import Header from './components/Header'
import Login from './components/Login'
import NotFound from './components/NotFound'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeAuth: {
        isAuthenticated: false,
        authenticate(cb) {
          this.isAuthenticated = true
          setTimeout(cb, 100) // fake async
        },
        signout(cb) {
          this.isAuthenticated = false
          cb()
          setTimeout(cb, 100) // weird bug if async?
        }
      }
    }
  }
  componentDidMount() {

  }
  render() {
    return (
        <Router>
          {({ router }) => (
            <div>
              <Header fakeAuth={this.state.fakeAuth} router={router}/>
              <ul>
                <li><Link to="/">Home Page</Link></li>
                <li><Link to="/dash">Protected Page</Link></li>
              </ul>

              <Match exactly pattern="/" component={Home}/>
              <Match exactly pattern="/login" component={()=><Login fakeAuth={this.state.fakeAuth}/>}/>
              <MatchWhenAuthorized fakeAuth={this.state.fakeAuth} pattern="/dash" component={Dash}/>
              <Miss component={NotFound}/>
            </div>
          )}
        </Router>
    );
  }
}
const MatchWhenAuthorized = ({ component: Component, ...rest }) => (
  <Match {...rest} render={props => (
    false ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default App

/*
import React, { Component } from 'react';
import * as firebase from 'firebase';
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import './App.css';

firebase.initializeApp({
  apiKey: "AIzaSyAns6xJMP_rxiioUbl_gOiByj3ysbjtqtY",
  authDomain: "atom-resume.firebaseapp.com",
  databaseURL: "https://atom-resume.firebaseio.com",
  storageBucket: "atom-resume.appspot.com",
  messagingSenderId: "415478292794"
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
    this.setUser = this.setUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  signInUser = (cred, fn) => {
    firebase.auth().signInWithEmailAndPassword(cred.email, cred.password)
    .then((data) => {
      this.setUser(data);
      fn(data)
    })
    .catch(function(error) {
      console.log(error.message);
    });
  }

  signOutUser = (fn) => {
    firebase.auth().signOut().then(fn());
  }

  getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        user = {}
      }
      this.setUser(user);
    });
    if (firebase.auth().currentUser) {
      this.setState({
        user: firebase.auth().currentUser
      });
    }
  }
  setUser = (user) => {
    this.setState({user});
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header user={this.state.user} signOutUser={this.signOutUser} />
            <Match exactly pattern="/" component={Home} />
            <Match exactly pattern="/dash" component={Dashboard} />
            <Match exactly pattern="/login" component={() => <Login user={this.state.user} setUser={this.setUser} signInUser={this.signInUser} signOutUser={this.signOutUser}/>} />
            <Miss component={NotFound}/>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

 */
